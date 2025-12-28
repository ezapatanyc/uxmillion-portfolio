import { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
import { cn } from "@/lib/utils";

interface P5CanvasProps {
  className?: string;
  sketch: (p: p5) => void;
}

const P5Canvas = ({ className, sketch }: P5CanvasProps) => {
  // Mount guard for SSG - only render canvas on client after hydration
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Skip if not mounted (during SSG) or no ref
    if (!mounted || !canvasRef.current) return;

    // Cleanup any existing instance first
    if (p5Instance.current) {
      p5Instance.current.remove();
      p5Instance.current = null;
    }

    // Use requestAnimationFrame for better timing with DOM readiness
    const createInstance = () => {
      requestAnimationFrame(() => {
        if (canvasRef.current && !p5Instance.current) {
          try {
            // Disable p5's friendly error system which causes the pixels error
            (window as any).p5 = (window as any).p5 || {};
            (window as any).p5._friendlyError = () => { };

            p5Instance.current = new p5(sketch, canvasRef.current);
          } catch (error) {
            console.error('Error creating p5 instance:', error);
          }
        }
      });
    };

    // Small delay to ensure DOM is fully ready
    setTimeout(createInstance, 50);

    // Cleanup function to remove the p5 instance when unmounting
    return () => {
      if (p5Instance.current) {
        try {
          p5Instance.current.remove();
          p5Instance.current = null;
        } catch (error) {
          console.error('Error removing p5 instance:', error);
        }
      }
    };
  }, [sketch, mounted]);

  // Return placeholder during SSG, actual canvas after mount
  return <div ref={canvasRef} className={cn("p5-canvas", className)} />;
};

export default P5Canvas;

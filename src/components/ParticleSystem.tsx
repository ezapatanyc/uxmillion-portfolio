import { useRef, useEffect } from 'react';
import { useTheme } from '@/theme/ThemeProvider';

interface ParticleSystemProps {
  className?: string;
}

const ParticleSystem = ({ className }: ParticleSystemProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; radius: number; opacity: number }[] = [];
    const particleCount = 80;
    const connectionDistance = 150;

    // Cache colors to avoid recalculation per frame
    let connectionRgb = '0, 153, 204';
    let particleRgb = '0, 153, 204';

    const updateColors = () => {
      let isLight = theme === 'light';
      if (theme === 'system') {
        isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      }
      connectionRgb = isLight ? '0, 153, 204' : '0, 255, 255';
      particleRgb = isLight ? '0, 153, 204' : '0, 255, 255';
    };

    // Initial color set
    updateColors();

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
    };

    const update = () => {
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3;
            // Use cached colors
            ctx.strokeStyle = `rgba(${connectionRgb}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(particle => {
        ctx.fillStyle = `rgba(${particleRgb}, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 3
        );
        gradient.addColorStop(0, `rgba(${connectionRgb}, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${connectionRgb}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      update();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Setup
    resize();
    init();
    animate();

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);

    // Listen for system theme changes if needed
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleThemeChange = () => {
      if (theme === 'system') updateColors();
    };
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleThemeChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  // Handle system theme change specifically if theme is 'system'
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
      const handleChange = () => {
        // Force re-render/logic update by toggling context if needed, 
        // but the main effect dependency on `theme` might not catch system changes directly without this
        // Actually, easiest way is to re-trigger the main effect logic, but since that one depends on `theme` string...
        // We can just rely on the component re-rendering if `useTheme` handles system changes? 
        // Usually `useTheme` from libraries handles this.
        // If not, we might need a separate state or force update. 
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return <canvas ref={canvasRef} className={className} />;
};

export default ParticleSystem;

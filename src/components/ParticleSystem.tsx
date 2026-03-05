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

    // ── Reduce particle count for better perf on all devices ──
    const particleCount = 50; // was 80 — fewer particles = dramatically less work
    const connectionDistance = 120; // tighter threshold = fewer connections drawn
    const connectionDistanceSq = connectionDistance * connectionDistance; // avoid sqrt

    let particles: { x: number; y: number; vx: number; vy: number; radius: number; opacity: number }[] = [];

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

    updateColors();

    let animationFrameId: number;
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

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
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    };

    const update = () => {
      const w = canvas.width;
      const h = canvas.height;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        else if (p.y > h) p.y = 0;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── Draw connections — use squared distance to avoid Math.sqrt ──
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDistanceSq) {
            // Only compute sqrt when we actually need opacity
            const distance = Math.sqrt(distSq);
            const opacity = (1 - distance / connectionDistance) * 0.3;
            ctx.strokeStyle = `rgba(${connectionRgb}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // ── Draw particles — skip per-particle radial gradient (major perf win) ──
      // Instead, draw a slightly larger, semi-transparent circle for the glow
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Glow — simple filled circle instead of radialGradient
        ctx.fillStyle = `rgba(${particleRgb}, ${p.opacity * 0.15})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `rgba(${particleRgb}, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
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

    // Debounced resize — avoids expensive re-layout on every pixel of drag
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 150);
    };
    window.addEventListener('resize', handleResize);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleThemeChange = () => {
      if (theme === 'system') updateColors();
    };
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleThemeChange);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className={className} />;
};

export default ParticleSystem;


import { useCallback } from 'react';
import P5Canvas from './P5Canvas';
import p5 from 'p5';

interface ParticleSystemProps {
  className?: string;
}

const ParticleSystem = ({ className }: ParticleSystemProps) => {
  const sketch = useCallback((p: p5) => {
    // Cache reduced motion preference once
    let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMediaChange = (e: MediaQueryListEvent) => { reducedMotion = e.matches; };
    mediaQuery.addEventListener('change', handleMediaChange);

    // Detect mobile for lower particle count
    const isMobile = window.innerWidth < 768;
    const maxParticles = isMobile ? 50 : 100;
    
    // Throttle particle creation - only every 3rd frame
    let frameCounter = 0;

    // Reusable vectors to avoid allocations
    let mouseVec: p5.Vector;
    let dirVec: p5.Vector;
    let noiseVec: p5.Vector;

    class Particle {
      position: p5.Vector;
      velocity: p5.Vector;
      acceleration: p5.Vector;
      color: p5.Color;
      size: number;
      lifespan: number;

      constructor(x: number, y: number) {
        this.position = p.createVector(x, y);
        this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
        this.acceleration = p.createVector(0, 0);
        this.color = p.color(
          p.random(50, 200),
          p.random(100, 255),
          p.random(200, 255),
          p.random(150, 200)
        );
        this.size = p.random(3, 8);
        this.lifespan = 255;
      }

      update() {
        if (!reducedMotion) {
          this.velocity.add(this.acceleration);
          this.position.add(this.velocity);
          this.acceleration.mult(0);
          this.lifespan -= 1.5;
        }
      }

      display() {
        p.noStroke();
        const c = this.color;
        p.fill(p.red(c), p.green(c), p.blue(c), this.lifespan);
        p.circle(this.position.x, this.position.y, this.size);
      }

      isDead() {
        return this.lifespan <= 0;
      }

      applyForce(force: p5.Vector) {
        this.acceleration.add(force);
      }
    }

    let particles: Particle[] = [];
    let mouseAttractor = false;
    let touchX = 0, touchY = 0;

    p.setup = () => {
      try {
        const width = Math.max(p.windowWidth || 800, 400);
        const height = Math.max(p.windowHeight || 600, 300);
        
        p.createCanvas(width, height);
        p.colorMode(p.RGB, 255, 255, 255, 255);
        p.frameRate(30); // Reduced from 60 to 30 fps
        
        // Initialize reusable vectors
        mouseVec = p.createVector(0, 0);
        dirVec = p.createVector(0, 0);
        noiseVec = p.createVector(0, 0);
        
        // Initialize with fewer particles
        for (let i = 0; i < 30; i++) {
          particles.push(new Particle(p.random(p.width), p.random(p.height)));
        }
      } catch (error) {
        console.error('Error in p5 setup:', error);
      }
    };

    p.draw = () => {
      try {
        p.clear();
        frameCounter++;
        
        // Create new particles only every 3rd frame
        if (particles.length < maxParticles && !reducedMotion && frameCounter % 3 === 0) {
          particles.push(new Particle(p.random(p.width), p.random(p.height)));
        }
        
        for (let i = particles.length - 1; i >= 0; i--) {
          const particle = particles[i];
          
          // Apply mouse/touch attraction
          if (mouseAttractor && !reducedMotion) {
            mouseVec.set(touchX, touchY);
            dirVec.set(mouseVec.x - particle.position.x, mouseVec.y - particle.position.y);
            const distance = dirVec.mag();
            
            if (distance < 200) {
              dirVec.normalize();
              dirVec.mult(0.1);
              particle.applyForce(dirVec);
            }
          }
          
          // Add subtle movement - skip noise on some frames for performance
          if (!reducedMotion && frameCounter % 2 === 0) {
            noiseVec.set(
              p.map(p.noise(particle.position.x * 0.01, particle.position.y * 0.01, p.frameCount * 0.01), 0, 1, -0.1, 0.1),
              p.map(p.noise(particle.position.y * 0.01, particle.position.x * 0.01, p.frameCount * 0.01 + 10000), 0, 1, -0.1, 0.1)
            );
            particle.applyForce(noiseVec);
          }
          
          particle.update();
          particle.display();
          
          if (particle.isDead()) {
            particles.splice(i, 1);
          }
        }
      } catch (error) {
        console.error('Error in p5 draw:', error);
      }
    };

    p.windowResized = () => {
      try {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      } catch (error) {
        console.error('Error in p5 windowResized:', error);
      }
    };
    
    p.mousePressed = () => {
      mouseAttractor = true;
      touchX = p.mouseX;
      touchY = p.mouseY;
    };
    
    p.mouseDragged = () => {
      touchX = p.mouseX;
      touchY = p.mouseY;
    };
    
    p.mouseReleased = () => {
      mouseAttractor = false;
    };
    
    p.touchStarted = () => {
      if (p.touches && p.touches.length > 0) {
        mouseAttractor = true;
        const touch = p.touches[0] as any;
        touchX = touch.x;
        touchY = touch.y;
      }
      return false;
    };
    
    p.touchMoved = () => {
      if (p.touches && p.touches.length > 0) {
        const touch = p.touches[0] as any;
        touchX = touch.x;
        touchY = touch.y;
      }
      return false;
    };
    
    p.touchEnded = () => {
      mouseAttractor = false;
      return false;
    };
  }, []);

  return (
    <P5Canvas 
      sketch={sketch} 
      className={className} 
    />
  );
};

export default ParticleSystem;

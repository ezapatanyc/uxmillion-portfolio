import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface VideoIntroProps {
  onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const [showSkip, setShowSkip] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Skip intro if user prefers reduced motion
    if (mediaQuery.matches) {
      onComplete();
      return;
    }

    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 2000);

    return () => clearTimeout(skipTimer);
  }, [onComplete]);

  const handleVideoEnd = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500); // Wait for fade out animation
  };

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSkip();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-50 bg-theme-bg900 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        aria-label="Introduction video"
      >
        <source src="/assets/hero-intro-final_compressed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {showSkip && (
        <Button
          onClick={handleSkip}
          className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Skip introduction video"
        >
          Skip Intro
        </Button>
      )}
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-neon-cyan/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-neon-pink/5 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default VideoIntro;
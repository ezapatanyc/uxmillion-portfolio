import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer 
} from "@/components/ui/animated-gallery"

// Portfolio images organized by column - showcasing actual UX design work
const WIREFRAME_IMAGES_1 = [
  "/uxmillion-uploads/f57e4c74-507f-4395-a940-dfc4eaeb8af0.png", // Design system documentation
  "/uxmillion-uploads/18adef2b-7d96-4e6c-8122-72755b355601.png", // Automation workflow diagram
  "/uxmillion-uploads/b12f2a1c-d4f0-41f3-8a2b-9e5018c37282.png", // Location/Map search interface
  "/uxmillion-uploads/4051f38a-cafa-4bba-842b-b10d718a1bb3.png", // UX illustration overview
]

const MOBILE_IMAGES_2 = [
  "/uxmillion-uploads/c2865a28-a511-4fc5-b002-2f2859d61828.png", // Crypto wallet mobile app
  "/uxmillion-uploads/fdcf9523-4b6a-498c-a19b-59db1d0a6663.png", // Health & medication tracker
  "/uxmillion-uploads/44c7dbe5-d3a0-4d38-9687-390f103cdd96.png", // E-commerce mobile store
  "/uxmillion-uploads/8b4ea584-9f50-48df-b14b-edb94900525d.png", // Banking app interface
]

const DESIGN_IMAGES_3 = [
  "/uxmillion-uploads/40be435d-63be-4e61-a62f-67f3176cd0b7.png", // Dashboard analytics
  "/uxmillion-uploads/1c4e1830-e563-4e4d-b381-300ec9068853.png", // UX illustration with multiple interfaces
  "/uxmillion-uploads/f57e4c74-507f-4395-a940-dfc4eaeb8af0.png", // Design system (repeated for balance)
  "/uxmillion-uploads/40be435d-63be-4e61-a62f-67f3176cd0b7.png", // Dashboard (repeated for balance)
]

export const AnimatedPortfolioGallery = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMediaChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      window.scrollTo({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        top: workSection.offsetTop - 80
      });
    }
  };
  return (
    <div className="relative bg-theme-bg900">
      
      {/* Neon background blur effect matching portfolio theme */}
      <div 
        className="pointer-events-none absolute z-10 h-[70vh] w-full opacity-30"
        style={{
          background: "linear-gradient(135deg, rgba(78, 214, 255, 0.1), rgba(255, 114, 231, 0.1))",
          filter: "blur(84px)",
          mixBlendMode: "overlay",
        }}
      />

      <ContainerScroll className="relative h-[250vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer className="p-4">
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {WIREFRAME_IMAGES_1.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-[4/5] block h-auto max-h-full w-full rounded-lg object-cover neon-card"
                  src={imageUrl}
                  alt="UX wireframe and design mockup"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
              {MOBILE_IMAGES_2.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-[4/5] block h-auto max-h-full w-full rounded-lg object-cover neon-card"
                  src={imageUrl}
                  alt="Mobile app interface design"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              ))}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {DESIGN_IMAGES_3.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-[4/5] block h-auto max-h-full w-full rounded-lg object-cover neon-card"
                  src={imageUrl}
                  alt="Web interface and UX design"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  )
}
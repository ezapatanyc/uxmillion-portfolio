import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
const Testimonials = () => {
  const testimonials = [{
    author: {
      name: "Paola Palacios",
      handle: "Senior UX Designer",
      avatar: "/uxmillion-uploads/06ef7374-cc62-460e-856f-c0eae6050873.png"
    },
    text: "I've had the pleasure of working with Emiliano twice... He's scrappy, resourceful, and a true go-getter... Emiliano is entrepreneurial, adaptable, and always brings his best to the table."
  }, {
    author: {
      name: "Alex Johnson",
      handle: "UX Designer",
      avatar: "/uxmillion-uploads/06ef7374-cc62-460e-856f-c0eae6050873.png"
    },
    text: "Working with Emiliano was an inspiring experience... His ability to empathize with users and translate their needs into actionable insights makes him a standout UX designer..."
  }, {
    author: {
      name: "Samantha Lee",
      handle: "Product Designer",
      avatar: "/uxmillion-uploads/06ef7374-cc62-460e-856f-c0eae6050873.png"
    },
    text: "I had the opportunity to work alongside Emiliano on a digital product redesign... His creativity and problem-solving skills are invaluable assets..."
  }];
  return <section id="testimonials" className="section-padding">
    <div className="max-w-5xl mx-auto px-4 md:px-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background -z-10"></div>

        {/* Trust indicators */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              15+ Projects Delivered
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Trusted by Healthcare • Fintech • E-commerce
            </span>

          </div>
        </div>

        <TestimonialsSection title="What Others Say" description="Trusted by teams at startups and enterprises who value design excellence" testimonials={testimonials} className="py-0" />
      </div>
    </div>
  </section>;
};
export default Testimonials;
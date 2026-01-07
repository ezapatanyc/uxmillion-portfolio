import { Mail, Linkedin, ArrowRight, Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ezapata.nyc@gmail.com');
      toast({
        title: "Email copied!",
        description: "ezapata.nyc@gmail.com has been copied to your clipboard."
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please manually copy: ezapata.nyc@gmail.com",
        variant: "destructive"
      });
    }
  };
  return (
    <section id="contact" className="section-padding px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-theme-heading">
          Contact to Work Together
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button asChild className="flex items-center gap-3 px-8 py-4 text-lg" variant="default">
            <a href="mailto:ezapata.nyc@gmail.com?subject=Let's work together&body=Hi Emiliano,%0D%0A%0D%0AI'd like to discuss a project with you.">
              <Mail className="w-5 h-5" />
              Send Email
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>

          <Button asChild className="flex items-center gap-3 px-8 py-4 text-lg" variant="outline">
            <a href="https://www.linkedin.com/in/ezapata00/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Copy email fallback */}
        <div className="mt-6 flex justify-center">
          <Button
            onClick={handleCopyEmail}
            variant="ghost"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Copy className="w-4 h-4" />
            Copy email instead
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Contact;
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="p-6 flex justify-end">
        <ThemeToggle />
      </header>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center space-y-6 max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Page not found</h2>
            <p className="text-muted-foreground">
              Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>
          </div>

          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

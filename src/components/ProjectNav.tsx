import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const ProjectNav = () => {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Button
                    variant="ghost"
                    onClick={() => {
                        navigate('/#work');
                        // Optional: scroll to work section if needed, or just navigate
                    }}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground pl-0 hover:bg-transparent"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                </Button>

                <ThemeToggle />
            </div>
        </header>
    );
};

export default ProjectNav;

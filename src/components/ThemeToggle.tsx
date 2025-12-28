import { Button } from "@/components/ui/button";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "@/theme/ThemeProvider";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center gap-1">
            <Button
                variant={theme === "light" ? "default" : "ghost"}
                size="icon"
                onClick={() => setTheme("light")}
                className="h-8 w-8"
                aria-label="Light theme"
            >
                <Sun className="h-4 w-4" />
            </Button>
            <Button
                variant={theme === "dark" ? "default" : "ghost"}
                size="icon"
                onClick={() => setTheme("dark")}
                className="h-8 w-8"
                aria-label="Dark theme"
            >
                <Moon className="h-4 w-4" />
            </Button>
            <Button
                variant={theme === "system" ? "default" : "ghost"}
                size="icon"
                onClick={() => setTheme("system")}
                className="h-8 w-8"
                aria-label="System theme"
            >
                <Laptop className="h-4 w-4" />
            </Button>
        </div>
    );
}

export default ThemeToggle;

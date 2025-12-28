import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getResolvedTheme(theme: Theme): "light" | "dark" {
    if (theme === "system") {
        if (typeof window === "undefined") return "dark"; // Default for SSG
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return theme;
}

function applyTheme(theme: Theme) {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    root.classList.remove("light", "dark");

    const resolved = getResolvedTheme(theme);
    root.classList.add(resolved);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "system"; // SSG default
        const stored = localStorage.getItem("theme") as Theme | null;
        return stored ?? "system";
    });

    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() =>
        getResolvedTheme(theme)
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
        applyTheme(theme);
        setResolvedTheme(getResolvedTheme(theme));

        // Listen for system preference changes when in system mode
        if (theme !== "system") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            applyTheme("system");
            setResolvedTheme(getResolvedTheme("system"));
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme]);

    const value = useMemo(() => ({ theme, setTheme, resolvedTheme }), [theme, resolvedTheme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

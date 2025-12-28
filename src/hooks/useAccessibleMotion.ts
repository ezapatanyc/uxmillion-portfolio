import { useReducedMotion } from "framer-motion";

/**
 * Hook for accessible motion settings.
 * Returns motion configuration based on user's reduced motion preference.
 */
export function useAccessibleMotion() {
    const shouldReduceMotion = useReducedMotion();

    return {
        shouldReduceMotion,
        // Standard transition that respects reduced motion
        transition: shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.3, ease: "easeOut" },
        // Fade-in animation variants
        fadeIn: {
            initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: "easeOut" },
        },
        // Scale animation variants
        scale: {
            initial: shouldReduceMotion ? { scale: 1 } : { scale: 0.95 },
            animate: { scale: 1 },
            whileHover: shouldReduceMotion ? {} : { scale: 1.02 },
            transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.2 },
        },
    };
}

export default useAccessibleMotion;

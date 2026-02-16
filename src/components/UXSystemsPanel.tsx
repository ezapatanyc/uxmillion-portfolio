import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Layers, Sparkles, TrendingUp, MousePointer, Search } from 'lucide-react';

interface UXSystemsPanelProps {
    isVisible: boolean;
    targetRef: React.RefObject<HTMLElement>;
}

export const UXSystemsPanel = ({ isVisible, targetRef }: UXSystemsPanelProps) => {
    const [panelPosition, setPanelPosition] = useState({ x: 0, y: 0 });
    const panelRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Parallax transforms for subtle mouse tracking
    const parallaxX = useTransform(mouseX, [-100, 100], [-8, 8]);
    const parallaxY = useTransform(mouseY, [-100, 100], [-8, 8]);

    // Inverse parallax for right column (must be declared at top level, not in JSX)
    const inverseParallaxX = useTransform(parallaxX, (x) => -x * 0.5);
    const inverseParallaxY = useTransform(parallaxY, (y) => -y * 0.5);

    // Update panel position based on target element
    useEffect(() => {
        if (targetRef.current && isVisible) {
            const rect = targetRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Center horizontally on viewport
            const centerX = viewportWidth / 2;

            // Position above the headline, centered vertically in upper portion
            const centerY = viewportHeight * 0.25; // 25% from top for balanced look

            setPanelPosition({
                x: centerX,
                y: centerY,
            });
        }
    }, [isVisible, targetRef]);

    // Track mouse movement for parallax
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!panelRef.current) return;
        const rect = panelRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    ref={panelRef}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{
                        duration: 0.3,
                        ease: [0.23, 1, 0.32, 1] // Custom easing for premium feel
                    }}
                    className="fixed z-50 pointer-events-auto"
                    style={{
                        left: `${panelPosition.x}px`,
                        top: `${panelPosition.y}px`,
                        transform: 'translate(-50%, -50%)',
                    }}
                    onMouseMove={handleMouseMove}
                    aria-hidden="true"
                >
                    {/* Subtle outer glow - softer for iOS style */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-violet-400/20 opacity-40 blur-2xl" />

                    {/* Main panel container - iOS glassmorphism */}
                    <div className="relative w-[90vw] max-w-4xl rounded-3xl overflow-hidden backdrop-blur-3xl bg-gradient-to-br from-slate-900/60 via-slate-800/50 to-slate-900/60 border border-white/10 shadow-2xl">
                        {/* Subtle top accent - thinner and more refined */}
                        <div className="h-px bg-gradient-to-r from-cyan-400/40 via-purple-400/40 to-violet-400/40" />

                        {/* iOS-style vibrancy layer */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />

                        {/* Content grid */}
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                {/* Left Column - Dashboard UI Mock */}
                                <motion.div
                                    style={{ x: parallaxX, y: parallaxY }}
                                    className="md:col-span-2 space-y-4"
                                >
                                    {/* Dashboard Header */}
                                    <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                                <span className="text-xs text-slate-400 font-mono">LIVE PRODUCTION</span>
                                            </div>
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                            </div>
                                        </div>

                                        {/* Mini chart */}
                                        <div className="h-24 bg-gradient-to-t from-purple-500/10 to-transparent rounded-lg flex items-end justify-between px-2 pb-2 gap-1">
                                            {[40, 65, 45, 80, 60, 95, 75, 88].map((height, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ scaleY: 0 }}
                                                    animate={{ scaleY: 1 }}
                                                    transition={{ delay: i * 0.05, duration: 0.4 }}
                                                    className="flex-1 bg-gradient-to-t from-cyan-400 to-purple-400 rounded-t"
                                                    style={{ height: `${height}%`, transformOrigin: 'bottom' }}
                                                />
                                            ))}
                                        </div>

                                        <div className="mt-3 flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4 text-green-400" />
                                                <span className="text-sm font-semibold text-slate-200">+32.5%</span>
                                            </div>
                                            <span className="text-xs text-slate-500">User engagement</span>
                                        </div>
                                    </div>

                                    {/* Component System Grid */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {['Color', 'Typography', 'Spacing', 'Icons', 'Components', 'Patterns'].map((item, i) => (
                                            <motion.div
                                                key={item}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.1 + i * 0.05 }}
                                                className="bg-slate-800/30 backdrop-blur-md rounded-lg p-3 border border-white/10 hover:border-white/20 hover:bg-slate-800/40 transition-all duration-200"
                                            >
                                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-2 flex items-center justify-center">
                                                    <Layers className="w-4 h-4 text-cyan-400" />
                                                </div>
                                                <span className="text-xs text-slate-400">{item}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Right Column - Mobile App + Analytics */}
                                <motion.div
                                    style={{ x: inverseParallaxX, y: inverseParallaxY }}
                                    className="space-y-4"
                                >
                                    {/* Mobile App Screen */}
                                    <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-4 border border-white/10 relative overflow-hidden">
                                        {/* Phone notch */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-2xl z-10" />

                                        <div className="aspect-[9/16] bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden border border-slate-700/30 relative">
                                            {/* App content simulation */}
                                            <div className="p-4 space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600" />
                                                    <div className="flex gap-1">
                                                        <div className="w-8 h-1.5 bg-slate-600 rounded-full" />
                                                        <div className="w-8 h-1.5 bg-purple-500 rounded-full" />
                                                    </div>
                                                </div>

                                                {[1, 2, 3].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ x: -20, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: 0.2 + i * 0.1 }}
                                                        className="h-16 bg-slate-700/50 rounded-lg"
                                                    />
                                                ))}
                                            </div>

                                            {/* Floating cursor indicator */}
                                            <motion.div
                                                animate={{
                                                    x: [10, 30, 10],
                                                    y: [20, 40, 20],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute top-1/2 left-1/2"
                                            >
                                                <MousePointer className="w-5 h-5 text-purple-400" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Analytics card */}
                                    <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Search className="w-4 h-4 text-cyan-400" />
                                            <span className="text-xs font-semibold text-slate-300">Insights</span>
                                        </div>
                                        <div className="space-y-2">
                                            {[
                                                { label: 'Scale', value: '10x' },
                                                { label: 'Velocity', value: '3x' },
                                            ].map((metric) => (
                                                <div key={metric.label} className="flex items-center justify-between">
                                                    <span className="text-xs text-slate-500">{metric.label}</span>
                                                    <span className="text-sm font-bold text-purple-400">{metric.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Bottom accent text */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6 pt-4 border-t border-slate-700/30 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-violet-400" />
                                    <span className="text-xs text-slate-400 font-medium">
                                        Enterprise UX Systems • Production-Ready • AI-Forward
                                    </span>
                                </div>

                                {/* Floating particles */}
                                <div className="flex gap-1">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                y: [-2, 2, -2],
                                                opacity: [0.4, 1, 0.4],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                            className="w-1 h-1 rounded-full bg-purple-400"
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Ambient glow particles */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 rounded-full bg-cyan-400 blur-sm"
                                style={{
                                    left: `${20 + i * 20}%`,
                                    top: `${30 + (i % 2) * 40}%`,
                                }}
                                animate={{
                                    opacity: [0.2, 0.8, 0.2],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: 2 + i * 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

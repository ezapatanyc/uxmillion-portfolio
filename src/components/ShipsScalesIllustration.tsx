import React from 'react';

interface ShipsScalesIllustrationProps {
    className?: string;
    style?: React.CSSProperties;
}

const ShipsScalesIllustration: React.FC<ShipsScalesIllustrationProps> = ({ className, style }) => {
    return (
        <svg
            width="600"
            height="280"
            viewBox="0 0 600 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#0891b2', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.6 }} />
                    <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 0.6 }} />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Ship Section - Design & Launch */}
            <g id="ship-section">
                {/* Wireframe/Design Board */}
                <rect x="20" y="40" width="140" height="200" rx="8" fill="url(#gradient2)" stroke="#0891b2" strokeWidth="3" opacity="1" />
                <rect x="35" y="60" width="60" height="8" fill="#0891b2" opacity="0.85" />
                <rect x="35" y="80" width="90" height="8" fill="#0891b2" opacity="0.75" />
                <rect x="35" y="100" width="70" height="8" fill="#0891b2" opacity="0.75" />

                {/* Component Grid */}
                <rect x="35" y="125" width="30" height="30" rx="4" fill="none" stroke="#7c3aed" strokeWidth="2.5" opacity="1" />
                <rect x="70" y="125" width="30" height="30" rx="4" fill="none" stroke="#7c3aed" strokeWidth="2.5" opacity="1" />
                <rect x="105" y="125" width="30" height="30" rx="4" fill="none" stroke="#7c3aed" strokeWidth="2.5" opacity="1" />
                <rect x="35" y="160" width="30" height="30" rx="4" fill="none" stroke="#0891b2" strokeWidth="2.5" opacity="1" />
                <rect x="70" y="160" width="30" height="30" rx="4" fill="none" stroke="#0891b2" strokeWidth="2.5" opacity="1" />
                <rect x="105" y="160" width="30" height="30" rx="4" fill="none" stroke="#0891b2" strokeWidth="2.5" opacity="1" />

                {/* Design Tools Icon */}
                <circle cx="90" cy="210" r="4" fill="#0891b2" filter="url(#glow)" opacity="1" />
                <path d="M 85 220 L 95 220 L 90 225 Z" fill="#7c3aed" opacity="1" />
            </g>

            {/* Responsive Devices Section - Multi-platform */}
            <g id="responsive-section" transform="translate(200, 0)">
                {/* Desktop Screen */}
                <rect x="20" y="60" width="120" height="80" rx="4" fill="url(#gradient2)" stroke="#0891b2" strokeWidth="3" opacity="1" />
                {/* Interactive Screen - Desktop */}
                <rect
                    x="30" y="70" width="100" height="50" rx="2"
                    fill="#1e293b" opacity="0.8"
                    className="transition-opacity duration-300 hover:opacity-100 cursor-pointer"
                />
                <rect x="38" y="78" width="30" height="4" fill="#0891b2" opacity="0.9" pointerEvents="none" />
                <rect x="38" y="88" width="50" height="4" fill="#0891b2" opacity="0.8" pointerEvents="none" />
                <rect x="38" y="98" width="40" height="4" fill="#0891b2" opacity="0.8" pointerEvents="none" />
                <line x1="75" y1="70" x2="75" y2="120" stroke="#7c3aed" strokeWidth="2" opacity="1" />
                <rect x="80" y="78" width="15" height="15" rx="2" fill="#7c3aed" opacity="0.7" />
                <rect x="100" y="78" width="15" height="15" rx="2" fill="#7c3aed" opacity="0.7" />
                <rect x="80" y="98" width="15" height="15" rx="2" fill="#7c3aed" opacity="0.7" />
                <rect x="100" y="98" width="15" height="15" rx="2" fill="#7c3aed" opacity="0.7" />

                {/* Tablet */}
                <rect x="155" y="80" width="60" height="90" rx="6" fill="url(#gradient2)" stroke="#7c3aed" strokeWidth="3" opacity="1" />
                {/* Interactive Screen - Tablet */}
                <rect
                    x="162" y="90" width="46" height="65" rx="2"
                    fill="#1e293b" opacity="0.8"
                    className="transition-opacity duration-300 hover:opacity-100 cursor-pointer"
                />
                <rect x="168" y="96" width="18" height="3" fill="#0891b2" opacity="0.9" pointerEvents="none" />
                <rect x="168" y="104" width="25" height="3" fill="#0891b2" opacity="0.8" pointerEvents="none" />
                <circle cx="185" cy="162" r="3" fill="#7c3aed" opacity="1" />

                {/* Mobile Phone */}
                <rect x="230" y="100" width="40" height="75" rx="6" fill="url(#gradient2)" stroke="#0891b2" strokeWidth="3" opacity="1" />
                {/* Interactive Screen - Mobile */}
                <rect
                    x="236" y="108" width="28" height="55" rx="2"
                    fill="#1e293b" opacity="0.8"
                    className="transition-opacity duration-300 hover:opacity-100 cursor-pointer"
                />
                <rect x="240" y="113" width="12" height="2" fill="#0891b2" opacity="0.9" pointerEvents="none" />
                <rect x="240" y="120" width="16" height="2" fill="#0891b2" opacity="0.8" pointerEvents="none" />
                <circle cx="250" cy="167" r="2" fill="#7c3aed" opacity="1" />

                {/* Connection Lines */}
                <path d="M 140 100 L 155 105" stroke="url(#gradient1)" strokeWidth="2.5" strokeDasharray="4,4" opacity="1" />
                <path d="M 215 125 L 230 135" stroke="url(#gradient1)" strokeWidth="2.5" strokeDasharray="4,4" opacity="1" />
            </g>

            {/* Scale Section - Growth & Analytics */}
            <g id="scale-section" transform="translate(470, 0)">
                {/* Growth Chart */}
                <rect x="10" y="140" width="100" height="90" rx="6" fill="url(#gradient2)" stroke="#7c3aed" strokeWidth="3" opacity="1" />

                {/* Chart Bars - Growing */}
                <rect x="20" y="200" width="12" height="20" fill="#0891b2" opacity="0.65" />
                <rect x="36" y="190" width="12" height="30" fill="#0891b2" opacity="0.75" />
                <rect x="52" y="175" width="12" height="45" fill="#0891b2" opacity="0.85" />
                <rect x="68" y="155" width="12" height="65" fill="url(#gradient1)" opacity="0.95" />
                <rect x="84" y="150" width="12" height="70" fill="url(#gradient1)" opacity="1" />

                {/* Trend Line */}
                <path d="M 26 210 L 42 200 L 58 185 L 74 165 L 90 155" stroke="#7c3aed" strokeWidth="3.5" fill="none" filter="url(#glow)" opacity="1" />

                {/* Workflow Process Icons - UX Stages */}
                <g id="workflow-icons" opacity="1">
                    {/* Research Icon (Magnifying Glass) */}
                    <circle cx="30" cy="50" r="6" fill="none" stroke="#0891b2" strokeWidth="2.5" />
                    <line x1="34" y1="54" x2="38" y2="58" stroke="#0891b2" strokeWidth="2.5" />

                    {/* Design Icon (Pencil) */}
                    <path d="M 50 42 L 50 52 L 52 54 L 58 54 L 60 52 L 60 42 Z" fill="none" stroke="#0891b2" strokeWidth="2.5" />
                    <line x1="55" y1="42" x2="55" y2="36" stroke="#0891b2" strokeWidth="2.5" />

                    {/* Build Icon (Code Brackets) */}
                    <path d="M 75 38 L 78 42 L 75 46" fill="none" stroke="#7c3aed" strokeWidth="2.5" />
                    <path d="M 85 38 L 82 42 L 85 46" fill="none" stroke="#7c3aed" strokeWidth="2.5" />
                    <circle cx="80" cy="42" r="2" fill="#7c3aed" opacity="1" />

                    {/* Launch Icon (Rocket) */}
                    <path d="M 97 48 L 100 56 L 103 48 L 100 42 Z" fill="none" stroke="#7c3aed" strokeWidth="2.5" />
                    <circle cx="100" cy="50" r="2" fill="#7c3aed" opacity="0.8" />
                    <path d="M 97 56 L 95 60" stroke="#7c3aed" strokeWidth="2" opacity="0.9" />
                    <path d="M 103 56 L 105 60" stroke="#7c3aed" strokeWidth="2" opacity="0.9" />
                </g>

                {/* Scale Indicator */}
                <path d="M 50 105 L 60 105 L 55 98 Z" fill="#0891b2" opacity="0.85" />
                <text x="65" y="108" fontFamily="Arial, sans-serif" fontSize="10" fill="#0891b2" opacity="1">∞</text>
            </g>

            {/* Connecting Flow Lines */}
            <path d="M 160 140 Q 200 120 240 130" stroke="url(#gradient1)" strokeWidth="2.5" fill="none" strokeDasharray="5,5" opacity="1">
                <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M 470 140 Q 430 130 390 140" stroke="url(#gradient1)" strokeWidth="2.5" fill="none" strokeDasharray="5,5" opacity="1">
                <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
            </path>

            {/* Decorative Particles */}
            <circle cx="180" cy="50" r="3" fill="#0891b2" opacity="0.75">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="420" cy="80" r="3" fill="#7c3aed" opacity="0.75">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="35" r="2" fill="#0891b2" opacity="0.65">
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
        </svg>
    );
};

export default ShipsScalesIllustration;


import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				md: '4rem',
				'2xl': '8rem',
			},
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			maxWidth: {
				container: "1280px",
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				heading: 'hsl(var(--heading))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				glasscard: {
					dark: 'rgba(26, 28, 44, 0.66)',
					border: 'rgba(255, 255, 255, 0.05)',
					glow: 'rgba(0, 0, 0, 0.7)'
				},
				neon: {
					cyan: 'hsl(var(--primary))',
					pink: 'hsl(var(--accent))'
				},
				theme: {
					bg900: 'hsl(var(--background))',
					text: 'hsl(var(--heading))',
					body: 'hsl(var(--foreground))'
				}
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '1rem',
				'2xl': '2rem',
				'3xl': '24px', // Updated to match --radius-lg
				'4xl': '32px'
			},
			spacing: {
				'1': 'var(--space-1)',
				'2': 'var(--space-2)',
				'3': 'var(--space-3)',
				'4': 'var(--space-4)',
				'5': 'var(--space-5)',
				'6': 'var(--space-6)',
				'7': 'var(--space-7)',
				'8': 'var(--space-8)',
			},
			boxShadow: {
				'glass': '0 10px 28px -6px rgba(0, 0, 0, 0.7)',
				'neon': '0 0 15px 2px rgba(78, 214, 255, 0.3)',
				'neon-hover': '0 0 20px 5px rgba(78, 214, 255, 0.4)',
				'neon-pink': '0 0 15px 2px rgba(255, 114, 231, 0.3)',
				'neon-gradient': '0 0 15px 2px rgba(78, 214, 255, 0.3), 0 0 30px 5px rgba(255, 114, 231, 0.2)'
			},
			aspectRatio: {
				'card': '4/5.6'
			},
			transitionDuration: {
				'250': '250ms',  // Adding the custom duration
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(12px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'pulse-slow': {
					'0%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					},
					'100%': {
						opacity: '1'
					}
				},
				'color-shift': {
					'0%': {
						filter: 'hue-rotate(0deg)'
					},
					'50%': {
						filter: 'hue-rotate(30deg)'
					},
					'100%': {
						filter: 'hue-rotate(0deg)'
					}
				},
				'lift': {
					'0%': {
						transform: 'translateY(0)'
					},
					'100%': {
						transform: 'translateY(-6px)'
					}
				},
				'marquee': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-in-right': 'fade-in-right 0.3s ease-out',
				'pulse-slow': 'pulse-slow 6s infinite ease-in-out',
				'color-shift': 'color-shift 8s infinite',
				'lift': 'lift 0.25s ease-out forwards',
				'marquee': 'marquee var(--duration) linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./content/**/*.{md,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",

                // === HYBRID PALETTE: Industrial × Emerald-Violet ===

                // Primary Accent (Emerald - Actions, CTAs, Links)
                primary: {
                    DEFAULT: '#10B981', // Emerald 500
                    dark: '#059669',    // Emerald 600 (hover)
                    light: '#34D399',   // Emerald 400 (highlights)
                    foreground: '#FFFFFF',
                },

                // Secondary Accent (Violet - Visual flair, gradients)
                accent: {
                    DEFAULT: '#8B5CF6', // Violet 500
                    dark: '#7C3AED',    // Violet 600
                    light: '#A5B4FC',   // Indigo 300 (subtle)
                    foreground: '#FFFFFF',
                },

                // Industrial Foundations (Preserved)
                alabaster: '#F0F0EE', // Light section backgrounds
                charcoal: '#111111',  // Dark text, dark section bg
                stone: '#666666',     // Muted text, descriptions
                concrete: '#E5E5E5',  // Alternate section backgrounds
                steel: '#C0C0C0',     // Structural borders (The Grid)

                // Dark Mode Additions
                obsidian: '#030712',  // Deep dark sections (Gray 950)
                ghost: '#F9FAFB',     // Light text on dark (Gray 50)
                slate: '#1F2937',     // Cards on dark backgrounds (Gray 800)

                // Legacy (kept for compatibility)
                midnight: '#050505',
                spruce: '#1A3A3A',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                serif: ['var(--font-fraunces)', 'serif'],
                mono: ['var(--font-jetbrains)', 'monospace'],
                alfa: ['var(--font-alfa)', 'serif'],
                stint: ['var(--font-stint)', 'serif'],
            },
            borderRadius: {
                'none': '0px',
                'sm': '2px',
                'md': '4px',
            },
            animation: {
                'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
            },
            keyframes: {
                'border-beam': {
                    '100%': {
                        'offset-distance': '100%',
                    },
                },
            },
        },
    },
    plugins: [
        typography,
    ],
};
export default config;

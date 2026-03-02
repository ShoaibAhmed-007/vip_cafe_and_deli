import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          orange: "#FF6B00",
          yellow: "#FFD600",
          red: "#FF2D55",
          blue: "#00D4FF",
        },
        dark: {
          900: "#0A0A0A",
          800: "#141414",
          700: "#1E1E1E",
          600: "#2A2A2A",
        },
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        accent: ["var(--font-fredoka)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,107,0,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(255,107,0,0.6)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;

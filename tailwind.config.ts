import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0f",
          soft: "#0f0f17",
          card: "#13131c",
        },
        border: {
          DEFAULT: "#1f1f2e",
          strong: "#2a2a3d",
        },
        ink: {
          DEFAULT: "#e8e8f0",
          soft: "#a8a8b8",
          muted: "#6e6e80",
        },
        brand: {
          50: "#eef4ff",
          100: "#d9e5ff",
          200: "#b8ccff",
          300: "#8aa8ff",
          400: "#5b7eff",
          500: "#3b5bff",
          600: "#2942e5",
          700: "#1f33b8",
          800: "#1a2a91",
          900: "#172573",
        },
        accent: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        success: "#10b981",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(59,91,255,0.20), transparent 60%)",
        "brand-gradient":
          "linear-gradient(135deg, #5b7eff 0%, #8b5cf6 50%, #a78bfa 100%)",
        "subtle-gradient":
          "linear-gradient(180deg, rgba(91,126,255,0.05) 0%, transparent 100%)",
      },
      backgroundSize: {
        "grid-40": "40px 40px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out",
        glow: "glow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

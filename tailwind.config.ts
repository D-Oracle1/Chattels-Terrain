import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F35",
          50: "#E8EDF3",
          100: "#C9D4E1",
          600: "#16324F",
          700: "#0F2840",
          800: "#0B1F35",
          900: "#081628",
          950: "#050F1C",
        },
        gold: {
          DEFAULT: "#C8A96B",
          50: "#FBF7EF",
          100: "#F3E9D5",
          200: "#E7D2AB",
          300: "#DABF87",
          400: "#C8A96B",
          500: "#B5924E",
          600: "#94763C",
        },
        charcoal: "#1F2933",
        "light-grey": "#F4F5F7",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        luxe: "0 30px 60px -25px rgba(11, 31, 53, 0.35)",
        gold: "0 20px 45px -20px rgba(200, 169, 107, 0.55)",
      },
      backgroundImage: {
        "gold-sheen":
          "linear-gradient(135deg, #DABF87 0%, #C8A96B 45%, #94763C 100%)",
        "navy-veil":
          "linear-gradient(180deg, rgba(11,31,53,0) 0%, rgba(11,31,53,0.65) 55%, rgba(5,15,28,0.95) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

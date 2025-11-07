import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FFC93A",
          light: "#FFE082",
          dark: "#FFB300"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        highlight: "0 24px 60px rgba(255, 201, 58, 0.18)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(255,201,58,0.18), rgba(59,130,246,0.08))"
      }
    }
  },
  plugins: []
};

export default config;

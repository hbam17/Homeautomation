import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1D35",
          light: "#132B4D",
        },
        blue: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          pale: "#EFF6FF",
        },
        cyan: "#06B6D4",
        teal: "#0D9488",
        amber: "#F59E0B",
        green: {
          DEFAULT: "#059669",
          light: "#D1FAE5",
        },
      },
      fontFamily: {
        display: ["'DM Serif Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};
export default config;

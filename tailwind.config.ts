import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: "#C2F026",
        dark: "#111111",
        "dark-alt": "#1A1A1A",
        card: "#1C1C1C",
        input: "#1E1E1E",
        border: "#2A2A2A",
        "border-hover": "#3A3A3A",
        muted: "#999999",
      },
      fontFamily: {
        sans: ["DM Sans", "Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

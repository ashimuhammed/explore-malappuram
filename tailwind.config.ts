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
        malabar: {
          50: "#f2fbf7",
          100: "#e0f6ec",
          200: "#c3eed9",
          300: "#94e0bd",
          400: "#5ecb9d",
          500: "#32ad7f",
          600: "#228b65",
          700: "#1d6f52",
          800: "#1a5843",
          900: "#174838",
          950: "#0c2920",
        },
        spice: {
          50: "#fff9eb",
          100: "#feefc7",
          200: "#fde08a",
          300: "#fbc743",
          400: "#f8af15",
          500: "#e88f07",
          600: "#c86b04",
          700: "#9f4a07",
          800: "#803a0d",
          900: "#6b310e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;


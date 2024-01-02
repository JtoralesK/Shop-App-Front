import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#8c64c2",
        secondary: "#EAE7F3",
        third: "#F4F2F9",
        forth: "#45727e",
        firstWhite: "#FFFFFF",
        secondWhite: "#FEFEFE",
        customSearch: "orange-200",
      },
    },
  },
  plugins: [],
};
export default config;

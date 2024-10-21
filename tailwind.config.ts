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
        white10: "var(--white10)",
        white20: "var(--white20)",
        darkGray: "var(--darkGray)",
        lightGreen: "var(--lightGreen)",
        lightRed: "var(--lightRed)",
        lightBlue: "var(--lightBlue)",
        lightOrange: "var(--lightOrange)",
      },
    },
  },
  plugins: [],
};
export default config;

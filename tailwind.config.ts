import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white10: "var(--white10)",
        white20: "var(--white20)",
        white50: "var(--white50)",
        black20: "var(--black20)",
        black50: "var(--black50)",
        black60: "var(--black60)",
        darkGray: "var(--darkGray)",
        lightGreen: "var(--lightGreen)",
        lightRed: "var(--lightRed)",
        lightBlue: "var(--lightBlue)",
      },
    },
  },
  plugins: [],
};
export default config;

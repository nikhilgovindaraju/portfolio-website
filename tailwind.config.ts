import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter","-apple-system","BlinkMacSystemFont","sans-serif"],
        mono: ['"Fira Code"',"ui-monospace","monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

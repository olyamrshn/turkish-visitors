// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// @tailwind screens;

import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      "custom-blue": "#0b38ae",
      "darker-blue": "#d6dae0",
      "arrow-xl-white": "#ffffff",
    },
    screens: {
      xs: "600px",
      xl: "601px",
    },
  },
  plugins: [],
}
export default config

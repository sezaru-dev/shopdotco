import type { Config } from "tailwindcss";
import scrollbarHide from 'tailwind-scrollbar-hide'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      fontFamily:{
        satoshi: ['Satoshi', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        intergral: ['Integral CF Regular', 'sans-serif'],
      },
      margin: {
        '200px': '200px',
        '400px': '400px',
      }
    },
  },
  plugins: [scrollbarHide]
};
export default config;

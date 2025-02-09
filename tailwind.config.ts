import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#d1d1d1",
        "gray": "#202020",
        "dimmed-texts": "#aaa",
        "dimmer": "#797979"
      },
    },
  },
  plugins: [],
} satisfies Config;

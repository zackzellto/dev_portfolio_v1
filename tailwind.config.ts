import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    spacing: {
      "8": "8px",
      "12": "12px",
      "14": "14px",
      "16": "16px",
      "20": "22px",
      "24": "24px",
      "28": "28px",
      "30": "30px",
      "32": "32px",
      "40": "40px",
      "48": "48px",
      "64": "64px",
      "80": "80px",
      "96": "96px",
      "100": "100px",
      "103": "103px",
      "106": "106px",
      "114": "114px",
      "128": "128px",
      "160": "160px",
    },
    textShadow: {
      sm: "0 1px 2px var(--tw-shadow-color)",
      DEFAULT: "0 2px 4px var(--tw-shadow-color)",
      lg: "0 8px 16px var(--tw-shadow-color)",
    },
    screens: {
      phone: "640px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        "main-bg": "#0C0216",
      },
    },
  },
  plugins: [],
} satisfies Config;

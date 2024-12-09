import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "'var(--background)'",
        foreground: "'var(--foreground)'",
        destructive: {
          DEFAULT: "#ef4444", // Red-500 from Tailwind's default palette
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "'var(--radius)'",
        md: "'calc(var(--radius) - 2px)'",
        sm: "'calc(var(--radius) - 4px)'"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;


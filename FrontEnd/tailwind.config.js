/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',   // mobile
      'md': '1024px',  // tablet
      'lg': '1280px',  // desktop
    },
  },
  plugins: [],
}


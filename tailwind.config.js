/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1220",
        surface: "#111827",
        primary: "#3B82F6", // blue-600
        secondary: "#6366F1", // indigo-500
      }
    },
  },
  plugins: [],
}

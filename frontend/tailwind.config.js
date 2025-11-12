/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // This ensures Tailwind utilities override other CSS
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


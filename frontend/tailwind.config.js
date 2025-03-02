/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      },
      fontFamily: {
        outfit: ["Outfit", "serif"],
      },
    },
  },
  plugins: [],
}

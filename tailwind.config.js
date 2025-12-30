/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        toast: {
          '0%': { opacity: 0, transform: 'translate(-50%, -20px)' },
          '10%': { opacity: 1, transform: 'translate(-50%, 0)' },
          '90%': { opacity: 1, transform: 'translate(-50%, 0)' },
          '100%': { opacity: 0, transform: 'translate(-50%, -20px)' },
        }
      },
      animation: {
        'toast': 'toast 3s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
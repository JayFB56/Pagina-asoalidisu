/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF8F0',
          100: '#FFEDD5',
          200: '#FFD6A5',
          300: '#FFB871',
          400: '#FF9A3D',
          500: '#E67E22',
          600: '#C96B1A',
          700: '#A85A15',
          800: '#8A4A11',
          900: '#6E3B0E',
        },
        brown: {
          50: '#F5F0EB',
          100: '#E8DDD1',
          200: '#D2BBA6',
          300: '#BC997B',
          400: '#A67750',
          500: '#8D5E3A',
          600: '#6F4B2E',
          700: '#5D4037',
          800: '#4A332B',
          900: '#3A2822',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

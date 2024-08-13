/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#8F88FF',
        'custom-yellow': '#FFE86E',
        'custom-dark': '#3A3A3A',
        'custom-green':'#CBF281',
        'custom-purple': '#4731D3',
        'custom-dark-purple': '#171043',
        'custom-dark-grey': '#1A210B',
        'custom-dark-green': '#252128',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'sharp-gradient': 'linear-gradient(to right, #4731D3 60%, #CBF281 60%)',
        'sharp-gradient-dark': 'linear-gradient(to right, #171043 60%, #252128 60%)',
      },
    },
  },
  plugins: [],
}
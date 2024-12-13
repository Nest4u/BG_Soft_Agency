/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        'jersey': ['"Jersey 25"', 'sans-serif'], // Используйте этот алиас в классах Tailwind
      },
      colors: {
        customorange: '#E9941F',
        customdarkorange: '#E36625',
        customRed: '#DB292B',
        bgcol: '#FFF8ED',
        or1: '#FE9900',
        or2: '#EC7500',
        or3: '#AF5A00',
        or4: '#773F04',
        bgslide:'#A35709'
      },
    },
  },
  plugins: [],
}


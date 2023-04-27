/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        didact: ['Didact Gothic', 'sans-serif'],
        marcellus: ['Marcellus', 'serif']
      },
      textColor: {
        'primary': '#3A3F31',
        'secondary': '#ffffff',
        'grey-scale-800': '#545948',
        'grey-scale-600': '#848A78',
        'grey-scale-400': '#C6CFB3',
        'grey-scale-200': '#EFF0EC',
        'flp-dark': '#91BB3F'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#FDCA14',
        'secondary': '#CAFB6A',
        'dark': '#3A3F31',
        'palete-yellow': '#FEEFBE',
        'palete-green': '#D6E9D2',
        'palete-red': '#EBD1D3',
        'palete-blue': '#C4E4F7',
        'grey-scale-200': '#EFF0EC',
      }),
      colors: {
        'primary': '#3A3F31',
        'secondary': '#ffffff',
        'grey-scale-800': '#545948',
        'grey-scale-600': '#848A78',
        'grey-scale-400': '#C6CFB3',
        'grey-scale-200': '#EFF0EC',
      }
    },
  },
  plugins: [],
}


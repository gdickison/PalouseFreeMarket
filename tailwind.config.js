const tailwindcss = require('tailwindcss')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            display: ['Questrial', 'sans-serif'],
            body: ['Roboto', 'sans-serif']
        },
        lineClamp: {
          7: '7',
          8: '8',
          9: '9',
          10: '10'
        }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

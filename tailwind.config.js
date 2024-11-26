/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/pages/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...fontFamily.sans], // Adiciona Poppins
        odibee: ['Odibee Sans', ...fontFamily.sans], // Adiciona Odibee Sans
      },
      colors: {
        'primary-blue': '#10179f'
      }
    },
  },
  plugins: [],
}


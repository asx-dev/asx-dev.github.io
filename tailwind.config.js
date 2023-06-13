/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/script.js'],
  theme: {
    extend: {
      animation: {
        'animate-bounce': 'bounce 20s linear infinite',
      },
    },
  },
  plugins: [],
}

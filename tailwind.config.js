module.exports = {
  content: ['./*.html', './js/script.js'],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
      },
      animation: {
        bounce: 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}

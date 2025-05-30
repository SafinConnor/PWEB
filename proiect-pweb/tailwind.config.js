// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'hue-rotate': 'hue-rotate 10s linear infinite',
      },
      keyframes: {
        'hue-rotate': {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
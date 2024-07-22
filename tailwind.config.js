module.exports = {
  theme: {
    extend: {
      animation: {
        'text-flicker': 'text-flicker 3s linear infinite',
        'text-glow': 'text-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'text-flicker': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
          '75%': { opacity: 0.75 },
        },
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff, 0 0 35px #ff00ff' },
          '50%': { textShadow: '0 0 10px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff, 0 0 70px #ff00ff' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}

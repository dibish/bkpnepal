module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#fde8e9',
          100: '#fbd2d3',
          200: '#fabbbd',
          300: '#f8a4a7',
          400: '#f68e92',
          500: '#f4777c',
          600: '#f26066',
          700: '#f14950',
          800: '#ef333a',
          DEFAULT: '#ed1c24',
          dark : '#5f0b0e',
          },
        'black': {
          50: '#f2f2f2',
          100: '#d1d1d1',
          200: '#b9b9b9',
          300: '#a2a2a2',
          400: '#8b8b8b',
          500: '#747474',
          600: '#5d5d5d',
          700: '#454545',
          800: '#2e2e2e',
          DEFAULT: '#171717',
          dark: '#121212',
        },
      }, 
      fontFamily: {
        'natosans': ['Noto Sans', 'sans-serif'],
      },
    }
  },
  plugins: [],
}

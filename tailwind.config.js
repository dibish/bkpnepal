module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
    transparent: 'transparent',
    current: 'currentColor',
    'white': '#ffffff',
    'primary': {
      50: '#fde8e9',
      100: '#fbd2d3',
      200: '#fabbbd',
      300: '#f8a4a7',
      400: '#f68e92',
      500: '#f4777c',
      600: '#f26066',
      700: '#f14950',
      800: '#ef333a',
      900: '#ed1c24',
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
      900: '#171717',
      },  
    },
    extend: {
      fontFamily: {
        'mukta' : ['Mukta', 'sans-serif'],
        'fredoka': ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
}

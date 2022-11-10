module.exports = {
  content: ["./index.html", "./gui.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'gray': {
        100: '#F2F2F2',
        200: '#D7D7D7',
        300: '#7F7F7F',
        400: '#333333',
        500: '#111111',
      },
    },
    fontFamily: {
      sans: ['Aileron', 'sans-serif'],
      mono: ['RobotoMono', 'mono'],
    },
    extend: {
      screens: {
        '3xl': '1756px',
      },
    },
  },
  plugins: [],
};

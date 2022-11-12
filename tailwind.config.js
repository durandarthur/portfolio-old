module.exports = {
  content: ["./index.html", "./gui.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      white: "#FFFFFF",
      black: "#000000",
      'gray': {
        100: '#F2F2F2',
        200: '#D7D7D7',
        300: '#7F7F7F',
        400: '#333333',
        500: '#111111',
      },
      'green': {
        500: '#22C55E',
      },
      'red': {
        500: '#EF4444',
      },
      'blue': {
        300: '#93C5FD',
      },
      'slate': {
        300: '#CBD5E1',
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
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

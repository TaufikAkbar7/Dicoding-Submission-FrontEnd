const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/*.html',
    './src/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      purple: colors.purple,
      pink: colors.pink,
      primaryColor: '#0C0F14',
      primaryColor60: 'rgba(12, 15, 20, 0.6)',
      secondaryColor: '#fff',
      secondaryColor50: 'rgba(255, 255, 255, 0.5)',
      thirdColor: '#D17842',
      fourColor: '#131820',
      fiveColor: '#171D26',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

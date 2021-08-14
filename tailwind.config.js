const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/*.html',
    './src/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      //   hero: "url('../assets/bg-hero.jpg')",
      // }),
    },
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
      primaryColor: '#191D2C',
      secondaryColor: '#373E4B',
      thirdColor: '#EA4F47',
    },
    fontFamily: {
      roboto: ['Roboto Slab', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

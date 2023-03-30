const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: 'rgb(var(--color-primary))',
      secundary: 'rgb(var(--color-secundary))',
      secundaryLight: '#FCFEFC',
      dark: 'rgb(var(--color-dark))',
      gray: 'rgb(var(--color-gray))',
      link: 'rgb(var(--color-link))',
      danger: colors.red,
      white: colors.white,
      silver: colors.gray,
    },
    fontSize: {
      heading1: '48px',
      heading2: '38px',
      heading3: '32px',
      heading4: '28px',
      heading5: '24px',
      heading6: '18px',
      heading7: '16px',
      heading8: '14px',
      heading9: '12px',


    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
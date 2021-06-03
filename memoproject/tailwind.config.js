module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      'screen': '100vh',
    },
    width: {
      '200px': '200px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

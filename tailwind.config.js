module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  fontFamily: {
    'sans': ['Roboto', 'sans-serif'],
    'serif': ['Roboto Slab', 'serif'],
    'mono': ['Roboto Mono', 'monospace'],
  },
  screens : {
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1440px'
},
  variants: {
    extend: {},
  },
  plugins: [],
}

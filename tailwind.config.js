module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        html: 'orange',
        css: 'lightblue',
        sass: 'pink',
        javascript: 'yellow',
        git: 'lightgreen',
        angular: 'purple',
        nodejs: 'darkblue',
        nestjs: 'rose',
        nextjs: 'cyan',
        python: 'brown',
        php: 'merlot',
        business: 'green',
        technology: 'teal',
        consultant: 'magenta',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.njk',
    ]
  },
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        pure: '#ffffff',
        DEFAULT: '#d7d7d7'
      },
      red: {
        DEFAULT: '#af1b3f',
        dark: '#831530'
      },
      blue: {
        lighter: '#d7e1eb',
        light: '#00284c',
        DEFAULT: '#001c37',
        translucent: '#0a2849aa'
      }
    },
    fontFamily: {
      sans: ['Futura', 'Arial', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    maxWidth: {
      '1/2': '50%',
     },
    extend: {},
  },
  variants: {},
  plugins: [],
}

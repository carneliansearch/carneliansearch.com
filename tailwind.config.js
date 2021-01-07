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
      gray: {
        DEFAULT: '#696969'
      },
      red: {
        DEFAULT: '#af1b3f',
        dark: '#831530'
      },
      blue: {
        lighter: '#d7e1eb',
        light: '#00284c',
        DEFAULT: '#001c37',
        translucent: '#0a2849d9'
      }
    },
    fontFamily: {
      sans: ['Futura', 'Arial', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.3334%',
        '2/3': '66.6667%'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme('fontFamily.serif'),
            a: {
              color: theme('colors.red.DEFAULT'),
            }
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'),],
}

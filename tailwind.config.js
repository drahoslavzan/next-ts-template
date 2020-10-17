const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
    extend: {
      padding: {
        'v169': '56.25%',
      },
      minWidth: {
        '1/4': '25%',
      },
      colors: {
        error: {
          default:defaultTheme.colors.red['600'],
        },
        sidebar: {
          default: '#EEEEEE',
        },
        link: {
          default: '#3182ce',
        },
        primary: {
          hl: defaultTheme.colors.blue['200'],
          light: defaultTheme.colors.blue['500'],
          default: defaultTheme.colors.blue['600'],
          dark: defaultTheme.colors.blue['700'],
        },
        secondary: {
          hl: defaultTheme.colors.orange['200'],
          light: defaultTheme.colors.orange['400'],
          default: defaultTheme.colors.orange['600'],
          dark: defaultTheme.colors.orange['800'],
        },
      }
    },
    typography: {
      default: {
        css: {
          color: '#333',
          a: {
            color: '#3182ce',
            '&:hover': {
              color: '#2c5282',
            },
          },
          '[class~="plain"]': {
            textDecoration: 'none',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/typography'),
  ]
}

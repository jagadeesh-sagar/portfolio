/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#534AB7',
          hover:   '#4740a3',
          light:   '#ece9ff',
          border:  '#c4bff5',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            maxWidth: 'none',
            a: {
              color: '#534AB7',
              textDecorationColor: '#c4bff5',
              '&:hover': { color: '#4740a3' },
            },
            h1: { color: theme('colors.gray.900'), fontWeight: '700' },
            h2: { color: theme('colors.gray.900'), fontWeight: '600' },
            h3: { color: theme('colors.gray.800'), fontWeight: '600' },
            strong: { color: theme('colors.gray.900') },
            code: {
              color: '#534AB7',
              backgroundColor: '#ece9ff',
              padding: '0.15em 0.4em',
              borderRadius: '4px',
              fontWeight: '500',
              fontSize: '0.88em',
            },
            'code::before': { content: '""' },
            'code::after':  { content: '""' },
            pre: {
              backgroundColor: theme('colors.gray.900'),
              color: theme('colors.gray.100'),
              border: `1px solid ${theme('colors.gray.200')}`,
            },
            'pre code': {
              color: 'inherit',
              backgroundColor: 'transparent',
              padding: '0',
            },
            blockquote: {
              borderLeftColor: '#534AB7',
              color: theme('colors.gray.600'),
              fontStyle: 'normal',
            },
            hr: { borderColor: theme('colors.gray.200') },
            li: { color: theme('colors.gray.700') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1F3B2C',
          light: '#2E4F3B',
          dark: '#14281C',
        },
        sage: {
          DEFAULT: '#7C9473',
          light: '#A9BCA0',
        },
        cream: '#F7F2E7',
        gold: {
          DEFAULT: '#B08D3F',
          light: '#D3B876',
        },
        ink: '#23241F',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        card: '1.25rem',
      },
    },
  },
  plugins: [],
}
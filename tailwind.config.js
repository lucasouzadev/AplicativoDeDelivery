/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        y2k: {
          cream: '#E8E4DB',
          black: '#000000',
          blue: '#A8C5CD',
          green: '#5F7F61',
          beige: '#D4CFC4',
        }
      },
      fontFamily: {
        display: ['Impact', 'Arial Black', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

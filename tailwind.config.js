export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          deep: '#12403f',
          DEFAULT: '#1e5c58',
          light: '#8fd0c4',
          pale: '#a9d8cd',
        },
        gold: {
          DEFAULT: '#f0c419',
          dark: '#d9a70e',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'cursive'],
        body: ['"Nunito"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

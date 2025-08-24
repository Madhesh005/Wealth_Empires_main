module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'doola': {
          cream: '#fef4cc',
          yellow: '#FFB800',
          primary: '#d600ff',
          secondary: '#d14fff',
          accent: '#db73ff',
          highlight: '#f99bff',
          bg: '#f7d7ff',
        },
      },
    },
  },
  plugins: [],
}
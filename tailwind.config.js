module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (_) => ({
        'custom-background' : "url('./src/assets/background.jpg')"
      })
    },
  },
  plugins: [],
}

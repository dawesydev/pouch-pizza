/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Archivo', ...defaultTheme.fontFamily.sans],
        'display': ['Tanker', 'ui-sans-serif', 'system-ui'],
        'body': ['Erode', 'ui-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}

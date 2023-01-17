/** @type {import('tailwindcss').Config} */

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
        'display': ['Tanker', 'ui-sans-serif', 'system-ui'],
        'body': ['Erode', 'ui-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}

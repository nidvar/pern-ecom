/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
        "light",
        "retro",
        "cyberpunk",
        "valentine",
        "garden",
        "aqua",
        "wireframe",
        "autumn",
    ],
  },
  plugins: [require('daisyui')],
}

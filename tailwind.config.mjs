/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'kalam-green': '#0D8A6A',
        'kalam-dark': '#004D40',
        'kalam-light': '#E0F2F1'
      },
      fontFamily: {
        'amiri': ['Amiri', 'serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
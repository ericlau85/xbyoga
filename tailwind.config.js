// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          deep: '#1A2318',
          dark: '#2B3327',
          medium: '#475841',
          light: '#6B7A65',
          pale: '#8A9884',
        },
        accent: {
          primary: '#8B0000',
          secondary: '#A52A2A',
          light: '#CD5C5C',
        }
      }
    }
  },
  plugins: [],
}

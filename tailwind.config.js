// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'm-xs': ['0.75rem', '1rem'],
        'm-sm': ['0.8125rem', '1.25rem'],
        'm-base': ['0.875rem', '1.5rem'],
        'm-lg': ['1rem', '1.75rem'],
        'm-xl': ['1.125rem', '1.75rem'],
        'm-2xl': ['1.25rem', '1.75rem'],
        'm-3xl': ['1.5rem', '2rem'],
        'm-4xl': ['1.75rem', '2.25rem'],
      },
      spacing: {
        'm-1': '0.25rem',
        'm-2': '0.5rem',
        'm-3': '0.75rem',
        'm-4': '1rem',
        'm-5': '1.25rem',
        'm-6': '1.5rem',
        'm-8': '2rem',
        'm-10': '2.5rem',
        'm-12': '3rem',
        'm-16': '4rem',
      },
    },
  },
  plugins: [],
}

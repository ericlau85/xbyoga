// tailwind.config.js - 只添加必要的配置
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'm-xs': ['0.75rem', '1rem'],
        'm-sm': ['0.8125rem', '1.25rem'],
        'm-base': ['0.875rem', '1.5rem'], // 移动端14px
        'm-lg': ['1rem', '1.75rem'],      // 移动端16px
        'm-xl': ['1.125rem', '1.75rem'],  // 移动端18px
        'm-2xl': ['1.25rem', '1.75rem'],  // 移动端20px
        'm-3xl': ['1.5rem', '2rem'],      // 移动端24px
        'm-4xl': ['1.75rem', '2.25rem'],  // 移动端28px
      },
      spacing: {
        // 移动端间距 - 增加一些
        'm-1': '0.25rem',
        'm-2': '0.5rem',
        'm-3': '0.75rem',
        'm-4': '1rem',      // 卡片之间的间隙
        'm-5': '1.25rem',
        'm-6': '1.5rem',    // 卡片内边距
        'm-8': '2rem',
        'm-10': '2.5rem',
        'm-12': '3rem',
        'm-16': '4rem',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper:  '#F7F7F5',
        forest: '#1A3C2B',
        grid:   '#3A3A38',
        coral:  '#FF8C69',
        mint:   '#9EFFBF',
        gold:   '#F4D35E',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body:    ['General Sans', 'Space Grotesk', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '2px',
      },
      boxShadow: {
        none: 'none',
      },
      letterSpacing: {
        widest: '0.15em',
        wider:  '0.10em',
        wide:   '0.08em',
      },
    },
  },
  plugins: [],
}
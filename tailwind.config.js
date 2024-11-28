/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '256': '48rem',
        '384': '52rem',
        '512': '64rem',
        '640': '80rem',
        '1024': '96rem',
        '2048': '128rem',
        '2300': '140rem',
        '2560': '160rem',
      },

      backgroundImage: {
        'radial-gradient': 'radial-gradient(169.40% 119.55% at 54.76% 6.29%, #262626 10%, #0a0a0a 70%)',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3), 0 32px 18px -10px rgb(0 0 0 / 0.1)',
      },
      brightness: {
        80: ".8",
        90: ".9",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'times': ['"Times New Roman"', 'serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'markazi': ['Markazi Text', 'serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),
            require('@tailwindcss/typography')
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};

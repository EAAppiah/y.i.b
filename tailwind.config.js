/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#005555',
        secondary: '#FC6B00',
        tertiary: '#222222',
        alpha: '#F8F9FA',
        beta: '#F2F3F6'
      },
    },
  },
  plugins: [],
};

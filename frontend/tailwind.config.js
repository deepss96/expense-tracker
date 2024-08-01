/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '30' : '7.5rem',  //120px
        '86' : '23rem',
        '102': '26rem',   // 432px
        '108': '27rem',   // 432px
        '120': '30rem',   // 480px
        '132': '33rem',   // 528px
        '144': '36rem',   // 576px
        '156': '39rem',   // 624px
        '168': '42rem',   // 672px
        '180': '45rem',   // 720px
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
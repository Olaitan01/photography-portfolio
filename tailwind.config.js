/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      BgBlack: "rgb(7,7,8)",
      grey:"rgb(93,95,103)",
      headerGrey: "rgb(228,228,230)",
      lightPurple:"rgb(176,171,207)",
      lightDark: "rgb(28,28,33)",
      royalBlue: "rgb(89,61,239)",
      xLightPurple:"rgb(181,176,213)",
      serviceBg: "rgb(14,14,16)",
      primaryGrey:"rgb(182,182,186)",
      roundedGrey:"rgb(42,42,49)",
      
    },
    extend: {
      fontFamily:{
        custom: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


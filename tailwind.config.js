/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blackGray:'rgb(24, 24, 24)',
        semiGray:'#313131',
        darkGray:'#2f2f2f'
      },
      fontFamily:{
        name:['Nothing You Could Do', 'cursive']
      },
      screens: {
        'xs': '325px',
      },
      backgroundImage: {
        homePattern: "url('/images/wavey-fingerprint.svg')",
        // /* background by SVGBackgrounds.com */
      },
      screens: {
          'xs': '340px',
        //   'md': '768px',
        //   'lg': '1024px',
          '2xl': '1536px',
          '3xl': '2000px'
          // '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
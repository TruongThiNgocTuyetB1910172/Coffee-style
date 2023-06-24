/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Karla:['Karla', 'sans-serif']
      },
      colors:{
        'light-coffee':'#C89f94',
        'orange':{
          '200' :'#fed7aa',
          '300' :'#fdba74',
          '400' :'#fb923c',
          '500' :'#f97316',
          '600' :'#ea580c',
          '700' :'#c2410c',
          '800' :'#9a3412',
          '900' :'#7c2d12'
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)'  },
        },
        fadeIn:{from:{opacity:0},to:{opacity:1}} //feuture mug
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out ',
        fadeIn:'fadeIn .5s ease-in-out ',
      },
      backgroundImage: {
        'slider-bg': "url('./image/slider-.png')",
       
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'inter': [ 'Inter', 'system-ui', 'Avenir'],
      'culera': ['Lemon']
    },
    extend: {
      keyframes:{
        fullSpin:{
          '100%':{
            transform: 'rotate(-360deg)'
          }
        }
      },
      animation:{
        fullSpin:'fullSpin 3s linear infinite'
      }
    },
  },
  plugins: [],
}


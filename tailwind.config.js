/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
          screens: {
              '3xl': '1900px',
              '4xl': '2100px'
          },
          backgroundImage: {
              'basket-stripes': "radial-gradient(#fff 10%, transparent 11%)"
          },
          colors: {
              transparent: 'transparent',
              night: '#496089',
              forest: '#4E4608',
              moss: '#7F793B',
              grass: '#C8C389',
              basket: '#F7BF60',
              cream: '#DACEC0',
              latte: '#EEF0EF',
              pink: '#FFA47F',
              berry: '#ED654D',
          },
          fontFamily: {
              'quicksand': ['"Quicksand"', 'sans-serif'],
              'sugar-cane': ['ut_sugar_caneregular']
          },
          keyframes: {
              swaying: {
                  '0%': {transform: 'rotate(-2.8deg)'},
                  '50%': {transform: 'rotate(1.8deg)'},
                  '100%': {transform: 'rotate(-2.8deg)'}
              },
              skew: {
                  '0%': {transform: 'skewX(5deg) translate(-3px)'},
                  '100%': {transform: 'skewX(-5deg) translate(3px)'},
              },
              ringing: {
                  '50%': {transform: 'translateX(3px) rotate(2deg)'},
                  '100%': {transform: 'translateX(3px) rotate(2deg)'},
              },
              falldown1: {
                  '0%':   { transform: 'translateY(-1000px)' },
                  '10%' : { transform: 'translateY(-500px)'},
                  '20%':  { transform: 'translateY(0px)' },
                  '30%':  { transform: 'translateY(-10px)' },
                  '50%': { transform: 'translateY(0)' },
                  '64%': { transform: 'translateY(0)' },
                  '100%': { transform: 'translateY(0)' },
              },
              falldown2: {
                  '0%':   { transform: 'translateY(-1000px)' },
                  '10%' : { transform: 'translateY(-1000px)'},
                  '20%':  { transform: 'translateY(-1000px)' },
                  '30%':  { transform: 'translateY(-500px)' },
                  '35%':  { transform: 'translateY(0)' },
                  '40%':  { transform: 'translateY(-10px)' },
                  '50%': { transform: 'translateY(0)' },
                  '64%': { transform: 'translateY(0)' },
                  '100%': { transform: 'translateY(0)' },
              },
              falldown3: {
                  '0%':   { transform: 'translateY(-1000px)' },
                  '10%' : { transform: 'translateY(-1000px)'},
                  '20%' : { transform: 'translateY(-1000px)'},
                  '40%':  { transform: 'translateY(-1000px)' },
                  '50%':  { transform: 'translateY(-500px)' },
                  '65%':  { transform: 'translateY(0)' },
                  '70%':  { transform: 'translateY(-10px)' },
                  '80%': { transform: 'translateY(0)' },
                  '90%': { transform: 'translateY(0)' },
                  '100%': { transform: 'translateY(0)' },
              }
          },
          animation: {
              swaying6: 'swaying 6s ease-in-out forwards infinite',
              swaying7: 'swaying 7s ease-in-out forwards infinite',
              swaying8: 'swaying 8s ease-in-out forwards infinite',
              skew: 'skew 3s infinite',
              ringing: 'ringing 0.15s infinite',
              falldown1: 'falldown1 1s linear forwards',
              falldown2: 'falldown2 1s linear forwards',
              falldown3: 'falldown3 1s linear forwards',
          },
      },
  },
    plugins: [
        require("tailwindcss-animate"),
    ],
}


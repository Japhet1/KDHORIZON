/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: "Rajdhani",
        kanit: "Kanit",
        burtons: 'burtons',
        cooper: 'Cooper',
        nunito: 'Nunito',
        //bahnschrift: 'Gruppo'
      },
      backgroundImage: {
        home: "url('/3.jpg')",
        about: "url('/img4.jpg')",
        animal: "url('/1.jpg')",
        transport: "url('/11.jpg')",
        agric: "url('/4.jpg')"
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        loading: {
          '0%': { left: '-100%'},
          '50%': { left: '100%'},
          '100%': { left: '-100%'},
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'loading': 'loading 3s linear infinite',
      }
     
    },
  },
  plugins: [],
  darkMode: "class"
}

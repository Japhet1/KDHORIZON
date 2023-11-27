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
        gruppo: "Kanit",
        burtons: 'burtons',
        cooper: 'Cooper',
        leelawadee: 'Nunito',
        //bahnschrift: 'Gruppo'
      },
      backgroundImage: {
        home: "url('/3.jpg')",
        about: "url('/img4.jpg')",
        animal: "url('/1.jpg')",
        transport: "url('/11.jpg')",
        agric: "url('/4.jpg')"
      }
     
    },
  },
  plugins: [],
  darkMode: "class"
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        20: 'repeat(20, minmax(0, 1fr))',
      },
      colors: {
        pbg1: '#606C38',
        mbg1: '#283618',
        pbg2: '#FEFAE0',
        mbg2: '#D4A373',
        pbg3: '#D7CDCC',
        mbg3: '#EBE6E6',
        pbg4: '#32323F',
        mbg4: '#1D1E2C',
      },
      fontFamily: {
        main: 'Alumni Sans',
        sten: ['"Saira Stencil One"', 'cursive'],
      },
      backgroundImage: {
        sports: "url('./assets/sports.jpg')",
        gaming: "url('./assets/gaming.jpg')",
        experience: "url('./assets/experience.jpg')",
        earth: "url('./assets/earth.jpg')",
      },
    },
  },
  plugins: [],
}

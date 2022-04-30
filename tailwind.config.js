module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px'
    },
    colors: {
      'blue': '#4285F4',
      'seaBlue': '#00758F',
      'queen-blue': '#00758F',
      'purple': '#9548E0',
      'purple-light': '#BB78FF',
      'purple-dark': '#522C78',
      'orange': '#E7AE0B',
      'green': '#34A853',
      'green-light': '#68CB60',
      'yellow': '#F7DF1E',
      'gray-dark': '#8C8C8C',
      'gray-extra-dark': '#5b5b5b',
      'gray': '#C4C4C4',
      'gray-light': '#DBDBDB',
      'gray-extra-light': '#ececec',
      "red": "#EA4335",
      "white" : "#fff",
      "primary": "#0146E0",
      "secondary" : "#FFBE03",
      "alternate" : "",
      "dark" : "#393939"
    },
    extend: {
      fontFamily: {
        "sans" : ["Poppins" , "Roboto", "Helvetica" , "Arial", "sans-serif"],
        "serif" : ["Roboto Slab", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },

    },
  },
  plugins: [],
}

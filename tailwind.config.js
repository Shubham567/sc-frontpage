module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#4285F4',
      'seaBlue': '#00758F',
      'queen-blue': '#00758F',
      'purple': '#9548E0',
      'purple-light': '#BB78FF',
      'purple-dark': '#522C78',
      'orange': '#ffba00',
      "orange-light": "#FFF2AD",
      'green': '#34A853',
      'green-light': '#68CB60',
      'yellow': '#FFE459',
      'gray-dark': '#8C8C8C',
      'gray-extra-dark': '#5b5b5b',
      'gray': '#C4C4C4',
      'gray-light': '#DBDBDB',
      'gray-extra-light': '#ececec',
      "red": "#EA4335",
      "white" : "#fff",
      "primary": "#204474",
      "primary-light" : "#caeeff",
      "secondary" : "#F28705",
      "alternate" : "",
      "dark" : "#16243F",
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

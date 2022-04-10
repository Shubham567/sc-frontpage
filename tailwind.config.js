module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans" : ["Poppins" , "Roboto", "Helvetica" , "Arial", "sans-serif"],
        "serif" : ["Roboto Slab", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      color: {
        'blue': '#4285F4',
        'sea-blue': '#00758F',
        'queen-blue': '#00758F',
        'purple': '#9548E0',
        'purple-light': '#BB78FF',
        'purple-dark': '#522C78',
        'orange': '#E7AE0B',
        'green': '#34A853',
        'green-light': '#68CB60',
        'yellow': '#F7DF1E',
        'gray-dark': '#8C8C8C',
        'gray': '#C4C4C4',
        'gray-light': '#DBDBDB',
        "red": "#EA4335"
      }
    },
  },
  plugins: [],
}
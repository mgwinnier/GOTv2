module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind checks all your project files for classes
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffd700', // Example of adding a primary color
        'secondary': '#ffed4a', // Example of adding a secondary color
      },
      fontFamily: {
        'body': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'], // Example of custom font-family
      },
      // Example of adding custom breakpoints
      screens: {
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

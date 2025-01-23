/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1173px",
        }
      },
      fontSize: {
        'custom-xs': '10px'
      },
      lineHeight: {
        'custom-xl': "150%",
        'custom-2xl': "131.25%",
        'custom-3xl': "121.06%",
      },
      colors: {
        'off-white': "#FAFAFF",
        'custom-black': "#14191C",
        'custom-gray': "#333333",
        'custom-blue': "#007BFF",
        'light-purple': "#DBDBF3",
        'light-gray': "#CECECE",
        'custom-light-gray': "#9F9DAB",        
      },
      boxShadow: { 
      'custom-xl': "0px 10px 10px 0px #31374D1A",
      },
      fontFamily: {
        'Montserrat': "'montserrat', sans-serif",
      }
    },
  },
  plugins: [],
}

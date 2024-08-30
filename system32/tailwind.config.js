/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#009bff",
        "secondary": "#4c7f00",
        "accent": "#00902e",
        "neutral": "#170e15",
        "base-100": "#292929",
        "info": "#1ed7ff",
        "success": "#00a682",
        "warning": "#e78400",
        "error": "#e2003e",
        "darkBackground": "#1F1D29",
      },

      backgroundImage: {
        "root-background": "linear-gradient(0deg, rgba(78,205,196,1) 38%, rgba(153,65,33,1) 78%)"
      },
      fontFamily: {
        "amsterdam": ["New Amsterdam", "sans-serif"]
      },
      clipPath: {
        'left-half': 'inset(0 50% 0 0)',
        'right-half': 'inset(0 0 0 50%)'
      }
    },
  },
  plugins: [],
}


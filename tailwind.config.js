/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 צבעי המותג - ניתן לשנות כאן בלבד!
        primary: {
          50: '#faf5ff',   // סגול בהיר מאוד
          100: '#f3e8ff',  // סגול בהיר
          200: '#e9d5ff',  // סגול בהיר בינוני
          300: '#d8b4fe',  // סגול בינוני בהיר
          400: '#c084fc',  // סגול בינוני
          500: '#9333ea',  // סגול עיקרי - כהה יותר
          600: '#7e22ce',  // סגול כהה לכפתורים
          700: '#6b21a8',  // סגול כהה מאוד
          800: '#581c87',  // סגול כהה ביותר
          900: '#4c1d95',  // סגול כהה מאוד מאוד
        },
        secondary: {
          50: '#fdf4ff',   // ורוד-סגול בהיר
          100: '#fae8ff',  // ורוד-סגול
          200: '#f5d0fe',  // ורוד-סגול בינוני
          300: '#f0abfc',  // ורוד-סגול עז
          400: '#e879f9',  // פוקסיה בהיר
          500: '#c026d3',  // פוקסיה עיקרי - כהה יותר
          600: '#a21caf',  // פוקסיה כהה לכפתורים
          700: '#86198f',  // פוקסיה כהה מאוד
          800: '#701a75',  // סגול-פוקסיה כהה
          900: '#581c87',  // סגול-פוקסיה כהה ביותר
        },
      },
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}


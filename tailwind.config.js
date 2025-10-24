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
          500: '#a855f7',  // סגול עיקרי
          600: '#9333ea',  // סגול כהה בינוני
          700: '#7e22ce',  // סגול כהה
          800: '#6b21a8',  // סגול כהה מאוד
          900: '#581c87',  // סגול כהה ביותר
        },
        secondary: {
          50: '#fdf4ff',   // ורוד-סגול בהיר
          100: '#fae8ff',  // ורוד-סגול
          200: '#f5d0fe',  // ורוד-סגול בינוני
          300: '#f0abfc',  // ורוד-סגול עז
          400: '#e879f9',  // פוקסיה בהיר
          500: '#d946ef',  // פוקסיה עיקרי
          600: '#c026d3',  // פוקסיה כהה
          700: '#a21caf',  // פוקסיה כהה מאוד
          800: '#86198f',  // סגול-פוקסיה כהה
          900: '#701a75',  // סגול-פוקסיה כהה ביותר
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


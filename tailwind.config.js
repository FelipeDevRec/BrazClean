/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b6e4f', // verde suave
        accent: '#f59e0b'   // amarelo para destaque
      }
    }
  },
  plugins: []
}


/** @type {import('tailwindcss').Config} */
// Дизайн-токени ReadSpace (ЛР4). Збірка: npm run build → assets/css/styles.css
module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#2e3a6b', hover: '#243058' },
        accent: { DEFAULT: '#e8a33d', hover: '#d9922b', subtle: '#fbefd9' },
        graphite: '#2b2b30',
        cream: '#faf6ee',
        muted: '#5b5b66',
        line: '#d9d2c3',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      borderRadius: { card: '12px', xl2: '20px' },
    },
  },
  plugins: [],
};

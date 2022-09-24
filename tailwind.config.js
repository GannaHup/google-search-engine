/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'blue-1': '#4185f4',
        'red-1': '#ea4335',
        'yellow-1': '#fbbd33',
        'green-1': '#4ea853'
      }
    },
    screens: {
      'phone': { min: '380px' },
      'xs': { min: '480px' },
      'sm': { min: '768px' },
      'md': { min: '960px' }
    }
  },
  plugins: [],
}

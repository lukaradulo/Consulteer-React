/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'contact': '-1px 0 0 #3cd52e, 0 1px 0 #3cd52e, -2px 1px 0 #3cd52e, -1px 2px 0 #3cd52e, -3px 2px 0 #3cd52e, -2px 3px 0 #3cd52e, -4px 3px 0 #3cd52e, -3px 4px 0 #3cd52e, -5px 4px 0 #3cd52e, -4px 5px 0 #3cd52e, -6px 5px 0 #3cd52e, -5px 6px 0 #3cd52e, -7px 6px 0 #3cd52e, -6px 7px 0 #3cd52e, -8px 7px 0 #3cd52e, -7px 8px 0 #3cd52e, -9px 8px 0 #3cd52e'
      }
    },
  },
  plugins: [],
}
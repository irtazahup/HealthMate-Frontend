/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#5B6EFB',
        secondary: '#6366F1',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        purple: '#8B5CF6',
        orange: '#FB923C'
      }
    },
  },
  plugins: [],
}
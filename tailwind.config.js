/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'glow': 'glow 2s infinite',
        'pulse-border': 'pulse-border 2s infinite',
        'shine': 'shine 1.5s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 70, 85, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 70, 85, 0.5)' },
        },
        'pulse-border': {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(255, 70, 85, 0.7)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 0 10px rgba(255, 70, 85, 0)',
            transform: 'scale(1.05)',
          },
        },
        'shine': {
          'from': { transform: 'translateX(-100%)' },
          'to': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
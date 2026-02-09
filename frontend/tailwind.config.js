/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Medical/Health themed colors
        medical: {
          primary: '#059669',    // Emerald green (health)
          secondary: '#0d9488',  // Teal (calm, trust)
          accent: '#f59e0b',     // Amber (attention)
          danger: '#ef4444',     // Red (critical)
          warning: '#f97316',    // Orange (caution)
          success: '#22c55e',    // Green (normal)
          info: '#3b82f6',       // Blue (information)
        },
        // Status colors for medical values
        status: {
          normal: '#10b981',     // Emerald
          elevated: '#f59e0b',   // Amber
          high: '#ef4444',       // Red
          low: '#eab308',        // Yellow
          borderline: '#fb923c', // Orange
        }
      },
      fontFamily: {
        serif: ['Crimson Text', 'Georgia', 'serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'blob': 'blob 20s infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(50px, 50px) scale(1.05)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          'from': { opacity: '0', transform: 'translateX(-20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      },
      boxShadow: {
        'medical': '0 10px 40px -10px rgba(5, 150, 105, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}

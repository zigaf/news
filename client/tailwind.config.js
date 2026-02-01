/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'pulse': {
          'dark': '#0a0e1a',
          'darker': '#060912',
          'card': '#0f1525',
          'card-hover': '#151d32',
          'border': '#1a2540',
          'accent': '#3b82f6',
          'accent-light': '#60a5fa',
          'success': '#22c55e',
          'warning': '#eab308',
          'danger': '#ef4444',
          'muted': '#64748b',
          'text': '#e2e8f0',
          'text-secondary': '#94a3b8',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to top, rgba(10, 14, 26, 1) 0%, rgba(10, 14, 26, 0.8) 30%, rgba(10, 14, 26, 0.4) 60%, rgba(10, 14, 26, 0) 100%)',
      }
    },
  },
  plugins: [],
}

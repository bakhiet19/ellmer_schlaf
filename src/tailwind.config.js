// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // تأكد يشمل ملفاتك
  ],
  theme: {
    extend: {
      animation: {
        'bubble': 'bubbleFloat 3s ease-in-out infinite',
        'fade-in': 'fadeInUp 1s ease forwards',
      },
      keyframes: {
        bubbleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        skydeep: '#38a7e8',
        sky: '#86d9ff',
        mist: '#dff6ff',
        cloud: '#f8fdff',
        silver: '#d7e4ec',
        gold: '#f5c85f',
        midnight: '#17476b',
      },
      boxShadow: {
        glow: '0 22px 80px rgba(120, 210, 255, 0.32)',
        gold: '0 0 34px rgba(245, 200, 95, 0.42)',
        polaroid: '0 18px 38px rgba(23, 71, 107, 0.15)',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%) rotate(12deg)' },
          '100%': { transform: 'translateX(140%) rotate(12deg)' },
        },
        flame: {
          '0%, 100%': { transform: 'scale(1) rotate(-2deg)', opacity: 0.95 },
          '50%': { transform: 'scale(1.1) rotate(3deg)', opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        balloonFloat: {
          '0%': { opacity: 0, transform: 'translate3d(0, 0, 0) scale(0.9)' },
          '10%': { opacity: 1 },
          '82%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translate3d(0, -118vh, 0) scale(1.04)' },
        },
        balloonSway: {
          '0%, 100%': { transform: 'translateX(-8px) rotate(-3deg)' },
          '50%': { transform: 'translateX(10px) rotate(4deg)' },
        },
      },
      animation: {
        float: 'float 3.6s ease-in-out infinite',
        shimmer: 'shimmer 2.8s ease-in-out infinite',
        flame: 'flame 0.9s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out both',
        balloonFloat: 'balloonFloat 5.8s cubic-bezier(0.2, 0.72, 0.2, 1) forwards',
        balloonSway: 'balloonSway 1.9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

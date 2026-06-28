/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111F',
        midnight: '#0F172A',
        frost: '#F8FAFC',
        muted: '#94A3B8',
        sky: '#4FC3FF',
        violet: '#8B5CF6',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(79, 195, 255, 0.18)',
        violet: '0 0 70px rgba(139, 92, 246, 0.18)',
      },
      backgroundImage: {
        aurora: 'radial-gradient(circle at 20% 10%, rgba(79,195,255,.24), transparent 28%), radial-gradient(circle at 80% 0%, rgba(139,92,246,.24), transparent 30%), linear-gradient(135deg, #07111F 0%, #0F172A 58%, #07111F 100%)',
        premium: 'linear-gradient(135deg, rgba(79,195,255,.92), rgba(139,92,246,.92))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        gradient: 'gradient 9s ease infinite',
      },
    },
  },
  plugins: [],
};

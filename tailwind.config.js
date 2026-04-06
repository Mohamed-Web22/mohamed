/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // dark mode removed; site uses blue tones only
  theme: {
    extend: {
      colors: {
        // Qimam Sudanese Brand Colors
        primary: '#0f2145', // Deep Blue (Midnight Blue)
        secondary: '#e9efff', // Wheat/Beige
        'primary-dark': '#0f2145', // Darker shade for hover
        'primary-light': '#414d76', // Lighter shade
        // Keep navy for backward compatibility but update to primary
        navy: '#0f2145',
        beige: '#e9efff',
        'navy-dark': '#0f2145',
        // Additional accent colors
        'accent-blue': '#414d76',
        'accent-gold': '#d2a517',
        // New Brand Colors - For Navbar Only
        'brand-dark': '#0f2145',
        'brand-medium': '#414d76',
        'brand-light': '#e9efff',
        'brand-gold': '#d2a517',
      },
      fontFamily: {
        // Make El Messiri the primary font for all text; fallback to IBM Plex for Arabic and system fonts
        sans: ['"El Messiri"', '"IBM Plex Sans Arabic"', 'Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['"El Messiri"', '"IBM Plex Sans Arabic"', 'ui-sans-serif', 'system-ui'],
        // Dedicated Arabic stack (explicitly applied when dir='rtl')
        arabic: ['"El Messiri"', '"IBM Plex Sans Arabic"', 'ui-sans-serif', 'system-ui']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #191970 0%, #2a4a7f 50%, #F5DEB3 100%)',
      },
    },
  },
  plugins: [],
}

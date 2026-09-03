/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core palette — grounded in dawn sky / feather / nest materials
        ink: '#12201C',        // near-black, moss-tinted — primary text & dark sections
        cream: '#F6F1E4',      // eggshell — primary light background
        parchment: '#EFE7D4',  // slightly deeper cream for section separation
        gold: '#B8863B',       // feather gold — primary accent
        goldSoft: '#D8B876',   // lighter gold for hovers/highlights
        moss: '#3E4A36',       // deep moss green — secondary dark
        sky: '#7C9CAA',        // dusty sky blue — cool accent
        skyDeep: '#2C3E44',    // deep dusk blue — hero overlays
        rust: '#8C5A3C',       // warm feather brown, sparingly
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.2rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.4rem, 5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.8rem, 3.2vw, 2.8rem)', { lineHeight: '1.08' }],
      },
      letterSpacing: {
        wide2: '0.14em',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'marquee-rev': 'marquee-rev 38s linear infinite',
        'flap': 'flap 1.1s ease-in-out infinite',
        'drift': 'drift 6s ease-in-out infinite',
        'drift-slow': 'drift 9s ease-in-out infinite',
        'drift-fast': 'drift 4s ease-in-out infinite',
        'feather-float': 'featherFloat 8s ease-in-out infinite',
        'feather-float-2': 'featherFloat 11s ease-in-out infinite reverse',
        'feather-float-3': 'featherFloat 6.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-heart': 'pulseHeart 0.6s ease-in-out',
        'count-up': 'fadeIn 0.5s ease-out',
        'spin-slow': 'spin 20s linear infinite',
        'blob': 'blob 8s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        flap: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.55)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        featherFloat: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(5deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-3deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseHeart: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.5)' },
          '60%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}

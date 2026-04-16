export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "outline-variant": "#5b403d",
        "on-secondary-container": "#ff9e96",
        "surface-container-highest": "#353534",
        "tertiary-container": "#00799c",
        "on-tertiary-container": "#e9f7ff",
        "outline": "#ab8985",
        "surface-container-lowest": "#050505",
        "surface-dim": "#080808",
        "on-tertiary": "#003546",
        "background": "#000000",
        "surface-container-high": "#1a1a1a",
        "surface-tint": "#ffb3ac",
        "primary-fixed-dim": "#ffb3ac",
        "surface-bright": "#2a2929",
        "inverse-on-surface": "#313030",
        "on-surface": "#e5e2e1",
        "secondary-container": "#832a26",
        "on-primary-container": "#fff2f0",
        "surface-variant": "#353534",
        "secondary-fixed-dim": "#ffb3ac",
        "tertiary": "#7bd1f8",
        "error-container": "#93000a",
        "surface-container": "#100f0f",
        "surface-container-low": "#0c0b0b",
        "primary-container": "#d32f2f",
        "primary": "#ffb3ac",
        "surface": "#000000",
        "error": "#ffb4ab",
        "on-secondary-fixed-variant": "#802824",
        "on-error-container": "#ffdad6",
        "on-secondary": "#611110",
        "on-error": "#690005",
        "secondary-fixed": "#ffdad6",
        "inverse-primary": "#ba1a20",
        "tertiary-fixed-dim": "#7bd1f8",
        "on-primary-fixed-variant": "#930010",
        "tertiary-fixed": "#bee9ff",
        "on-tertiary-fixed": "#001f2a",
        "on-background": "#e5e2e1",
        "on-secondary-fixed": "#410003",
        "on-primary-fixed": "#410003",
        "on-tertiary-fixed-variant": "#004d65",
        "secondary": "#ffb3ac",
        "primary-fixed": "#ffdad6",
        "on-surface-variant": "#e4beba",
        "inverse-surface": "#e5e2e1",
        "on-primary": "#680008"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      animation: {
        'reveal': 'fadeInUp 0.15s ease-out both',
        'fade-in-up': 'fadeInUp 0.15s ease-out both',
        'data-scroll': 'dataScroll 40s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        dataScroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}

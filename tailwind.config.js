/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {

        /* =========================================
           ENGINEERED PRECISION
           Surface System
        ========================================= */

        canvas: "#090D16",

        surface: {
          DEFAULT: "#0F131C",
          dim: "#0F131C",
          bright: "#353943",

          lowest: "#0A0E17",
          low: "#181B25",
          DEFAULT_ALT: "#1C1F29",
          high: "#262A34",
          highest: "#31353F",

          1: "#0D1117",
          2: "#161B22",
          overlay: "#21262D",
        },


        /* =========================================
           TYPOGRAPHY
        ========================================= */

        ink: {
          primary: "#F0F6FC",
          secondary: "#C9D1D9",
          tertiary: "#8B949E",
          trace: "#484F58",

          "on-surface": "#DFE2EF",
          "on-surface-variant": "#BDC8D1",
        },


        /* =========================================
           ACCENTS
        ========================================= */

        cyan: {
          DEFAULT: "#38BDF8",
          light: "#8ED5FF",
          dark: "#00668A",

          container: "#38BDF8",
          "on-container": "#004965",
        },

        emerald: {
          DEFAULT: "#10B981",
          light: "#4EDEA3",
          dark: "#00A572",
        },

        indigo: {
          DEFAULT: "#6366F1",
          light: "#A7A9FF",
        },


        /* =========================================
           DESIGN SYSTEM SEMANTIC COLORS
        ========================================= */

        primary: "#8ED5FF",
        secondary: "#4EDEA3",
        tertiary: "#C7C8FF",

        error: "#FFB4AB",

        background: "#0F131C",
      },


      /* =========================================
         TYPOGRAPHY
      ========================================= */

      fontFamily: {

        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],

        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },


      fontSize: {

        /* Hero */

        "hero": [
          "3.75rem",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.035em",
            fontWeight: "600",
          },
        ],

        "hero-mobile": [
          "2.25rem",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.025em",
            fontWeight: "600",
          },
        ],


        /* Headlines */

        "headline-lg": [
          "2.25rem",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.025em",
            fontWeight: "600",
          },
        ],

        "headline-lg-mobile": [
          "1.75rem",
          {
            lineHeight: "1.25",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],

        "headline-md": [
          "1.5rem",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],

        "headline-sm": [
          "1.125rem",
          {
            lineHeight: "1.4",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],


        /* Body */

        "body-lg": [
          "1.125rem",
          {
            lineHeight: "1.6",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],

        "body-md": [
          "0.9375rem",
          {
            lineHeight: "1.6",
            letterSpacing: "-0.005em",
            fontWeight: "400",
          },
        ],

        "body-sm": [
          "0.8125rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],


        /* Code */

        "code-inline": [
          "0.875rem",
          {
            lineHeight: "1.4",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],

        "code-block": [
          "0.8125rem",
          {
            lineHeight: "1.7",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],

        "label-code": [
          "0.75rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.04em",
            fontWeight: "500",
          },
        ],

        "label-ui": [
          "0.75rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.01em",
            fontWeight: "500",
          },
        ],
      },


      /* =========================================
         RADIUS
      ========================================= */

      borderRadius: {

        micro: "0.25rem",
        sm: "0.25rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },


      /* =========================================
         SPACING
      ========================================= */

      spacing: {

        gutter: "1.5rem",
        "gutter-mobile": "1rem",

        margin: "2rem",
        "margin-mobile": "1rem",

        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-2xl": "4rem",
      },


      /* =========================================
         MAX WIDTH
      ========================================= */

      maxWidth: {
        content: "1200px",
      },


      /* =========================================
         GRID
      ========================================= */

      gridTemplateColumns: {

        "desktop-12":
          "repeat(12, minmax(0, 1fr))",

        "tablet-8":
          "repeat(8, minmax(0, 1fr))",

        "mobile-4":
          "repeat(4, minmax(0, 1fr))",
      },


      /* =========================================
         GAPS
      ========================================= */

      gap: {
        grid: "1.5rem",
        "grid-tablet": "1.25rem",
        "grid-mobile": "1rem",
      },


      /* =========================================
         BOX SHADOWS
      ========================================= */

      boxShadow: {

        "card-inset":
          "inset 0 1px 0 0 rgba(255, 255, 255, 0.06)",

        "primary-glow":
          "0 0 12px rgba(240, 246, 252, 0.2)",

        "cyan-ring":
          "0 0 0 3px rgba(56, 189, 248, 0.15)",

        "overlay":
          "0 12px 32px -8px rgba(0, 0, 0, 0.6)",

        "telemetry-cyan":
          "0 0 8px rgba(56, 189, 248, 0.4)",

        "telemetry-emerald":
          "0 0 8px rgba(16, 185, 129, 0.4)",
      },


      /* =========================================
         BACKDROP
      ========================================= */

      backdropBlur: {
        card: "12px",
        overlay: "16px",
      },


      /* =========================================
         TRANSITIONS
      ========================================= */

      transitionTimingFunction: {

        precision:
          "cubic-bezier(0.22, 1, 0.36, 1)",
      },

    },
  },

  plugins: [],
};
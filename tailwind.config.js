/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 30% Structural / Font Color (0A1333)
        forest: {
          DEFAULT: "#0A1333",
          dark: "#060c21",
          ultra: "#030612",
          card: "#0f1b45",
          hover: "#142459",
        },
        navy: {
          DEFAULT: "#0A1333",
          dark: "#060c21",
          ultra: "#030612",
          card: "#0f1b45",
          hover: "#142459",
        },

        // 10% CTA / Vibrant Accent (1CA3BB)
        cta: {
          DEFAULT: "#1CA3BB",
          hover: "#168ea3",
          glow: "#25bfdb",
        },
        sage: {
          DEFAULT: "#1CA3BB",
          light: "#1CA3BB",
          mid: "#1CA3BB",
          stroke: "#1CA3BB",
          border: "#1CA3BB",
          glow: "#1CA3BB",
          hover: "#168ea3",
        },
        cyan: {
          DEFAULT: "#1CA3BB",
          light: "#25bfdb",
          glow: "#25bfdb",
          mid: "#1CA3BB",
          stroke: "#168ea3",
        },

        // 60% Canvas / Background (Kept identical as requested)
        canvas: {
          base: "#ece8df",
        },
        surface: {
          light: "#fbf9f4",
          warm: "#f6f3eb",
          soft: "#f4efe4",
        },
        border: {
          subtle: "#cfc4b2",
          card: "#ded6c7",
          sage: "#1CA3BB",
          forest: "#0A1333",
        },
        text: {
          primary: "#0A1333",
          body: "#0A1333",
          subtle: "rgba(10, 19, 51, 0.78)",
          muted: "rgba(10, 19, 51, 0.60)",
          inverse: "#ffffff",
          "inverse-body": "#e6ecf8",
          "inverse-accent": "#1CA3BB",
        },
        wpp: {
          canvas: "#ece8df",
          card: "#fbf9f4",
          midnight: "#060c21",
          "midnight-card": "#0A1333",
          "midnight-dark": "#030612",
          lime: "#1CA3BB",
          "lime-glow": "#25bfdb",
          cyan: "#1CA3BB",
        },
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "Raleway", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-raleway)", "Raleway", "sans-serif"],
        body: ["var(--font-inter)", "var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "Space Mono", "monospace"],
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "36px",
        "3xl": "48px",
        pill: "9999px",
      },
      boxShadow: {
        subtle: "0 4px 14px -2px rgba(10, 19, 51, 0.05)",
        elevated: "0 10px 28px -4px rgba(10, 19, 51, 0.08)",
        feature: "0 20px 50px -10px rgba(10, 19, 51, 0.12)",
        nav: "0 16px 36px -6px rgba(10, 19, 51, 0.14)",
        "hover-ring": "0 0 0 2px rgba(28, 163, 187, 0.9), 0 20px 40px rgba(10, 19, 51, 0.22)",
        glow: "0 0 24px rgba(28, 163, 187, 0.4)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
        liquid: "cubic-bezier(0.25, 1, 0.4, 1)",
      },
      transitionDuration: {
        fast: "200ms",
        normal: "350ms",
        liquid: "750ms",
      },
    },
  },
  plugins: [],
};

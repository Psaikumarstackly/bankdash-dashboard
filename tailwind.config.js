/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Core brand
        brand: {
          DEFAULT: "#2657F6",
          dark: "#1E3FD8",
          light: "#5A7CFA",
        },
        // Sidebar / heading ink
        ink: {
          DEFAULT: "#1B2559",
          light: "#4A5578",
          muted: "#8A93B8",
        },
        // App surfaces
        surface: {
          DEFAULT: "#F4F6FB",
          card: "#FFFFFF",
          soft: "#EEF1FA",
        },
        // Semantic accents used across cards/charts
        accent: {
          teal: "#2ED9C3",
          pink: "#F4548C",
          purple: "#D925C9",
          navy: "#2B3467",
          orange: "#FF8A3D",
          success: "#1FC77B",
          danger: "#F0506E",
        },
      },
      boxShadow: {
        card: "0 4px 24px 0 rgba(27, 37, 89, 0.06)",
        soft: "0 2px 10px 0 rgba(27, 37, 89, 0.04)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

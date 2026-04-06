/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#223848",
        brandDeep: "#142734",
        brandSoft: "#39586b",
        accent: "#c29a66",
        accentSoft: "#d8b58a",
        secondary: "#2d6a5a",
        secondarySoft: "#3f8571",
        muted: "#6b7280",
        page: "#f6f1e8",
        pageSoft: "#ece3d4"
      },
      fontFamily: {
        body: ["var(--font-body)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        card: "0 12px 30px rgba(17, 24, 39, 0.10)"
      }
    }
  },
  plugins: []
};

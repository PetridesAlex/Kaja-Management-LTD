/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#4a3423",
        brandDeep: "#2d1e14",
        brandSoft: "#7a5a3f",
        accent: "#d4af6a",
        accentSoft: "#e4c98f",
        secondary: "#8e6b45",
        secondarySoft: "#b18a5b",
        muted: "#6b7280",
        page: "#f8f2e7",
        pageSoft: "#efe4d2"
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

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradientX 6s ease infinite",
        float: "float 3s ease-in-out infinite",
        "slide-down": "slideDown 0.4s ease-out forwards",
      },
      keyframes: {
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      colors: {
        "purple-250": "#E0D4FF", // pick the hex you want
      },
    },
  },

  plugins: [],
};

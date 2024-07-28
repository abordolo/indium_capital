import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.vue",
  ],

  theme: {
    extend: {
      animation: {
        hero_bg: "hero_bg 50s infinite",
        team_bg: "team_bg 100s infinite",
        our_values_bg: "our_values_bg 100s infinite linear",
      },

      keyframes: {
        hero_bg: {
          "0%": {
            transform: "scale(100%)",
            rotate: "0deg",
            translate: "0px",
          },
          "33%": {
            transform: "scale(150%)",
            rotate: "5deg",
            translate: "10px",
          },
          "100%": {
            transform: "scale(100%)",
            rotate: "0deg",
            translate: "0px",
          },
        },

        team_bg: {
          "0%": {
            transform: "scale(100%)",
          },
          "50%": {
            transform: "scale(120%)",
          },
          "100%": {
            transform: "scale(100%)",
          },
        },

        our_values_bg: {
          "0%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
          },
        },
      },

      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      screens: {
        xs: "480px",
        ml: "900px",
      },

      colors: {
        primary: {
          50: "#E6F3FC",
          100: "#CCE7F9",
          200: "#99CFF3",
          300: "#66B8ED",
          400: "#33A1E7",
          500: "#007DC5",
          600: "#006BA6",
          700: "#005988",
          800: "#00466A",
          900: "#00354D",
        },
      },
    },
  },

  plugins: [forms],
};

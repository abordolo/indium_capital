import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },

      screens: {
        xs: '480px',
      },

      colors: {
        primary: {
          50: '#E0F7FF',
          100: '#C4FFFF',
          200: '#A8FFFF',
          300: '#8CFFFF',
          400: '#70EDFF',
          500: '#007DC5', // primary
          600: '#54D1FF',
          700: '#38B5FD',
          800: '#1C99E1',
          900: '#007DC5',
        },
      },
    },
  },

  plugins: [forms],
};

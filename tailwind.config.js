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
        // primary: {
        //   50: '#E0F7FF',
        //   100: '#B3E5FC',
        //   200: '#81D4FA',
        //   300: '#4FC3F7',
        //   400: '#29B6F6',
        //   500: '#007DC5',
        //   600: '#0369A1',
        //   700: '#075985',
        //   800: '#0C4A6E',
        //   900: '#103C59',
        // },

        primary: {
          50: '#E6F3FC',
          100: '#CCE7F9',
          200: '#99CFF3',
          300: '#66B8ED',
          400: '#33A1E7',
          500: '#007DC5',
          600: '#006BA6',
          700: '#005988',
          800: '#00466A',
          900: '#00354D',
        },
      },
    },
  },

  plugins: [forms],
};

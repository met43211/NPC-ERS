// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#f5f5f7',
            foreground: '#11181C',
            divider: 'rgba(17, 17, 17, 0.1)',
            focus: 'transparent',
            default: {
              DEFAULT: '#ffffff',
              foreground: '#000000',
            },
            primary: {
              DEFAULT: '#3C72FF',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#ff6710',
              foreground: '#ffffff',
            },
            danger: {
              DEFAULT: '#ED2939',
              foreground: '#ffffff',
            },
            success: {
              DEFAULT: 'rgb(58, 171, 64)',
              foreground: '#ffffff',
            },
          },
        },
      },
    }),
    require('tailwindcss-animate'),
  ],
};
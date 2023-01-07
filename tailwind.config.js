/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Poppins',
      },
      animation: {
        blobLeft: 'blobLeft 16s infinite',
        blobRight: 'blobRight 12s infinite',
        blobBottom: 'blobBottom 24s infinite',
      },
      keyframes: {
        blobLeft: {
          '0%': {
            transform: 'translate(0%, 0%) ',
          },
          '33%': {
            transform: 'translate(20%, -10%)',
          },
          '66%': {
            transform: 'translate(10%, 10%)',
          },
          '90%': {
            transform: 'translate(5%, 3%)',
          },
          '100%': {
            transform: 'translate(0%, 0%)',
          },
        },
        blobRight: {
          '0%': {
            transform: 'translate(0%, 0%) ',
          },
          '33%': {
            transform: 'translate(-25%, 10%)',
          },
          '66%': {
            transform: 'translate(-20%, 15%) ',
          },
          '90%': {
            transform: 'translate(-5%, 13%) ',
          },
          '100%': {
            transform: 'translate(0%, 0%) ',
          },
        },
        blobBottom: {
          '0%': {
            transform: 'translate(0%, 0%)',
          },
          '33%': {
            transform: 'translate(25%, -10%) ',
          },
          '66%': {
            transform: 'translate(-25%, -20%) ',
          },
          '90%': {
            transform: 'translate(25%, -10%) ',
          },
          '100%': {
            transform: 'translate(0%, 0%) ',
          },
        },
      },
    },
  },
  plugins: [],
}

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
        blobLeft: 'blobLeft 14s infinite',
        blobRight: 'blobRight 27s infinite',
        blobBottom: 'blobBottom 10s infinite',
      },
      keyframes: {
        blobLeft: {
          '0%': {
            transform: 'translate(0%, 0%) ',
          },
          '33%': {
            transform: 'translate(10%, -10%)',
          },
          '66%': {
            transform: 'translate(-10%, 10%)',
          },
          '90%': {
            transform: 'translate(30%, 3%)',
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
            transform: 'translate(-90%, 70%)',
          },
          '66%': {
            transform: 'translate(-100%, -55%) ',
          },
          '90%': {
            transform: 'translate(-50%, -3%) ',
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
            transform: 'translate(25%, -70%) ',
          },
          '66%': {
            transform: 'translate(-25%, -80%) ',
          },
          '90%': {
            transform: 'translate(25%, -70%) ',
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

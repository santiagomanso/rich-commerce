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
        blobLeft: 'blobLeft 4s infinite',
        blobRight: 'blobRight 7s infinite',
        blobBottom: 'blobBottom 10s infinite',
      },
      keyframes: {
        blobLeft: {
          '0%': {
            transform: 'translate(0%, 0%) scale(1)',
          },
          '33%': {
            transform: 'translate(10%, -20%) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-20%, 20%) scale(0.8)',
          },
          '90%': {
            transform: 'translate(50%, 3%) scale(0.4)',
          },
          '100%': {
            transform: 'translate(0%, 0%) scale(1)',
          },
        },
        blobRight: {
          '0%': {
            transform: 'translate(0%, 0%) scale(1)',
          },
          '33%': {
            transform: 'translate(-90%, 70%) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-100%, -55%) scale(0.8)',
          },
          '90%': {
            transform: 'translate(-50%, -3%) scale(0.4)',
          },
          '100%': {
            transform: 'translate(0%, 0%) scale(1)',
          },
        },
        blobBottom: {
          '0%': {
            transform: 'translate(0%, 0%) scale(0.5)',
          },
          '33%': {
            transform: 'translate(25%, -70%) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-25%, -80%) scale(0.8)',
          },
          '90%': {
            transform: 'translate(25%, -70%) scale(0.4)',
          },
          '100%': {
            transform: 'translate(0%, 0%) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}

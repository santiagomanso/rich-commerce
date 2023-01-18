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
        laptopCart: 'laptopCart 1.5s ease-in-out forwards',
        laptopBox: 'laptopBox 1.5s ease-in-out forwards',
        phoneCart: 'phoneCart 1.5s ease-in-out forwards',
        phoneBox: 'phoneBox 1.5s ease-in-out forwards',
        txtAddToCart: 'txtAddToCart 1s forwards',
        txtAdded: 'txtAdded 1.5s forwards',
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
        laptopCart: {
          '0%': {
            transform: 'translate(-20%, 0%)',
          },
          '40%': {
            transform: 'translate(680%, 0%)',
          },
          '60%': {
            transform: 'translate(680%, 0%)',
          },
          '90%': {
            transform: 'translate(1430%, 0%)',
          },
          '100%': {
            transform: 'translate(1430%, 0%)',
          },
        },
        laptopBox: {
          '0%': {
            transform: 'translate(0%, 0%)',
          },
          '40%': {
            transform: 'translate(0%, 0%)',
          },
          '60%': {
            transform: 'translate(0%, 200%)',
            opacity: 1,
          },
          '65%': {
            opacity: 0,
          },
          '90%': {
            transform: 'translate(1030%, 200%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translate(1030%, 200%)',
            opacity: 0,
          },
        },
        phoneCart: {
          '0%': {
            transform: 'translate(0%, 0%)',
          },
          '40%': {
            transform: 'translate(850%, 0%)',
          },
          '60%': {
            transform: 'translate(850%, 0%)',
          },
          '90%': {
            transform: 'translate(1730%, 0%)',
          },
          '95%': {
            opacity: 1,
          },
          '100%': {
            transform: 'translate(1730%, 0%)',
            opacity: 0,
          },
        },
        phoneBox: {
          '0%': {
            transform: 'translate(0%, 0%)',
          },
          '40%': {
            transform: 'translate(0%, 0%)',
          },
          '60%': {
            transform: 'translate(0%, 200%)',
            opacity: 1,
          },
          '65%': {
            opacity: 0,
          },
          '90%': {
            transform: 'translate(1030%, 200%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translate(1030%, 200%)',
            opacity: 0,
          },
        },
        txtAddToCart: {
          '0%': {
            opacity: 1,
          },
          '10%': {
            opacity: 0,
          },
          '100%': {
            opacity: 0,
          },
        },
        txtAdded: {
          '0%': {
            opacity: 0,
          },
          '95%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
}

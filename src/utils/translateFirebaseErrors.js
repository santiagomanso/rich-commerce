export const translateFirebaseErrors = (error, language) => {
  //   console.log('error', error)
  //isolated language object
  const langObj = {
    en: {
      //firebase errors
      userNotFound: 'Falsches Kennwort',
      wrongPassword: 'Wrong Password',
      invalidEmail: 'E-Mail nicht gefunden',
      internalError: 'Interner Fehler',
    },
    es: {
      //firebase errors
      userNotFound: 'Usuario no encontrado',
      wrongPassword: 'Contraseña equivocada',
      invalidEmail: 'E-Mail no encontrado',
      internalError: 'Error interno',
    },
    de: {
      //firebase errors
      userNotFound: 'User not found',
      wrongPassword: 'Wrong Password',
      invalidEmail: 'Email not found',
      internalError: 'Internal error',
    },
  }

  const newErrorArray = error.split(':').slice(1) //remove the string "Firebase:""
  const newErrorString = newErrorArray.toString()
  const message = newErrorString
    .split('/')
    .slice(1)
    .toString()
    .split(')')
    .slice(0)
    .toString()
    .split(',')
    .slice(0)
    .toString()
    .replace(',', '')
    .replace('.', '')

  switch (message) {
    case 'invalid-email': {
      return langObj[language].invalidEmail
    }

    case 'user-not-found': {
      return langObj[language].userNotFound
    }

    case 'internal-error': {
      return langObj[language].internalError
    }

    case 'wrong-password': {
      return langObj[language].wrongPassword
    }

    default:
      break
  }

  //
}

// Known Errors
// user-not-found
// wrong-password
// invalid-email
// internal-error

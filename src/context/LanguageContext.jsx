import { createContext, useState } from 'react'
import { translations } from '../utils/translations'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en') //this states is what determines language of text tags
  const [text, setText] = useState(translations[language]) //in order to initialize to a given language, the translations object must exist before, otherwise error

  const handleChangeLanguage = (language) => {
    console.log('language', language)
    switch (language) {
      case 'en': {
        setLanguage('en')
        setText(translations.en)
        break
      }
      case 'es': {
        setLanguage('es')
        setText(translations.es)
        break
      }
      case 'de':
        setLanguage('de')
        setText(translations.de)
        break

      default:
        break
    }
  }

  const data = { text, language, handleChangeLanguage }

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}

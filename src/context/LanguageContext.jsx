import { createContext, useEffect, useState } from 'react'
import { translations } from '../utils/translations'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en') //this states is what determines language of text tags
  const [text, setText] = useState(translations[language]) //in order to initialize to a given language, the translations object must exist before, otherwise error
  const [country, setCountry] = useState('United States')
  const [flag, setFlag] = useState('')

  const handleChangeLanguage = (language) => {
    switch (language) {
      case 'en': {
        setLanguage('en')
        setText(translations.en)
        setCountry('United States')
        setFlag(
          'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png',
        )
        break
      }
      case 'es': {
        setLanguage('es')
        setText(translations.es)
        setCountry('Spain')
        setFlag(
          'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-spain2x.png',
        )
        break
      }
      case 'de':
        setLanguage('de')
        setText(translations.de)
        setCountry('Germany')
        setFlag(
          'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-germany2x.png',
        )
        break

      default:
        break
    }
  }

  const getBrowserLanguage = () => {
    switch (navigator.language) {
      case 'es':
        setLanguage('es')
        setText(translations.es)
        setCountry('Spain')
        setFlag(
          'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-spain2x.png',
        )
        break

      case 'en':
        setLanguage('en')
        setText(translations.en)
        setCountry('United States')
        setFlag(
          'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png',
        )
        break

      case 'de':
        setLanguage('de')
        setText(translations.de)
        setCountry('Germany')
        setFlag(
          'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-germany2x.png',
        )
        break

      default:
        setLanguage('en')
        setText(translations.en)
        setFlag(
          'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png',
        )
        break
    }
  }

  useEffect(() => {
    getBrowserLanguage()
  }, [])

  const data = { text, language, handleChangeLanguage, flag, setFlag }

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}

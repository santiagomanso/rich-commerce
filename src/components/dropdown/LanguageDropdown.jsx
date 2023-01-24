import { useEffect, useState, useRef, useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { countryList } from '../../data/countriesData'

const LanguageDropdown = ({ setAnnualIncome }) => {
  const { handleChangeLanguage, language, text, country, flag, setFlag } =
    useContext(LanguageContext)
  const [active, setActive] = useState(false)
  const menuRef = useRef()

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setActive(false)
      }
    }

    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  const handleChange = ({ flag, language }) => {
    setFlag(flag)
    handleChangeLanguage(language)
  }

  return (
    <div
      ref={menuRef}
      onClick={() => setActive(!active)}
      className={`dropdownWrapper `}
    >
      <img src={flag} alt={country} className='h-7 w-7' />
      <ul
        className={`${
          active ? 'scale-100' : 'scale-0'
        }    w-20 overflow-auto p-2`}
      >
        {countryList.map((country) => {
          return country.name[language] === text.germany ||
            country.name[language] === text.usa ||
            country.name[language] === text.spain ? (
            <li
              className='flex items-center justify-center p-2'
              key={country.id}
              onClick={() => handleChange(country)}
            >
              <img src={country.flag} alt={country.name[language]} />
            </li>
          ) : (
            ''
          )
        })}
      </ul>
    </div>
  )
}

export default LanguageDropdown

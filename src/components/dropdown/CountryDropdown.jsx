import { useContext, useEffect, useState, useRef } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { countryList } from '../../data/countriesData'

const CountryDropdown = ({ setAnnualIncome }) => {
  const { language, text } = useContext(LanguageContext)
  const [active, setActive] = useState(false)
  const menuRef = useRef()
  const [country, setCountry] = useState(text.germany)
  const [flag, setFlag] = useState(
    'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-germany2x.png',
  )

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

  const handleChange = ({ name, flag, annualIncome }) => {
    setCountry(name[language])
    setFlag(flag)
    setAnnualIncome(annualIncome)
  }

  return (
    <div
      ref={menuRef}
      onClick={() => setActive(!active)}
      className={`dropdownWrapper`}
    >
      <span className='flex gap-2 items-center'>
        <span>{country}</span>
        <img src={flag} alt={country} className='h-7 w-7' />
      </span>
      <i
        className={`fa-solid fa-chevron-down text-purple-500 ${
          active ? 'rotate-[3deg]' : '-rotate-90'
        }`}
      ></i>

      <ul
        className={`${
          active ? 'scale-100' : 'scale-0'
        } h-[300px] overflow-auto w-56 p-3`}
      >
        {countryList.map((country) => {
          return (
            <li
              className='flex items-center justify-between p-2'
              key={country.id}
              onClick={() => handleChange(country)}
            >
              <span>{country.name[language]}</span>
              <img src={country.flag} alt={country.name[language]} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CountryDropdown

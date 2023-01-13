import { useEffect, useState, useRef } from 'react'
import { countryList } from '../../data/countriesData'

const LanguageDropdown = ({ setAnnualIncome }) => {
  const [active, setActive] = useState(false)
  const menuRef = useRef()
  const [country, setCountry] = useState('Germany')
  const [flag, setFlag] = useState(
    'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-germany2x.png'
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

  const handleChange = ({ flag }) => {
    setFlag(flag)
  }

  return (
    <div
      ref={menuRef}
      onClick={() => setActive(!active)}
      className={`dropdownWrapper`}
    >
      <img src={flag} alt={country} className='h-7 w-7' />
      <ul
        className={`${
          active ? 'scale-100' : 'scale-0'
        }    w-20 overflow-auto p-2`}
      >
        {countryList.map((country) => {
          return country.name === 'Germany' ||
            country.name === 'United States' ||
            country.name === 'Spain' ? (
            <li
              className='flex items-center justify-center p-2'
              key={country.id}
              onClick={() => handleChange(country)}
            >
              <img src={country.flag} alt={country.name} />
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

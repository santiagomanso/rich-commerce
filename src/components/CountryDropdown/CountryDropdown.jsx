import { useEffect, useState, useRef } from 'react'
import { countryList } from '../../data/countriesData'

const CountryDropdown = ({ setAnnualIncome }) => {
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

  const handleChange = ({ name, flag, annualIncome }) => {
    setCountry(name)
    setFlag(flag)
    setAnnualIncome(annualIncome)
  }

  return (
    <div
      ref={menuRef}
      onClick={() => setActive(!active)}
      className={`dropdownWrapper`}
    >
      <span className='flex gap-1 items-center'>
        <span>{country}</span>
        <img src={flag} alt={country} className='h-5 w-5' />
      </span>
      <i
        className={`fa-solid fa-chevron-down ${
          active ? 'rotate-[3deg]' : '-rotate-90'
        }`}
      ></i>

      <ul
        className={`${
          active ? 'scale-100' : 'scale-0'
        } h-[300px] overflow-auto p-2 w-52`}
      >
        {countryList.map((country) => {
          return (
            <li
              className='flex items-center justify-between gap-1 p-2'
              key={country.id}
              onClick={() => handleChange(country)}
            >
              <span>{country.name}</span>
              <img src={country.flag} alt={country.name} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CountryDropdown

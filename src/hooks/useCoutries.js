import { useEffect, useState } from 'react'
import axios from 'axios'

const useCountries = () => {
  const [country, setCountry] = useState('')

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        'https://api.worldbank.org/v2/country/usa;de;ar;ch/indicators/NY.GDP.MKTP.CD?format=json&per_page=200&date=2021'
      )
      setCountry(data)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { country }
}

export default useCountries

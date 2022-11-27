import { useEffect, useState } from 'react'
import axios from 'axios'

const useCharacters = () => {
  const [characters, setCharacters] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    const { data } = await axios.get(
      'https://forbes400.herokuapp.com/api/forbes400?limit=15'
    )
    setCharacters(data)
    setLoading(false)
    return data
  }

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      setError(error)
    }
  }, [])

  return { characters, loading, error, setCharacters }
}

export default useCharacters

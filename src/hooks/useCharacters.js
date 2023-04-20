import { useEffect, useState } from 'react'
import axios from 'axios'
import { backupPlayers } from '../data/backUpPlayers'

const useCharacters = () => {
  const [characters, setCharacters] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const responseOriginal = axios.get(
        'https://forbes400.onrender.com/api/forbes400?limit=15',
      )
      const responseTimedOut = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timed out')), 1000),
      )
      //promise.race takes an array of promises but returns the one that resolves the fastest
      const { data } = await Promise.race([responseOriginal, responseTimedOut])
      setCharacters(data)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
      setCharacters(backupPlayers) //if there is an error i use the backupPlayersData
    }
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

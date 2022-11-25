// 23.11.2022  this will be implemented after the design is operational.

import { useState } from 'react'
import { characters_data } from '../data/characters'

const useCharacters = () => {
  const [chatacters, setChatacters] = useState(characters_data)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  return { loading, error, chatacters, setChatacters }
}

export default useCharacters

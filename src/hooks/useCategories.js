// 23.11.2022  this will be implemented after the design is operational.

import { useEffect, useState } from 'react'
import { categories_list } from '../data/categories'

const useCategories = () => {
  const [categories, setCategories] = useState(categories_list)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // useEffect(() => {
  //   setCategories(categories_list)
  // }, [])

  return { loading, error, categories, setCategories }
}

export default useCategories

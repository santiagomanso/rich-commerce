// 23.11.2022  this will be implemented after the design is operational.

import { useState } from 'react'
import { categories_list } from '../data/categories'

const useCategories = () => {
  const [categories, setCategories] = useState(categories_list)

  //for future development when there is an actual rest api
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('')

  return { categories, setCategories }
}

export default useCategories

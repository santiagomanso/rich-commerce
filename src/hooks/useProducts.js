// 23.11.2022  this will be implemented after the design is operational.

import { useEffect, useState } from 'react'
import { product_list } from '../data/product'

const useProducts = () => {
  const [products, setProducts] = useState(product_list)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setProducts(product_list)
  }, [product_list])

  return { loading, error, products, setProducts }
}

export default useProducts

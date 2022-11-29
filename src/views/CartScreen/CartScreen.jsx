import React from 'react'
import useProducts from '../../hooks/useCategories'
import Product from '../../components/Category/Category'
const CartScreen = () => {
  const { loading, error, products, setProducts } = useProducts()
  return <Product product={products[4]}>CartScreen</Product>
}

export default CartScreen

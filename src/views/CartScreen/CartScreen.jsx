import React from 'react'
import useProducts from '../../hooks/useProducts'
import Product from '../../components/Product/Product'
const CartScreen = () => {
  const { loading, error, products, setProducts } = useProducts()
  return <Product product={products[4]}>CartScreen</Product>
}

export default CartScreen

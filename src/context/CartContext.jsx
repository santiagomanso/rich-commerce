import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]) //array of products
  const [cartCount, setCartCount] = useState(cart.length)

  useEffect(() => {
    setCartCount(cart.length)
  }, [cart])

  const addToCart = (item) => {
    setCart([...cart, { item }])
  }

  return (
    <CartContext.Provider value={{ cart, setCart, cartCount, addToCart }}>
      {props.children}
    </CartContext.Provider>
  )
}

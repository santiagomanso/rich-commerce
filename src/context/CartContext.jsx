import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]) //array of products
  const [cartCount, setCartCount] = useState(cart.length)

  useEffect(() => {
    setCartCount(cart.length)
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, setCart, cartCount }}>
      {props.children}
    </CartContext.Provider>
  )
}

import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = (props) => {
  const getCartFromStorage = () => {
    if (window.localStorage.getItem('cart')) {
      return (
        'JSON.parse(window.localStorage.getItem("cart"))',
        JSON.parse(window.localStorage.getItem('cart'))
      )
    }
    return []
  }

  const [cart, setCart] = useState(getCartFromStorage()) //array of products
  const [cartCount, setCartCount] = useState(cart.length)

  useEffect(() => {
    setCartCount(cart.length)
    getCartFromStorage()
    // window.localStorage.removeItem()
    window.localStorage.setItem('cart', JSON.stringify(cart))
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

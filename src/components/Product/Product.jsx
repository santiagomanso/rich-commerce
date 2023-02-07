import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { LanguageContext } from '../../context/LanguageContext'

const Product = ({ item }) => {
  const { cart, setCart } = useContext(CartContext)
  const { text, language } = useContext(LanguageContext)

  const [active, setActive] = useState(true)

  const [stock, setStock] = useState(item.stock)

  //fn that returns the length of an integer to later show Billions/millions/thousands
  const priceLength = () => {
    return (Math.log(item.price) * Math.LOG10E + 1) | 0
  }

  const addToCart = (item) => {
    setActive(!active)
    // setStock(stock - 1)

    if (active) {
      setCart([...cart, { item }])
    } else {
      const newCart = cart.filter(
        (cartItem) => cartItem.item.product_id !== item.product_id,
      )

      setCart(newCart)
    }
  }

  useEffect(() => {
    if (cart.length > 0) {
      cart.map((cartItem) => {
        if (cartItem.item.product_id === item.product_id) {
          setActive(false)
          // console.log('found it:', cartItem.item)
        }
      })
    }
  }, [cart])

  return (
    <div className=' flex flex-col justify-between shadow-md   border-2 border-gray-300/80  rounded-md relative h-[80vh]'>
      <div className='h-[50vh] w-full overflow-hidden'>
        <img
          className='h-full w-full object-cover border-2 border-gray-100'
          src={`${item.img}`}
          alt={`${item.name[language]}`}
        />
      </div>
      <div
        className='h-[33vh] bg-gradient-to-br px-5 py-2  rounded-md
         from-slate-400/70 dark:from-black/90
         via-white           dark:via-white/5
         to-white            dark:to-slate-800/70'
      >
        <div className='grid grid-cols-1 items-center place-content-between '>
          <p className=' text-gray-700  font-semibold'>
            {item.left_col[language]}
          </p>
        </div>
        <div className='h-4/6 overflow-auto lg:my-1'>
          <p className='text-gray-600 font-medium h-full'>
            {item.desc[language]}
          </p>
        </div>
        <div className='lg:py-3 grid grid-cols-1 lg:grid-cols-2 items-center place-items-center'>
          <span className='lg:text-lg text-green-700 dark:text-gray-300 font-semibold px-2 py-1 rounded-md'>
            $ {item.price.toLocaleString()}{' '}
            {priceLength() > 9
              ? 'Billions'
              : priceLength() > 6
              ? 'Millions'
              : 'Thousands'}
          </span>
          <button
            onClick={() => addToCart(item)}
            className={`w-full md:w-[250px] py-2 lg:py-3  rounded-md  relative flex justify-center items-center
             bg-gradient-to-br ${
               active
                 ? 'from-indigo-500 to-purple-500'
                 : 'from-rose-700 to-red-500'
             } text-white h-10 overflow-hidden`}
          >
            <span className={`${active ? '' : ' animate-txtAddToCart'}`}>
              {text.addToCart}
            </span>
            <span
              className={`absolute ${
                active ? 'hidden' : 'inline animate-txtAdded'
              }`}
            >
              {text.removeFromCart} <i className='fa-solid fa-trash'></i>
            </span>
            <i
              className={`fa-solid fa-box absolute left-[49%] -top-5 ${
                active ? '' : 'animate-phoneBox lg:animate-laptopBox'
              }`}
            ></i>
            <i
              className={`fa-solid fa-cart-shopping text-xl absolute z-40 -left-7 lg:-left-[13%] bottom-1
             ${active ? '' : 'animate-phoneCart lg:animate-laptopCart'}`}
            ></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product

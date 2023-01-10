import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartScreen = () => {
  const { cart } = useContext(CartContext)
  return (
    <main className='h-full lg:h-5/6 flex justify-center items-center'>
      {cart.length > 0 ? (
        ''
      ) : (
        <div className='animate__animated animate__tada flex flex-col gap-y-5 items-center lg:text-6xl  rounded-lg'>
          <div className='flex items-center gap-2'>
            <span>Your Cart is Empty</span>
            <i className='fa-regular fa-face-frown text-gray-700 dark:text-gray-300'></i>
          </div>
          <Link
            to='/categories'
            className='bg-gradient-to-br from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-md'
          >
            Shop now!
          </Link>
        </div>
      )}
    </main>
  )
}

export default CartScreen

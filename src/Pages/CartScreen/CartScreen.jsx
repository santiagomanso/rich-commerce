import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { PlayerContext } from '../../context/PlayerContext'

const CartScreen = () => {
  const { cart, cartCount } = useContext(CartContext)
  const { player } = useContext(PlayerContext)
  return (
    <main
      className={` animate__animated animate__fadeIn ${
        cart.length > 0
          ? 'h-full lg:h-5/6'
          : 'h-full lg:h-5/6 flex justify-center items-center'
      } `}
    >
      {cart.length > 0 ? (
        <div className='bg-blue-500 flex h-full'>
          <div className='bg-red-300 w-2/3 h-full overflow-auto'>
            <div className='bg-orange-300 col-span-2 flex flex-col gap-5'>
              {cart.map(({ item }) => (
                <div key={item.product_id} className='flex  bg-green-200'>
                  <div className='max-w-sm'>
                    <img
                      src={item.img}
                      alt={item.name}
                      className='h-full w-full rounded-lg'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <h2 className='font-semibold uppercase'>{item.name}</h2>
                    {/* <p className=' max-w-[300px] text-ellipsis'>{item.desc}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='bg-green-300 w-1/3 overflow-y-auto'>
            <div className='bg-gray-300 p-4 rounded'>
              <div className='bg-gray-800 py-3 px-4 rounded'>
                <h2 className='text-gray-200'>CHECKOUT</h2>
              </div>
              <span className='text-end'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                voluptatem, quas, culpa quod perferendis veniam modi quia eaque
                est, ea adipisci ex eos natus voluptas sit reprehenderit
                deleniti molestias. Blanditiis.
              </span>
              <h2 className='mt-2 font-semibold text-gray-800'>
                ORDER SUMMARY
              </h2>
              <div className='flex flex-col gap-y-3 divide-y-2 divide-gray-400 bg-white p-4 rounded'>
                <span className='flex justify-between'>
                  <span>
                    Product{cartCount > 1 ? 's' : ''} Quantit
                    {cartCount > 1 ? 'ies' : 'y'}
                  </span>
                  <span>{cartCount}</span>
                </span>
                <span className='flex justify-between'>
                  <span>
                    Product{cartCount > 1 ? 's' : ''} Total
                    {cartCount > 1 ? 's' : ''}
                  </span>
                  <span>1223040349 $</span>
                </span>
                <span className='flex justify-between'>
                  <span>Delivery</span>
                  <span>FREE</span>
                </span>
                <span className='font-semibold text-2xl flex justify-between'>
                  <span>Total</span>
                  <span>31281378722 $</span>
                </span>
              </div>
              <h2 className='mt-8 font-semibold text-gray-800'>
                BUDGET IMPACTS
              </h2>
              <div className='flex flex-col gap-y-3 divide-y-2 divide-gray-400 bg-white p-4 rounded'>
                <span className='flex justify-between'>
                  <span>Player</span>
                  <span className='font-semibold'>{player.personName}</span>
                </span>
                <span className='flex justify-between'>
                  <span>Budget</span>
                  <span>${player.estWorthPrev}</span>
                </span>
                <span className='flex justify-between'>
                  <span>Cart cost</span>
                  <span>31281378722 $</span>
                </span>
                <span className='flex justify-between text-2xl font-semibold'>
                  <span>Total % of budget</span>
                  <span>80%</span>
                </span>
              </div>
              <h2 className='mt-8 font-semibold text-gray-800'>
                AVERAGE PERSON
              </h2>
              <div className='flex flex-col gap-y-3 divide-y-2 divide-gray-400 bg-white p-4 rounded'>
                <span className='flex justify-between'>
                  <span>Annual Income</span>
                  <span>${player.estWorthPrev}</span>
                </span>
                <span className='flex justify-between'>
                  <span>Cart cost</span>
                  <span>31281378722 $</span>
                </span>
                <span className='flex justify-between'>
                  <span>Total % of budget</span>
                  <span>200000%</span>
                </span>
                <span className='flex justify-between text-xl font-semibold'>
                  <span>Years to afford cart</span>
                  <span>40000 years</span>
                </span>
              </div>
              <h2 className='mt-8 font-semibold text-gray-800'>
                GDP to {player.personName} Budget in %
              </h2>
              <div className='flex flex-col gap-y-3 divide-y-2 divide-gray-400 bg-white p-4 rounded'>
                <span className='flex justify-between'>
                  <span>Germany</span>
                  <span>0.13</span>
                </span>
                <span className='flex justify-between'>
                  <span>United States</span>
                  <span>0.09</span>
                </span>
                <span className='flex justify-between'>
                  <span>Spain</span>
                  <span>0.40</span>
                </span>
                <span className='flex justify-between'>
                  <span>Argentina</span>
                  <span>0.65</span>
                </span>
                <span className='flex justify-between items-center'>
                  <span>Laos</span>
                  <span>gdp under budget</span>
                </span>
                <span className='flex justify-between items-center'>
                  <span className='font-semibold'>
                    All of the above combined
                  </span>
                  <span className='text-red-600 bg-red-100 px-3 py-1 rounded font-medium'>
                    0.8
                  </span>
                </span>
              </div>
              <h2 className='mt-8 font-semibold text-gray-800'>
                How many people makes 1 {player.personName}?
              </h2>
              <div className='flex flex-col gap-y-3 divide-y-2 divide-gray-400 bg-white p-4 rounded'>
                <span className='flex justify-between'>
                  <span>Germany</span>
                  <span>670.000 persons</span>
                </span>
                <span className='flex justify-between'>
                  <span>United States</span>
                  <span>430.000 persons</span>
                </span>
                <span className='flex justify-between'>
                  <span>Spain</span>
                  <span>4.230.504 persons</span>
                </span>
                <span className='flex justify-between'>
                  <span>Argentina</span>
                  <span>22.004.324 persons</span>
                </span>
                <span className='flex justify-between items-center'>
                  <span>Laos</span>
                  <span>Persons needed over population</span>
                </span>
                <span className='flex justify-between items-center'>
                  <span className='font-semibold'>
                    All of the above combined
                  </span>
                  <span className='text-red-600 bg-red-100 px-3 py-1 rounded font-medium'>
                    543.004.324 persons
                  </span>
                </span>
              </div>
              <div className='bg-white p-4 mt-8 cursor-pointer rounded'>
                <div className='flex justify-start gap-3 items-center'>
                  <h3>PROMO CODE</h3>
                  <i className='fa-solid fa-money-bill-wave text-xl text-green-700'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
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

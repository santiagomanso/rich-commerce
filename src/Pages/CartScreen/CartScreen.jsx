import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AmountOfPeople from '../../components/CheckoutStats/AmountOfPeople'
import AverageAnnualIncome from '../../components/CheckoutStats/AverageAnnualIncome'
import NetworthImpacts from '../../components/CheckoutStats/NetworthImpacts'
import OrderSummary from '../../components/CheckoutStats/OrderSummary'
import { CartContext } from '../../context/CartContext'
import { LanguageContext } from '../../context/LanguageContext'
import { PlayerContext } from '../../context/PlayerContext'
import { RedirectContext } from '../../context/RedirectContext'
import ModalCheckout from '../../components/modal/Modal'

const CartScreen = () => {
  const { cart, setCart, cartCount } = useContext(CartContext)
  const { player } = useContext(PlayerContext)
  const { setPath } = useContext(RedirectContext)
  const { text, language } = useContext(LanguageContext)
  const [discount, setDiscount] = useState(0)

  //modal
  const [active, setActive] = useState(false)

  //annual income section
  const [yearsToAffordCart, setYearsToAffordCart] = useState(0)
  const [annualIncome, setAnnualIncome] = useState(38426) //germany to initialize

  const [heightProducts, setHeightProducts] = useState('')
  const [heightCheckout, setHeightCheckout] = useState('')

  useEffect(() => {
    getSemitotals()
    getDiscounts()
    calculateHeightProducts()
    calculateHeightCheckout()
  }, [cartCount])

  const getSemitotals = () => {
    let total = 0
    cart.map(({ item }) => {
      return (total = total + item.price)
    })
    return total
  }

  const getDiscounts = () => {
    // console.log('cartCount', cartCount)
    switch (true) {
      case cartCount === 1: {
        setDiscount(0.1)
        break
      }
      case cartCount > 1 && cartCount < 3: {
        setDiscount(0.2)
        break
      }
      case cartCount >= 3 && cartCount < 6: {
        setDiscount(0.3)
        break
      }
      case cartCount > 6: {
        setDiscount(0.4)
        break
      }

      default:
        setDiscount(0)
    }
  }

  const getTotals = () => {
    return getSemitotals() - getSemitotals() * discount
  }

  const getPlayerNetworth = () => {
    if (player.rank) {
      const initialMoney = player.estWorthPrev
      // console.log('initialMoney', initialMoney)
      const moneyParts = initialMoney.toString()
      // console.log('moneyParts', moneyParts)
      const networth = moneyParts.replace('.', '')
      // console.log('player', player)
      return +networth
    } else return
  }

  //function to calculate percentage cart of networth
  const getBudgetTotal = (fn) => {
    // There is a problem when working with the networth of Bezos, that i dont fully comprehend, open to pull requests
    if (player.lastName === 'Bezos') {
      return Math.floor((getTotals() / fn) * 10)
    } else {
      return Math.floor((getTotals() / fn) * 100)
    }
  }

  const getYearsToCart = (income) => {
    return Math.floor(getTotals() / income)
  }

  const handleRemove = (item) => {
    const newCart = cart.filter(
      (cartItem) => cartItem.item.product_id !== item.product_id,
    )
    setCart(newCart)
  }

  //function to animate the height of the grid with the cart items
  const calculateHeightProducts = () => {
    switch (cart.length) {
      case 1: {
        setHeightProducts('h-[90px]')
        break
      }
      case 2: {
        setHeightProducts('h-[200px]')
        break
      }
      case 3: {
        setHeightProducts('h-[300px]')
        break
      }
      default:
        setHeightProducts('h-[300px]')
        break
    }
  }

  //function to animate the height of the checkout container
  const calculateHeightCheckout = () => {
    switch (cart.length) {
      case 1: {
        setHeightCheckout('h-[730px]')
        break
      }
      case 2: {
        setHeightCheckout('h-[600px]')
        break
      }
      default:
        setHeightCheckout('h-[500px]')
        break
    }
  }

  return (
    <main
      className={` grid grid-cols-1 lg:block animate__animated animate__fadeIn ${
        cart.length > 0
          ? 'h-full lg:h-[81%]'
          : 'h-full lg:h-[80.9%] flex justify-center items-center'
      } `}
    >
      {cart.length > 0 && player.rank ? (
        <div className='grid grid-cols-1 lg:gap-0 lg:flex h-full '>
          <div className='bg-gray-300/20 dark:bg-black/70 w-full lg:w-2/3  h-full overflow-auto p-2 lg:p-4 rounded'>
            <div
              className={`duration-300 h-3/4 lg:h-full overflow-auto  col-span-2 flex flex-col gap-5`}
            >
              {cart.map(({ item }, i) => (
                <article
                  key={i}
                  className={`flex  ${
                    i % 2 === 0
                      ? 'bg-gradient-to-br from-slate-100 via-slate-200 to-slate-400 dark:from-gray-700/50 dark:to-slate-500/50'
                      : 'bg-gradient-to-br from-slate-100 via-slate-200 to-slate-400 dark:from-gray-700/50 dark:to-violet-400/40'
                  } rounded min-h-[100px]`}
                >
                  <div className='lg:max-w-[250px] p-2'>
                    <img
                      src={item.img}
                      alt={item.name}
                      className='w-[200px] object-cover lg:h-full lg:w-full rounded'
                    />
                  </div>
                  <div className='flex flex-col py-1 relative w-full'>
                    <h3 className='font-semibold uppercase text-sm md:text-lg'>
                      {item.name[language]}
                    </h3>
                    <div className='flex items-baseline gap-1'>
                      <i className='fa-solid fa-sack-dollar text-green-600/90 dark:text-gray-300 text-2xl'></i>
                      <span className='font-medium text-lg'>
                        {item.price.toLocaleString()}
                      </span>
                    </div>
                    {/* <p className=' max-w-[300px] text-ellipsis'>{item.desc}</p> */}
                    <button
                      onClick={() => handleRemove(item)}
                      className=' absolute right-3 bottom-0 md:bottom-5 lg:bottom-[75%] duration-200 hover:scale-125 p-0'
                    >
                      <i className='fa-solid fa-delete-left text-red-600 dark:text-gray-200 text-2xl '></i>
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <div className='mt-2 lg:hidden w-full flex justify-center items-center'>
              <button
                onClick={() => setActive(true)}
                className='bg-gradient-to-br from-indigo-500/90 to-purple-500/80
               px-10 py-2 rounded-md text-gray-200'
              >
                {text.checkout}
              </button>
            </div>
          </div>
          {/* checkout on laptops/large screen */}
          <div
            className={`hidden lg:block w-full lg:w-2/4 overflow-auto ${heightCheckout}  lg:h-full outline-2 outline outline-slate-400 lg:outline-none duration-300`}
          >
            <div className='bg-gray-300 dark:bg-transparent p-4 rounded'>
              <div className='bg-gray-800 dark:bg-gray-700/50 py-3 px-4 rounded w-full flex justify-between items-center'>
                <h2 className='text-gray-200'>{text.checkout}</h2>
                <i className='fa-solid fa-wallet text-gray-200 text-2xl'></i>
              </div>
              <span className='text-end'>
                <span>{text.checkoutDesc1} </span>
                {getSemitotals().toLocaleString()}${' '}
                <span>{text.checkoutDesc2}</span>
              </span>
              <OrderSummary
                cartCount={cartCount}
                getSemitotals={getSemitotals}
                discount={discount}
                getTotals={getTotals}
              />
              <NetworthImpacts
                name={player.personName}
                getBudgetTotal={getBudgetTotal}
                getPlayerNetworth={getPlayerNetworth}
                getTotals={getTotals}
              />
              <AverageAnnualIncome
                annualIncome={annualIncome}
                getBudgetTotal={getBudgetTotal}
                getTotals={getTotals}
                getYearsToCart={getYearsToCart}
                setAnnualIncome={setAnnualIncome}
              />

              <AmountOfPeople player={player} />
            </div>
          </div>
          {/* checkout on phone/tablets */}
          {active && (
            <ModalCheckout active={active} setActive={setActive}>
              <div
                className={`block lg:hidden w-full overflow-auto h-full outline-2 outline outline-slate-400 lg:outline-none duration-300`}
              >
                <div className='bg-gray-300 dark:bg-transparent p-4 rounded'>
                  <div className='bg-gray-800 dark:bg-gray-700 py-3 px-4 rounded w-full flex justify-between items-center'>
                    <h2 className='text-gray-200'>{text.checkout}</h2>
                    <i className='fa-solid fa-wallet text-gray-200 text-2xl'></i>
                  </div>
                  <span className='text-end'>
                    <span>{text.checkoutDesc1} </span>
                    {getSemitotals().toLocaleString()}${' '}
                    <span>{text.checkoutDesc2}</span>
                  </span>
                  <OrderSummary
                    cartCount={cartCount}
                    getSemitotals={getSemitotals}
                    discount={discount}
                    getTotals={getTotals}
                  />
                  <NetworthImpacts
                    name={player.personName}
                    getBudgetTotal={getBudgetTotal}
                    getPlayerNetworth={getPlayerNetworth}
                    getTotals={getTotals}
                  />
                  <AverageAnnualIncome
                    annualIncome={annualIncome}
                    getBudgetTotal={getBudgetTotal}
                    getTotals={getTotals}
                    getYearsToCart={getYearsToCart}
                    setAnnualIncome={setAnnualIncome}
                  />

                  <AmountOfPeople player={player} />
                </div>
              </div>
            </ModalCheckout>
          )}
        </div>
      ) : !player.rank ? (
        <div className='md:pt-[20%] animate__animated animate__tada flex flex-col gap-y-5 items-center lg:text-6xl  rounded-lg'>
          <div className='flex items-center gap-2'>
            <span>{text.choosePlayer}</span>
            <i className='fa-regular fa-face-frown text-gray-700 dark:text-gray-300'></i>
          </div>
          <Link
            onClick={() => setPath('/cart')}
            to='/characters'
            className='bg-gradient-to-br from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-md'
          >
            {text.buttonChoosePlayer}
          </Link>
        </div>
      ) : (
        <div className='md:pt-[17%] animate__animated animate__tada flex flex-col gap-y-5 items-center lg:text-6xl  rounded-lg'>
          <div className='flex items-center gap-2'>
            <span>{text.yourCartIsEmpty}</span>
            <i className='fa-regular fa-face-frown text-gray-700 dark:text-gray-300'></i>
          </div>
          <Link
            onClick={() => setPath('/cart')}
            to='/categories'
            className='bg-gradient-to-br from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-md'
          >
            {text.shopNow}
          </Link>
        </div>
      )}
    </main>
  )
}

export default CartScreen

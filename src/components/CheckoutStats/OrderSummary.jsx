import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const OrderSummary = ({ cartCount, getSemitotals, discount, getTotals }) => {
  const { text } = useContext(LanguageContext)
  return (
    <>
      <h2 className='mt-2 font-semibold text-gray-800 uppercase'>
        {text.orderSummary}
      </h2>
      <div
        className='flex flex-col gap-y-3 divide-y-2 divide-gray-400 bg-white 
      dark:bg-gray-700 lg:dark:bg-gray-700/50 p-4 rounded'
      >
        <span className='flex justify-between'>
          <span>{text.productQuantity}</span>
          <span>{cartCount}</span>
        </span>
        <span className='flex justify-between'>
          <span>
            {text.semiTotal}
            {cartCount > 1 ? 's' : ''}
          </span>
          <span>$ {getSemitotals().toLocaleString()}</span>
        </span>
        <span className='flex justify-between'>
          <span>{text.discount}</span>
          <span>{discount * 100}%</span>
        </span>
        <span className='font-semibold text-xl flex justify-between'>
          <span>{text.total}</span>
          <span>$ {getTotals().toLocaleString()}</span>
        </span>
      </div>
    </>
  )
}

export default OrderSummary

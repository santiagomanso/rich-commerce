import React from 'react'

const OrderSummary = ({ cartCount, getSemitotals, discount, getTotals }) => {
  return (
    <>
      <h2 className='mt-2 font-semibold text-gray-800'>ORDER SUMMARY</h2>
      <div className='flex flex-col gap-y-3 divide-y-2 divide-gray-400 bg-white dark:bg-gray-700/50 p-4 rounded'>
        <span className='flex justify-between'>
          <span>
            Product{cartCount > 1 ? 's' : ''} Quantit
            {cartCount > 1 ? 'ies' : 'y'}
          </span>
          <span>{cartCount}</span>
        </span>
        <span className='flex justify-between'>
          <span>
            Semitotal
            {cartCount > 1 ? 's' : ''}
          </span>
          <span>{getSemitotals()} $</span>
        </span>
        <span className='flex justify-between'>
          <span>Discount</span>
          <span>{discount * 100}%</span>
        </span>
        <span className='font-semibold text-xl flex justify-between'>
          <span>Total</span>
          <span>{getTotals()} $</span>
        </span>
      </div>
    </>
  )
}

export default OrderSummary

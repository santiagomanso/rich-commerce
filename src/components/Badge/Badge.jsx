import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const Badge = ({ position }) => {
  const { cartCount } = useContext(CartContext)

  return (
    <span
      className={` ${position} text-sm text-white bg-red-500 rounded-full w-[25px] h-[25px] flex justify-center items-center`}
    >
      {cartCount}
    </span>
  )
}

export default Badge

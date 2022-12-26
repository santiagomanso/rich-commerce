import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Dropdown = () => {
  const [active, setActive] = useState(false)
  const menuRef = useRef()

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setActive(false)
      }
    }

    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <div
      ref={menuRef}
      onClick={() => setActive(!active)}
      className={`relative group hover:border-slate-600 cursor-pointer ${
        active === 'profile'
          ? 'border-b-4 border-slate-600'
          : 'border-b-4 border-transparent'
      } flex items-center gap-2`}
    >
      <span>Profile</span>
      <i
        className={` fa-solid fa-chevron-down text-xl text-slate-600 duration-500
                ${active ? 'rotate-180' : 'rotate-0'}`}
      ></i>

      <ul
        className={`flex duration-150 ${
          active ? 'scale-100' : 'scale-0'
        } flex-col gap-3 absolute top-10 right-0 shadow-lg z-10 w-56 bg-slate-100 p-4  rounded-md`}
      >
        <li className='flex items-center gap-2'>
          <i className='fa-solid fa-circle-user text-slate-600'></i>
          <span>My profile</span>
        </li>
        <li className='flex items-center gap-2'>
          <i className='fa-solid fa-heart text-slate-600'></i>
          <span>Favourites</span>
        </li>
        <li className='flex items-center gap-2'>
          <i className='fa-solid fa-power-off text-slate-600'></i>
          <span>Logout</span>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown

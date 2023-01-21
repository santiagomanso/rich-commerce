import { useEffect, useState, useRef, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { LanguageContext } from '../../context/LanguageContext'
import { PlayerContext } from '../../context/PlayerContext'
import { RedirectContext } from '../../context/RedirectContext'
import './dropdown.css'

const Dropdown = ({ name, logout, ulOptions }) => {
  const { text, language } = useContext(LanguageContext)
  const { setPath } = useContext(RedirectContext)
  const { setPlayer } = useContext(PlayerContext)
  const { setCart } = useContext(CartContext)

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

  const handleLogout = () => {
    setPath('')
    logout()
  }

  return (
    <div
      ref={menuRef}
      onClick={() => setActive(!active)}
      className={`dropdownWrapper`}
    >
      <span>{name}</span>
      <i
        className={`fa-solid fa-chevron-down ${
          active ? 'rotate-180' : 'rotate-0'
        }`}
      ></i>

      <ul className={` ${ulOptions} w-48 ${active ? 'scale-100' : 'scale-0'}`}>
        {/* <li className='group p-2'>
          <i className='fa-solid fa-circle-user text-slate-600 group-hover:text-red-600 rotate-180 group-hover:rotate-0 scale-0 group-hover:scale-150 duration-500'></i>
          <span>{text.myProfile}</span>
        </li> */}
        {/* <li className='group p-2'>
          <i className='fa-solid fa-heart text-slate-600 group-hover:text-red-600 rotate-180 group-hover:rotate-0 scale-0 group-hover:scale-150 duration-500'></i>
          <span>Favourites</span>
        </li> */}
        <li className='group p-2' onClick={handleLogout}>
          <i className='fa-solid fa-power-off text-slate-600 group-hover:text-red-600 rotate-180 group-hover:rotate-0 scale-0 group-hover:scale-150 duration-500'></i>
          <span>{text.logout}</span>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown

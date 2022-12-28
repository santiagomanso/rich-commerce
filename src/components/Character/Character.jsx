import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../../context/PlayerContext'
import './character.css'

const Character = ({ character }) => {
  // Create our number formatter.
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  const { player, setPlayer } = useContext(PlayerContext)

  const navigate = useNavigate()
  const [btnPlay, setBtnPlay] = useState(false)

  const handleSelect = (bool) => {
    setBtnPlay(bool)
  }

  const handleClick = () => {
    setPlayer(character)
    navigate('/')
  }

  return (
    <div
      className={`hover:-translate-y-2  duration-500 flex flex-col justify-start rounded-md shadow-md  group  transition-all ease-in-out border-2 border-gray-300/80  overflow-hidden `}
      onMouseEnter={() => handleSelect(true)}
      onMouseLeave={() => handleSelect(false)}
      key={character.rank}
    >
      <div className='rounded-t-lg group overflow-hidden relative'>
        {btnPlay && (
          <button onClick={() => handleClick()} className='btnPlay'>
            <i className='fa-solid fa-play text-xl'></i>
            <span>Play</span>
          </button>
        )}
        <img
          className='group-hover:scale-[1.07] duration-[1s] bg-black/60 object-fill w-full h-full'
          alt='imagen'
          src={character.squareImage}
        />
        <p
          className={`blur-0 text-center rotate-[30deg] absolute top-2 -right-7 text-amber-600 bg-yellow-200
          px-16 py-[0.10rem]  font-semibold shadow-lg
        `}
        >
          #{character.rank}
        </p>
      </div>
      <div
        className='flex flex-1 flex-col gap-y-3 justify-start p-5 h-1/3
      bg-gradient-to-br from-slate-400/70 via-white to-white'
      >
        <div className='flex justify-between items-center '>
          <h3 className='text-gray-700 font-semibold'>
            {character.personName}
          </h3>

          <span className=' text-green-700 bg-green-100 px-2 py-1 rounded-md'>
            {formatter.format(character.estWorthPrev)} Million
          </span>
        </div>
        <p className='text-gray-600 font-medium'>{character.bios[0]}</p>
      </div>
    </div>
  )
}

export default Character

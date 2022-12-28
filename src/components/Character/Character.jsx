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
      className={`characterCard group`}
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
        <img className='' alt='imagen' src={character.squareImage} />
        <p className={`characterRank`}>#{character.rank}</p>
      </div>
      <div className='characterDescWrapper'>
        <div>
          <h3>{character.personName}</h3>

          <span>{formatter.format(character.estWorthPrev)} Million</span>
        </div>
        <p>{character.bios[0]}</p>
      </div>
    </div>
  )
}

export default Character

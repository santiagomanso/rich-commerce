import { createContext, useState, useEffect } from 'react'

export const PlayerContext = createContext()

export const PlayerProvider = (props) => {
  const getPLayerFromStorage = () => {
    if (window.localStorage.getItem('player')) {
      return (
        'JSON.parse(window.localStorage.getItem("player"))',
        JSON.parse(window.localStorage.getItem('player'))
      )
    }
    return []
  }

  const [player, setPlayer] = useState(getPLayerFromStorage()) //single character that plays troughout the app
  const [attemptedPlayer, setAttemptedPlayer] = useState('')

  useEffect(() => {
    getPLayerFromStorage()
    // window.localStorage.removeItem()
    window.localStorage.setItem('player', JSON.stringify(player))
  }, [player])

  const resetPlayer = () => {
    setPlayer('')
  }

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer,
        attemptedPlayer,
        setAttemptedPlayer,
        resetPlayer,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  )
}

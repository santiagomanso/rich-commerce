import { createContext, useState } from 'react'

export const PlayerContext = createContext()

export const PlayerProvider = (props) => {
  const [player, setPlayer] = useState('') //single character that plays troughout the app

  return (
    <PlayerContext.Provider value={[player, setPlayer]}>
      {props.children}
    </PlayerContext.Provider>
  )
}

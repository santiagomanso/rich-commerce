import { createContext, useState } from 'react'

export const PlayerContext = createContext()

export const PlayerProvider = (props) => {
  const [player, setPlayer] = useState('') //single character that plays troughout the app
  const [attemptedPlayer, setAttemptedPlayer] = useState('')

  return (
    <PlayerContext.Provider
      value={{ player, setPlayer, attemptedPlayer, setAttemptedPlayer }}
    >
      {props.children}
    </PlayerContext.Provider>
  )
}

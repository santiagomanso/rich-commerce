import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = (props) => {
  const [player, setPlayer] = useState('') //single character that plays troughout the app

  return (
    <Context.Provider value={[player, setPlayer]}>
      {props.children}
    </Context.Provider>
  )
}

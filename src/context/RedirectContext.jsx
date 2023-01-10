import { createContext, useState } from 'react'

export const RedirectContext = createContext()

export const RedirectProvider = (props) => {
  const [path, setPath] = useState('') //single character that plays troughout the app

  return (
    <RedirectContext.Provider value={{ path, setPath }}>
      {props.children}
    </RedirectContext.Provider>
  )
}

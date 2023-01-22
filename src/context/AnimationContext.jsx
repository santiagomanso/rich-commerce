import { createContext, useState } from 'react'

const AnimationContext = createContext()

const AnimationContextProvider = ({ children }) => {
  const [globalAnimation, setGlobalAnimation] = useState('')

  return <AnimationContext.Provider>{children}</AnimationContext.Provider>
}

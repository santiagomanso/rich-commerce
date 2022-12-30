import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase/firebase' //this is the a fn from firebase.js config file

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('') //the user object must be passed down to the provider as within value

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => {
      unsubscribe()
    }
  }, [user])

  // log in fn
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // create user with EMAIL / PASSWORD
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // logout fn
  const logout = () => {
    return signOut(auth)
  }

  return (
    //the provider is what distributes states and functions throughout the whole app IT MUST recieve destructuration of every state and fn
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}

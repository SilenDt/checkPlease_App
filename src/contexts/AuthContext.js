import React, { useContext, useState, useEffect } from 'react'
import SignUp from '../components/auth/SignUp'
import {auth} from "../config/firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function SignUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    // function login(email, password){
    //     return auth.signInWithEmailAndPassword(email, password)
    // }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe
    },[])

    const value = {
        currentUser,
        // login,
        SignUp
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}


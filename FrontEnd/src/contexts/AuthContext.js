import React, { useContext, useState, useEffect } from 'react'
import SignUp from '../components/auth/SignUp'
import SignUpForm from '../components/auth/SignUpForm'
import { auth } from "../config/firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    console.log(currentUser)
    function SignUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function SignIn(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function logout() {
        return auth.signOut()
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe
    }, [auth.onAuthStateChanged])

    const value = {
        currentUser,
        SignIn,
        SignUp,
        logout,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


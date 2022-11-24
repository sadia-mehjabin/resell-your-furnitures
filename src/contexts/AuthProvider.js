import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(true)

    const createUser = (email, password) => {
        setLoad(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoad(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = (provider) => {
        setLoad(true)
        return signInWithPopup(auth, provider)
    }

    const updatedUser = userInfo => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, validUser => {
            setUser(validUser)
            setLoad(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [] )

    const authInfo = {createUser, user, load, userLogin, logOut, googleLogin, updatedUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
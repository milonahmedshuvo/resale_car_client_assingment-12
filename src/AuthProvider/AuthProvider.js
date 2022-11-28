import React, { createContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext=createContext()
const auth=getAuth(app)




const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)



    const createUser=(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
       setLoading(true)
    }

    const singIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }

    const googleUser=(provider)=>{
        return signInWithPopup(auth, provider)
        setLoading(true)
    }

    const profileUpdate=(info)=>{
        return updateProfile(auth.currentUser, info)
        setLoading(true)
    }

    const userSignOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
     const unscribe= onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
     return ()=>unscribe()
    },[])

    
    const authInfo={user, createUser,singIn, googleUser, profileUpdate, userSignOut, loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;















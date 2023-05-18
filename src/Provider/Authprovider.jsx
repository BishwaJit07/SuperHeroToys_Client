import { createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";

import { useState } from "react";

import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider= new GoogleAuthProvider();

const Authprovider = ({children}) => {

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
      }
      const logOut = (()=>{
        setLoading(true);
        return signOut(auth);
       })

       useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
           console.log(loggedUser);
           setUser(loggedUser);
           setLoading(false)
         })
         return ()=>{
           unsubscribe();
         }
        },[])

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const authInfo ={
            user,
            loading,
            createUser,
            signInGoogle,
            signIn,
            logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
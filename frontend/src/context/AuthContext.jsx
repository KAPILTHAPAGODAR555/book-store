import { Children, createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () =>{
    return useContext(AuthContext);
}
/*
const authContext - createContext();
export const useAuth(){
return useContext(authContext)} 
 */
const googleProvider = new GoogleAuthProvider();
// authprovider
export const AuthProvide = ({children})=>{
    const [currentUser , setCurrentUser] = useState(null);
    const [loading , setLoading] = useState(true);
    // register
    const registerUser = async(email , password)=>{
return await createUserWithEmailAndPassword(auth, email, password);
    }
// login user
const loginUser = async(email , password)=>{
    return await signInWithEmailAndPassword(auth , email , password)
}
// sign with google

const signInWithGoogle = async() =>{
return await signInWithPopup(auth ,googleProvider);
}
// logout page
const logout = async() =>{
    return  await signOut(auth)
}
// userobserver
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
        setCurrentUser(user);
        setLoading(false);
        if(user){
            const {email , displayName , photoURL}  = user;
            const userData = {
                email , username:displayName, photo:photoURL
            }
        }
    })
    return ()=>unsubscribe();
})
    const value ={
        currentUser,
        loading,
       registerUser,
       loginUser,
       signInWithGoogle,
       logout
    }

    // value={value}
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}
import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate } from "react-router-dom"
const PrivateRoute = ({children}) => {
    const {currentUser, loading} = useAuth();
    if(loading){
        return <div>Loading...</div>
    }
    if(currentUser){
        return children;
    }
   return <Navigate to="/login" replace />
 
}

export default PrivateRoute

/*
import react 
import useAuth
import navigate from react-router-dom
const privateRouter = ({childred})=>{
    const {currentUser, LOADING} = useAuth()} */
/*
const authContext = createContext();
export const useAuth(){
return useContext(authContext)} 

const authProvide({childred}){

const*/
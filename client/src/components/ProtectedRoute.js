import React from 'react'
import {Navigate} from "react-router-dom"
import { useAppContext } from '../context/appContext'

const ProtectedRoute = ({children}) => {
    let {user}=useAppContext()
   
       if(!user){
         return <Navigate to="/"/>
       }
       return children
}

export default ProtectedRoute

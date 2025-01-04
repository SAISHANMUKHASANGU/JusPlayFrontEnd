import { Navigate } from "react-router-dom";
import React from 'react'

const ProtectedRoute=({islogin,children})=> {
  return islogin?children:<Navigate to="/Login"/>
}

export default ProtectedRoute

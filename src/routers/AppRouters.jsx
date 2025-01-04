import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom"

import Main from "../pages/main"
import Form from "../pages/form"

import React, { useEffect, useState } from 'react'
import MainLayout from "../layout/MainLayout"
import Products from "../pages/Products"

import SignIn from "../pages/Login"
import Dashboard from "../pages/DashBoard"
import User from "../pages/user"

import Book from "../pages/Book"
import Features from "../pages/Features"
import UserBookings from "../pages/UserBookings"
import Owner from "../pages/OwnerSignup"
import OwnerSignIn from "../pages/OwnerLogin"
import OwnerDashboard from "../pages/OwnerDashboard"
import { userConsumer } from "../context/UserContext"

let islogin="false"
function AppRouters() {
  const {login,setLogin,ownerlogin,setOwnerlogin}=userConsumer();
  
    

  return (
    <>
        {/* <h1>{login}</h1>
        <h1>{ownerlogin}</h1> */}

          
          <Router>
          <MainLayout>
          <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/signup" element={<Form/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/dashboard" element={login==="true"?<Dashboard/>:<Navigate to="/login"/>}/>
          <Route path="/user" element={login==="true"?<User/>:<Navigate to="/login"/>}/>
          <Route path="/book" element={login==="true"?<Book/>:<Navigate to="/login"/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/bookings" element={login==="true"?<UserBookings/>:<Navigate to="/login"/>}/>
          <Route path="/owner" element={<Owner/>}/>
          <Route path="/ownerlogin" element={<OwnerSignIn/>}/>
          <Route path="/ownerdashboard" element={ownerlogin==="true"?<OwnerDashboard/>:<Navigate to="/ownerlogin"/>}/>
          </Routes>
      </MainLayout>
      </Router>
    </>
            
        
    
  )
}

export default AppRouters
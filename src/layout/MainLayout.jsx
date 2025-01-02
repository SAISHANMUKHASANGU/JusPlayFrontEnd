import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import UserHeader from '../components/Dashboardheader'
import Dashboard from '../pages/DashBoard'

function MainLayout({children}) {
  // const islogin=localStorage.getItem("login")
  // console.log(islogin)
  return (
    <>
       <Header/> 
        {children}
        <Footer/>
    </>
  )
}

export default MainLayout
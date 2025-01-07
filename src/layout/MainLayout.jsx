import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import UserHeader from '../components/Dashboardheader'
import Dashboard from '../pages/DashBoard'
import { userConsumer } from '../context/UserContext'
import OwnerHeader from '../components/Ownerheader'

function MainLayout({children}) {
  const {login,setLogin,ownerlogin,setOwnerLogin}=userConsumer()
  return (
    <>
       {
  login === "true" && ownerlogin === "true" ? (
    <UserHeader />
  ) : login === "true" && ownerlogin === "false" ? (
    <UserHeader />
  ) : login === "false" && ownerlogin === "true" ? (
    <OwnerHeader />
  ) : (
    <Header />
  )
}
        {children}
        <Footer/>
    </>
  )
}

export default MainLayout
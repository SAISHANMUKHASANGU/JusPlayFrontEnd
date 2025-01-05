import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import UserHeader from '../components/Dashboardheader'
import Dashboard from '../pages/DashBoard'
import { userConsumer } from '../context/UserContext'

function MainLayout({children}) {
  const {login}=userConsumer()
  return (
    <>
       {login==="true"?<UserHeader/>:<Header/> }
        {children}
        <Footer/>
    </>
  )
}

export default MainLayout
import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import UserHeader from '../components/Dashboardheader'

function Userlayout({children}) {
  return (
    <>
        <UserHeader/>
        {children}
        <Footer/>
    </>
  )
}

export default Userlayout
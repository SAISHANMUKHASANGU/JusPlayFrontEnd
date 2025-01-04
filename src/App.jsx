// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { UserProvider } from './context/UserContext'
import AppRouters from './routers/AppRouters'

function App() {
  

  return (
    <>
    <UserProvider>
      <AppRouters/>
    </UserProvider>
      
    </>
  )
}

export default App

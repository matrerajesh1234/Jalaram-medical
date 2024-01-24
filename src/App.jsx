import React from 'react'
import Home from './Pages/Home/Home'
import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx';



const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer />
    
    </>
  )
}

export default App

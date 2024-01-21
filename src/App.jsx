import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'



const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App

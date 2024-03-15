import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './style.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

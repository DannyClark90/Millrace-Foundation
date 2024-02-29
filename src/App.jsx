import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './style.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App

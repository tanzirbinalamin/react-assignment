
import './App.css'

import Navbar from './components/navbar'

import About from './pages/About'
import Home from './pages/Home'
import Choose from './pages/Choose'

import {Routes, Route } from "react-router-dom";


function App() {
  

  return (
  <>
  <Navbar/>
  <Routes>
     <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Choose" element={<Choose />} />
  </Routes>

 

  </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import About from './pages/About'
import { Routes,Route } from 'react-router-dom'

function App() {
  
  return (
    <div className=' '>

      <div  className='content   w-full max-w-6xl mx-auto  absolute left-1/2 -translate-x-1/2 p-4  mic-blend-overlay z-20' >
      

 <Header/>
 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Favorites' element={<Favorites/>}/>
<Route path='/About' element={<About/>}/>
 </Routes>
  
      </div>
    </div>
  )
}

export default App

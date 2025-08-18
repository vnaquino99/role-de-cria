import LoginPage from '../pages/LoginPage.jsx'
import HomePage from '../pages/HomePage.jsx'
import Navbar from './components/Navbar.jsx'
import { Routes, Route} from "react-router-dom"
import { useState } from 'react'

function App() {
  const [isAberto, setIsAberto] = useState(false) //LAELE
  return (
    <>
      <Navbar isAberto={isAberto} setIsAberto={setIsAberto}/>

      <Routes>
        <Route path="/" element={<LoginPage isAberto={isAberto}/>} />
        <Route path="/home" element={<HomePage isAberto={isAberto} />} />
        
      </Routes>
    </>
  )
}

export default App

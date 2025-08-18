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
        <Route path="/" element={<HomePage isAberto={isAberto}/>} />
        <Route path="/login" element={<LoginPage isAberto={isAberto} />} />
        
      </Routes>
    </>
  )
}

export default App

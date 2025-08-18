import { useEffect, useState } from "react"
import Servico from "../src/components/Servico"
import Menu from "../src/components/Menu"

const HomePage = ({isAberto}) => {
  const [servicos, setServicos] = useState([])
  
  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const res = await fetch('https://role-de-cria.onrender.com/api/servicos')
        const data = await res.json()
        setServicos(data)
      } catch (error) {
        window.alert("Erro ao pegar serviços")
        console.log(error)
      }
    }
    fetchServicos()
  }, [])
  
  return (
    <div className="bg-teal-950 p-4 min-h-[calc(100vh-48px)] flex flex-col justify-start items-center gap-6">
      {servicos.map((servico) => (
        <Servico key={servico.id} servico={servico}/>
      ))}
        <div className={`bg-amber-200 fixed  top-[48px] w-[50%] md:w-[25%] transition-all ${isAberto ? "right-0 z-50" : "right-[-60vw]"}`}>
          <Menu />
        </div>
      
    </div>
    
  )
}

export default HomePage

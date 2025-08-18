
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = ({isAberto, setIsAberto}) => {

    const handleClick = () => {

        setIsAberto(!isAberto)
        console.log(isAberto)
    }

  return (
    <div className='bg-teal-900 h-12 flex items-center px-4 justify-between md:px-20'>
        <span className='text-lg font-bold tracking-wider text-amber-200 cursor-pointer'>Rolé de Cria</span>

        {/* Quando não está aberto */}
        { !isAberto && <FaBars onClick={handleClick} className="text-2xl text-amber-200 cursor-pointer"/>}

        {/* Quando está aberto */}
        { isAberto && <FaTimes onClick={handleClick} className="text-2xl text-amber-200 cursor-pointer"/>}
        
    </div>
  )
}

export default Navbar

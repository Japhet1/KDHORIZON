import { Link } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  return (
    <main className='bg-home bg-cover'>
      <div className=' lg:flex lg:justify-between items-top pt-20 pb-96 lg:px-20 bg-gray-500 bg-opacity-50'>
        <div className='text-3xl font-bold text-white'><Link to='/'><span className='font-gruppo'>KD</span>-<span className=' font-century'>HORIZON</span></Link></div>
        <ul className='md:flex lg:flex md:mt-10 lg:mt-0 md:justify-center lg:justify-between items-center space-x-8 text-white font-bold text-lg'>
            <li>
              <Link className='text-md font-gruppo' to='/'>ACCUEIL</Link>
            </li>
            <li>
              <Link className='text-md font-gruppo' to='/about'>A PROPOS DE NOUS</Link>
            </li>
            <li className="relative group">
              <button className="m-1 text-md items-center font-gruppo"><Link className='flex text-md font-gruppo' to=''>NOS SERVICES<AiOutlineAlignRight className="ms-2 text-xl"/></Link></button>
              <div className="absolute hidden group-hover:block rounded-md text-left shadow-lg z-[1] bg-blue-700 w-48">
                <Link to='/Services/Animal' className="flex text-lg space-x-5 px-2 hover:bg-blue-600 py-2 font-gruppo items-center"><BsArrowRight/><h1>Production Animale</h1></Link>
                <Link to='/Services/Agriculture' className="flex text-lg space-x-5 px-2 hover:bg-blue-600 py-2 font-gruppo items-center"><BsArrowRight/><h1>Production Agricole</h1></Link>
                <Link to='/Services/Transport' className="flex text-lg space-x-5 px-2 hover:bg-blue-600 py-2 font-gruppo items-center"><BsArrowRight/><h1>Transport</h1></Link>
              </div>
            </li>
        </ul>
      </div> 
    </main>
  )
}

export default Navbar
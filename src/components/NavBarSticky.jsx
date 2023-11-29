import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineAlignRight } from "react-icons/ai";

const NavBarSticky = () => {
  return (
    <main className="sticky top-0">
        <div className='lg:flex lg:justify-between items-center py-5 px-10 bg-blue-700 text-white'>
          <div className='text-3xl font-bold '><Link to='/'><span className=' font-gruppo'>KD</span>-<span className=' font-century'>HORIZON</span></Link></div>
          <ul className='flex md:mt-10 lg:mt-0 justify-center md:space-x-8 items-center text-white font-bold text-lg'>
            <li>
              <Link className=' text-md font-gruppo' to='/'>ACCUEIL</Link>
            </li>
            <li>
              <Link className=' text-md font-gruppo' to='/about'>A PROPOS DE NOUS</Link>
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

export default NavBarSticky
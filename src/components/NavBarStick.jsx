import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineAlignRight } from "react-icons/ai";

const NavBarStick = () => {
  return (
    <main className="">
        <div className='lg:flex lg:justify-between items-center py-5 px-10 bg-blue-700 text-white'>
          <div className='text-3xl font-bold '><Link to='/'><span className=' font-gruppo'>KD</span>-<span className=' font-century'>HORIZON</span></Link></div>
          <ul className='flex md:mt-10 lg:mt-0 justify-between items-center space-x-8 text-white font-bold text-lg'>
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
        <div className="bg-about text-center bg-center text-black">
          <div className=" bg-gray-700 md:p-40 lg:p-48 mb-auto bg-opacity-50">
            <h1 className="text-7xl font-gruppo text-white shadow-lg font-bold">Qui somme nous</h1>
          </div>
        </div>
    </main>
  )
}

export default NavBarStick
import { Link } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
import { BsArrowRight, BsFillArrowDownSquareFill } from "react-icons/bs";


const Navbar = () => {
  return (
    <main className='bg-home bg-cover'>
      <div className='flex flex-wrap justify-between items-center md:flex md:flex-col lg:flex lg:flex-row lg:justify-between items-top pt-10 pb-96 px-5 lg:px-20 bg-gray-500 bg-opacity-50'>
        <div className="relative group md:hidden text-white">
          <button><AiOutlineAlignRight className="ms-2 text-2xl text-white"/></button>
          <ul className="text-start absolute hidden group-hover:block w-64 bg-blue-700 mt-5 p-2 space-y-3">
            <li className="p-2">
              <Link className='text-md font-kanit' to='/'>ACCUEIL</Link>
            </li>
            <li className="p-2">
              <Link className='text-md font-kanit' to='/about'>A PROPOS DE NOUS</Link>
            </li>
            <div>
              <li className="relative group p-2">
                <button className="m-1 text-md items-center font-kanit"><Link className='flex text-md font-kanit' to=''>NOS SERVICES<BsFillArrowDownSquareFill className="ms-2 text-xl"/></Link></button>
                <div className="text-left ms-2">
                  <Link to='/Services/Animal' className="flex text-lg space-x-5 px-2 py-2 font-kanit items-center"><BsArrowRight/><h1>Production Animale</h1></Link>
                  <Link to='/Services/Agriculture' className="flex text-lg space-x-5 px-2 py-2 font-kanit items-center"><BsArrowRight/><h1>Production Agricole</h1></Link>
                  <Link to='/Services/Transport' className="flex text-lg space-x-5 px-2 py-2 font-kanit items-center"><BsArrowRight/><h1>Transport</h1></Link>
                </div>                 
              </li>
            </div>
          </ul>
        </div>
       
        <div className='text-3xl font-bold text-white'><Link to='/'><span className='font-kanit'>KD</span>-<span className=' font-century'>HORIZON</span></Link></div>
        <ul className='md:flex lg:flex md:mt-10 lg:mt-0 md:justify-center lg:justify-between items-center  text-white font-bold text-lg'>
          <div className="hidden md:flex md:space-x-8">
            <li>
              <Link className='text-md font-kanit' to='/'>ACCUEIL</Link>
            </li>
            <li>
              <Link className='text-md font-kanit' to='/about'>A PROPOS DE NOUS</Link>
            </li>
            <li className="relative group">
              <button className="m-1 text-md items-center font-kanit"><Link className='flex text-md font-kanit' to=''>NOS SERVICES<AiOutlineAlignRight className="ms-2 text-xl"/></Link></button>
              <div className="absolute hidden group-hover:block rounded-md text-left shadow-lg z-[1] bg-blue-700 w-48">
                <Link to='/Services/Animal' className="flex text-lg space-x-5 px-2 hover:bg-blue-600 py-2 font-kanit items-center"><BsArrowRight/><h1>Production Animale</h1></Link>
                <Link to='/Services/Agriculture' className="flex text-lg space-x-5 px-2 hover:bg-blue-600 py-2 font-kanit items-center"><BsArrowRight/><h1>Production Agricole</h1></Link>
                <Link to='/Services/Transport' className="flex text-lg space-x-5 px-2 hover:bg-blue-600 py-2 font-kanit items-center"><BsArrowRight/><h1>Transport</h1></Link>
              </div>
            </li>
          </div>      
        </ul> 
      </div> 
    </main>
  )
}

export default Navbar
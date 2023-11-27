import { BsDot, BsTelephoneFill, BsFacebook, BsInstagram, BsTwitter,  } from "react-icons/bs";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { AiOutlineLine } from "react-icons/ai";

const Footer = () => {
  return (
    <main className="lg:grid lg:grid-cols-12 text-left text-white justify-center px-2 py-5 md:px-10 lg:px-10 md:py-20 lg:py-20 bg-blue-700">
        <div className="lg:col-span-4">
          <div className="flex flex-wrap items-center px-6 py-5 ">
            <div className="text-3xl font-bold font-gruppo">
              <h1>A propos de nous</h1>
              <AiOutlineLine className="text-white text-2xl"/>
            </div>
            <div className="pt-5 text-lg pb-10 leading-10 font-leelawadee">
              <p>Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
              <div className="flex flex-wrap items-center space-x-4">
                <div className="bg-white rounded-md p-3 text-sky-700 overflow-hidden shadow-lg"><BsFacebook className="text-xl"/></div>
                <div className="bg-white rounded-md p-3 text-sky-700 overflow-hidden shadow-lg"><BsInstagram className="text-xl"/></div>
                <div className="bg-white rounded-md p-3 text-sky-700 overflow-hidden shadow-lg"><BsTwitter className="text-xl"/></div>
              </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="flex flex-wrap  max-w-lg px-6 py-5 ">
            <div className="text-3xl font-bold font-gruppo">
              <h1>Address</h1>
              <AiOutlineLine className="text-white text-2xl"/>
            </div>
            <div className="pt-5 leading-8 text-lg space-y-5">
              <div className="md:flex items-top space-y-2 md:space-y-0 md:space-x-4"><MdLocationOn className="w-8 text-2xl"/><div className="md:ms-2 font-leelawadee"><h1>Lome, Agoe-Assiyeye, Derriere la station YATT & CO</h1></div></div>
              <div className="md:flex items-center space-y-2 md:space-y-0 md:space-x-4"><MdEmail className="w-8 text-2xl"/><div className="md:ms-2 font-leelawadee"><h1>kdhorizonsarl@gmail.com</h1></div></div>
              <div className="md:flex items-center space-y-2 md:space-y-0 md:space-x-4"><BsTelephoneFill className="w-8 text-2xl"/><div className="md:ms-2 font-leelawadee"><h1>+228 70771177 / 92415863</h1></div></div>
            </div> 
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="px-6 py-5 ">
            <div className="text-3xl font-bold font-gruppo">
              <h1>Pages</h1>
              <AiOutlineLine className="text-white text-2xl"/>
            </div>
            <div className="pt-5 pb-10 leading-8 text-lg space-y-3">
              <div className="flex flex-wrap items-center font-leelawadee"><BsDot className="text-xl"/><h1>Accueil</h1></div>
              <div className="flex flex-wrap items-center font-leelawadee"><BsDot className="text-xl"/><h1>A propos de nous</h1></div>
              <div className="flex flex-wrap items-center font-leelawadee"><BsDot className="text-xl"/><h1>Nos services</h1></div>
              <div className="flex flex-wrap items-center font-leelawadee"><BsDot className="text-xl"/><h1>Contact</h1></div>
            </div>
          </div>
        </div>
        
    </main>
  )
}

export default Footer
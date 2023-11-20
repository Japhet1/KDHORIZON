
import { AiOutlineLine } from "react-icons/ai";

const Personel = () => {
  return (
    <main className="py-20">
        <div className="text-center items-center mb-10 text-black">
            <h1 className="font-bold text-5xl font-gruppo">Personnel</h1>
            <AiOutlineLine className="w-full text-2xl text-green-700 text-center"/>     
        </div>
        <div className="flex flex-wrap justify-center gap-16">
            
            <div className="max-w-lg bg-white shadow-lg">
                <img className="" src='/Team1.jpg' alt="" width={250} height={0} />
                <h1 className="text-2xl font-semibold text-black mt-10 mb-3 text-center font-gruppo">Klohoun Espoir</h1>
                <h1 className="text-gray-500 text-lg text-center mb-5 font-leelawadee">Manager</h1>
            </div>
            <div className="max-w-lg bg-white  shadow-lg">
                <img className="" src='/Team2.jpg' alt="" width={250} height={0} />
                <h1 className="text-2xl font-semibold text-black mt-10 mb-3 text-center font-gruppo">Klohoun Espoir</h1>
                <h1 className="text-gray-500 text-lg text-center mb-5 font-leelawadee">Manager</h1>
            </div>
            <div className="max-w-lg bg-white  shadow-lg">
                <img className="" src='/Team1.jpg' alt="" width={250} height={0} />
                <h1 className="text-2xl font-semibold text-black mt-10 mb-3 text-center font-gruppo">Klohoun Espoir</h1>
                <h1 className="text-gray-500 text-lg text-center mb-5 font-leelawadee">Manager</h1>
            </div>
            <div className="max-w-lg bg-white  shadow-lg">
                <img className="" src='/Team2.jpg' alt="" width={250} height={0} />
                <h1 className="text-2xl font-semibold text-black mt-10 mb-3 text-center font-gruppo">Klohoun Espoir</h1>
                <h1 className="text-gray-500 text-lg text-center mb-5 font-leelawadee">Manager</h1>
            </div>
        </div>
    </main>
  )
}

export default Personel
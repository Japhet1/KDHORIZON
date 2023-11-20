
import { AiOutlineLine } from "react-icons/ai";


const TransportGallery  = () => {
  return (
    <div className="py-20">
        <div className="text-center text-3xl mb-10 items-center text-black">
            <h1 className="font-gruppo text-5xl font-bold">Gallerie</h1>
            <AiOutlineLine className="w-full text-2xl text-green-700 text-center"/>      
        </div>
        <div className="flex flex-wrap justify-center gap-10">
            <div className="max-w-md bg-white">
                <img className="" src='/10.jpg' alt="" width={300} height={100} />
            </div>
            <div className="max-w-md bg-white">
                <img className="" src='/10.jpg' alt="" width={300} height={100} />
            </div>
            <div className="max-w-md bg-white">
                <img className="" src='/10.jpg' alt="" width={300} height={100} />
            </div>
 
        </div>
    </div>
  )
}

export default TransportGallery 
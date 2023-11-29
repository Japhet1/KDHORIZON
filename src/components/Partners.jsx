
import { AiOutlineLine } from "react-icons/ai";

const Partners = () => {
  return (
    <main className="text-center p-5 mt-10 text-black">
      <div className="text-5xl font-bold mb-10 font-gruppo">
        <h1>Partenaires</h1>
        <AiOutlineLine className="w-full text-2xl text-green-700 text-center"/>
      </div>
        
        <div className="flex flex-wrap justify-center py-10">
            <div className="lg:flex-auto lg:max-w-sm"><img src='/client3.png' alt='' width={200} height={50}/></div>
            <div className="lg:flex-auto lg:max-w-sm"><img src='/client3.png' alt='' width={200} height={50}/></div>
            <div className="lg:flex-auto lg:max-w-sm"><img src='/client3.png' alt='' width={200} height={50}/></div>
        </div>
    </main>
  )
}

export default Partners
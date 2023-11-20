
import { AiOutlineLine } from "react-icons/ai";

const Gallery = () => {
  return (
    <main className="bg-blue-100 text-center my-20">
        <div className="text-5xl font-bold text-black py-20 font-gruppo">
            <h1 >Gallerie</h1>
            <AiOutlineLine className="w-full text-2xl text-green-700 text-center"/>
        </div>
        <div className="carousel carousel-horizontal">
            <div className="carousel-item">
                <img src="" alt="" />
            </div> 
            <div className="carousel-item">
                <img src="/" alt="" />
            </div> 
            <div className="carousel-item">
                <img src="/im" alt="" />
            </div> 
            <div className="carousel-item">
                <img src="/" alt="" />
            </div> 
            <div className="carousel-item">
                <img src="/" alt="" />
            </div> 
            <div className="carousel-item">
                <img src="/" alt=""/>
            </div> 
            <div className="carousel-item">
                <img src="/" alt=""/>
            </div>
        </div>

    </main>
  )
}

export default Gallery
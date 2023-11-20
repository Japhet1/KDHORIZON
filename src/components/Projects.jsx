
import { AiOutlineLine } from "react-icons/ai";

const Projects = () => {
  return (
    <main className="text-center p-5 mt-32 bg-white text-black">
        <div className="text-5xl font-bold mb-10 font-gruppo">
            <h1>Nos Projets</h1> 
            <AiOutlineLine className="w-full text-2xl text-green-700 text-center"/>     
        </div>
        
        <div className="flex flex-wrap flex-grow justify-center gap-8">
            <div className="md:max-w-xs lg:max-w-md rounded overflow-hidden shadow-md">
                <img className="w-full" src='/img4.jpg' alt="img" width={300} height={50} />
                <div className="px-6 py-4">
                    <div className="font-bold text-black text-3xl mb-4 font-gruppo">Project</div>
                    <p className="text-gray-700 text-lg leading-8 font-leelawadee">
                    Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
            </div>

            <div className="md:max-w-xs lg:max-w-md rounded overflow-hidden shadow-md">
                <img className="w-full" src='/img4.jpg' alt="img" width={300} height={50} />
                <div className="px-6 py-4">
                    <div className="font-semibold text-black text-3xl mb-4 font-gruppo">Project</div>
                    <p className="text-gray-700 text-lg leading-8 font-leelawadee">
                    Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
            </div>

            <div className="md:max-w-xs lg:max-w-md rounded overflow-hidden shadow-md">
                <img className="w-full" src='/img4.jpg' alt="img" width={300} height={50} />
                <div className="px-6 py-4">
                    <div className="font-semibold text-black text-3xl mb-4 font-gruppo">Project</div>
                    <p className="text-gray-700 text-lg leading-8 font-leelawadee">
                    Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Projects
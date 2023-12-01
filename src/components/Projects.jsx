
import { AiOutlineLine } from "react-icons/ai";

const Projects = () => {
  return (
    <main className="text-center p-5 mt-32 text-black">
        <div className="text-4xl md:text-5xl font-bold mb-10 font-kanit">
            <h1>Nos Projets</h1> 
            <AiOutlineLine className="w-full text-2xl text-green-700 text-center"/>     
        </div>
        
        <div className="flex flex-wrap flex-grow justify-center gap-8">
            <div className="md:max-w-xs lg:max-w-md rounded border border-gray-400">
                <img className="w-full" src='/img4.jpg' alt="img" width={300} height={50} />
                <div className="px-6 py-4">
                    <div className="font-bold text-black text-2xl md:text-3xl mb-4 font-kanit">Project</div>
                    <p className="text-gray-700 text-lg leading-8 font-nunito">
                    Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
            </div>

            <div className="md:max-w-xs lg:max-w-md rounded border border-gray-400">
                <img className="w-full" src='/img4.jpg' alt="img" width={300} height={50} />
                <div className="px-6 py-4">
                    <div className="font-semibold text-black text-2xl md:text-3xl mb-4 font-kanit">Project</div>
                    <p className="text-gray-700 text-lg leading-8 font-nunito">
                    Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
            </div>

            <div className="md:max-w-xs lg:max-w-md rounded border border-gray-400">
                <img className="w-full" src='/img4.jpg' alt="img" width={300} height={50} />
                <div className="px-6 py-4">
                    <div className="font-semibold text-black text-2xl md:text-3xl mb-4 font-kanit">Project</div>
                    <p className="text-gray-700 text-lg leading-8 font-nunito">
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
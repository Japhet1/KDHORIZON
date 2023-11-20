
import { BsCheck2 } from "react-icons/bs";
import Personel from "./Personel";
import { AiOutlineLine } from "react-icons/ai";

const About = () => {
  return (
    <main className="p-10">
        <section>
            <div className="flex flex-wrap justify-center mb-10 gap-20">
                <div className="max-w-2xl p-8 text-left">
                    <div className=" h-auto">
                        <img className="overflow-hidden" src='/logo21.png' alt="" width={{}} height={0} />
                    </div>

                    <div className="mt-10 lg:ms-10">
                        <h1 className="text-3xl text-black font-semibold font-bahnschrift mb-5">Notre vision<AiOutlineLine className="text-green-700" /></h1>
                        <p className="leading-8 text-lg font-leelawadee text-gray-700">Nous aspirons à être un leader mondial dans notre secteur, en impulsant des avancées 
                        et en ayant un impact durable sur la vie de nos clients, employés et communautés.</p>
                    </div>
                    
                    
                </div>
                <div className="max-w-2xl p-8 text-left items-center">
                    <div className="lg:mt-16">
                        <h1 className="text-3xl text-black font-semibold font-bahnschrift mb-5">Notre mission<AiOutlineLine className="text-green-700" /></h1>
                        <p className="leading-8 text-lg font-leelawadee text-gray-700">Chez KD Horizon, nous sommes dévoués à l art de l agriculture et à vous offrir 
                        les produits les plus frais et délicieux, tout droit sortis de nos champs jusqu à votre table.
                        Plongez dans un univers de bienfaits nourrissants alors que nous vous emmenons 
                        dans un voyage à travers les merveilles de l agriculture durable.</p>
                    </div>

                    <div className="mt-40 md:mt-28 lg:mt-40">
                        <h1 className="text-3xl text-black font-semibold font-bahnschrift mb-5">Nos Valeurs<AiOutlineLine className="text-green-700" /></h1>
                        <div className=" items-center text-lg leading-8 text-gray-700">
                            <div className="flex items-center"><BsCheck2 /><p className="ms-2 font-leelawadee">Intégrité</p></div>
                            <div className="flex items-center"><BsCheck2 /><p className="ms-2 font-leelawadee">Excellence</p></div>  
                            <div className="flex items-center"><BsCheck2 /><p className="ms-2 font-leelawadee">Collaboration</p></div>
                            <div className="flex items-center"><BsCheck2 /><p className="ms-2 font-leelawadee">Innovation</p></div>  
                        </div>  
                    </div> 
                </div>
            </div>
        </section>
        <Personel />
    </main>
  )
}

export default About
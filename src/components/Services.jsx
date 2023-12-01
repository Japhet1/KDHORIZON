
import { GiCow, GiTruck, GiGrain } from "react-icons/gi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import '../index.css'

const Service = () => {
  return (
    <main className='flex flex-wrap justify-center md:space-y-5 lg:space-y-0 md:-mt-20 text-left'>
      <div className='md:max-w-lg lg:max-w-md overflow-hidden md:rounded-md lg:rounded-none md:shadow-lg bg-blue-500 px-6 py-5'>
        <div className='flex md:flex md:flex-col items-end md:items-start'><GiCow className='text-5xl md:text-6xl text-white'/><h1 className='font-bold text-white ms-4 md:ms-0 text-3xl md:text-4xl mb-2 md:py-5 font-kanit'>Production Animale</h1></div>
        <p className='text-white text-md md:text-lg lg:text-lg leading-8 pb-6 font-nunito'>À KD Horizon, nous croyons en des pratiques agricoles éthiques et 
          durables qui accordent la priorité au bien-être de nos animaux.
        </p>
        <button className='text-white rounded-md text-base hover:scale-110 transition-all mt-4 font-nunito'><a className="flex items-centetr" href='/Services/Animal'>Read more<BsBoxArrowUpRight className="items-center ms-2"/></a></button>
      </div>

      <div className='md:max-w-lg lg:max-w-lg overflow-hidden md:rounded-md lg:rounded-none md:shadow-lg bg-blue-700 px-6 py-5'>
        <div className='flex md:flex md:flex-col items-end md:items-start'><GiTruck className='text-5xl md:text-6xl text-white'/><h1 className='font-bold text-white ms-4 md:ms-0 text-3xl md:text-4xl mb-2 md:py-5 font-kanit'>Transport</h1></div>
        <p className='text-white text-md md:text-lg lg:text-lg leading-8 pb-6 font-nunito'>Nous sommes un partenaire fiable dans le monde du transport et de la logistique. 
          Nous sommes spécialisés dans la fourniture de services de transport.
        </p>
          <button className='text-white rounded-md text-base hover:scale-110 transition-all mt-4 font-nunito'><a className="flex items-centetr" href='/Services/Transport'>Read more<BsBoxArrowUpRight className="items-center ms-2"/></a></button>
      </div>

      <div className='md:max-w-lg lg:max-w-md overflow-hidden md:rounded-md lg:rounded-none md:shadow-lg bg-blue-500 px-6 py-5'>
        <div className='flex md:flex md:flex-col items-end md:items-start'><GiGrain className='text-5xl md:text-6xl text-white'/><h1 className='font-bold text-white ms-4 md:ms-0 text-3xl md:text-4xl mb-2 md:py-5 font-kanit'>Production Agricole</h1></div>
        <p className='text-white text-md md:text-lg lg:text-lg leading-8 pb-6 font-nunito'>Nichée au cœur dune campagne fertile, notre ferme possède des champs étendus
          et des vergers abondants.
        </p>
        <button className='text-white rounded-md text-base hover:scale-110 transition-all mt-4 font-nunito'><a className="flex items-centetr" href='/Services/Agriculture'>Read more<BsBoxArrowUpRight className="items-center ms-2"/></a></button>
      </div>
    </main>
  )
}

export default Service
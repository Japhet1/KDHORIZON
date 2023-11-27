
import { GiCow, GiTruck, GiGrain } from "react-icons/gi";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Service = () => {
  return (
    <main className='flex flex-wrap justify-center md:space-y-5 lg:space-y-0 -mt-32 text-left'>
      <div className='md:max-w-lg lg:max-w-md overflow-hidden md:rounded-md lg:rounded-none shadow-lg bg-blue-500 px-6 py-5'>
        <div className=''><GiCow className='text-6xl text-white'/><h1 className='font-bold text-white ms-2 text-4xl mb-2 py-5 font-gruppo'>Production Animale</h1></div>
        <p className='text-white text-lg leading-8 pb-6 font-leelawadee'>À KD Horizon, nous croyons en des pratiques agricoles éthiques et 
          durables qui accordent la priorité au bien-être de nos animaux.
        </p>
        <button className='text-white rounded-md text-base mt-4 font-leelawadee'><a className="flex items-centetr" href='/Services/Animal'>Read more<BsBoxArrowUpRight className="items-center ms-2"/></a></button>
      </div>

      <div className='md:max-w-lg lg:max-w-lg overflow-hidden md:rounded-md lg:rounded-none shadow-lg bg-blue-700 px-6 py-5'>
        <div className=''><GiTruck className='text-6xl text-white'/><h1 className='font-bold ms-4 text-white text-4xl mb-2 py-5 font-gruppo'>Transport</h1></div>
        <p className='text-white text-lg leading-8 pb-6 font-leelawadee'>Nous sommes un partenaire fiable dans le monde du transport et de la logistique. 
          Nous sommes spécialisés dans la fourniture de services de transport.
        </p>
          <button className='text-white rounded-md text-base mt-4 font-leelawadee'><a className="flex items-centetr" href='/Services/Transport'>Read more<BsBoxArrowUpRight className="items-center ms-2"/></a></button>
      </div>

      <div className='md:max-w-lg lg:max-w-md overflow-hidden md:rounded-md lg:rounded-none shadow-lg bg-blue-500 px-6 py-5'>
        <div className=''><GiGrain className='text-6xl text-white'/><h1 className='font-bold ms-4 text-white text-4xl mb-2 py-5 font-gruppo'>Production Agricole</h1></div>
        <p className='text-white text-lg leading-8 pb-6 font-leelawadee'>Nichée au cœur dune campagne fertile, notre ferme possède des champs étendus
          et des vergers abondants.
        </p>
        <button className='text-white rounded-md text-base mt-4 font-leelawadee'><a className="flex items-centetr" href='/Services/Agriculture'>Read more<BsBoxArrowUpRight className="items-center ms-2"/></a></button>
      </div>
    </main>
  )
}

export default Service
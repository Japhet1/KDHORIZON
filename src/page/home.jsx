import Gallery from "../components/Gallery"
import Navbar from "../components/Navbar"
import Partners from "../components/Partners"
import Projects from "../components/Projects"
import Service from "../components/Services"


const Home = () => {
  return (
    <main className="bg-blue-50">
        <Navbar />
        <Service/>
        <Projects/>
        <Gallery/>
        <Partners/>
    </main>
  )
}

export default Home
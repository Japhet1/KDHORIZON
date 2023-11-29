import About from "../components/About"
import AboutBanner from "../components/AboutBanner"
import NavBarSticky from "../components/NavBarSticky"



const AboutPage = () => {
  return (
    <main>
        <NavBarSticky/>
        <AboutBanner/>
        <About/>
    </main>
  )
}

export default AboutPage
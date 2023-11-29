import AgricService from "../components/AgricService"
import AgricBanner from "../components/AgricBanner"
import NavBarSticky from "../components/NavBarSticky"



const Agriculture = () => {
  return (
    <main>
        <NavBarSticky/>
        <AgricBanner/>
        <AgricService />
    </main>
  )
}

export default Agriculture
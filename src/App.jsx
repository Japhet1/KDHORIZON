
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/home'
import Agriculture from './page/agriculture'
import Transport from './page/transport'
import Animale from './page/animale'
import AboutPage from './page/aboutPage'

const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/Services/Agriculture' element={<Agriculture />} />
          <Route path='/Services/Transport' element={<Transport />} />
          <Route path='/Services/Animal' element={<Animale />} />
        </Routes>
        <Footer />
  
      </div>
    </BrowserRouter>
  )
}

export default App
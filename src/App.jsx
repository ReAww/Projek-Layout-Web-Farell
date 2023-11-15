// ini adalah App jsx, sebagai tempat bagian utama/core nya dari web

import { Routes, Route} from "react-router-dom"

import NavbarCompont from "./components/NavbarCompont"
// import FooterCompont from "./components/FooterCompont"

import HomePage from "./pages/HomePage"
import MarketPage from "./pages/MarketPage"
import SyaratKetenPage from "./pages/SyaratKetenPage"
import ExploitPage from "./pages/ExploitPage"
import TestimonialPage from "./pages/TestimonialPage"


export default function App () {
  return (
    <div>
        <NavbarCompont />

        <Routes> 
          {/* ini adalah router dom, untuk membuat navigasi  */}
            <Route path="/home" Component={HomePage}/>
            <Route path="/exploit" Component={ExploitPage}/>
            <Route path="/market" Component={MarketPage}/>
            <Route path="/testimonial" Component={TestimonialPage}/>
            <Route path="/syaratketen" Component={SyaratKetenPage}/>
        </Routes>

        {/* <FooterCompont />  */}
    </div>
  )
}
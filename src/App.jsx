// ini adalah App jsx, sebagai tempat bagian utama/core nya dari web

import { Routes, Route} from "react-router-dom"

import NavbarCompont from "./components/NavbarCompont"
// import FooterCompont from "./components/FooterCompont"

import HomePage from "./pages/HomePage"
import KelasPage from "./pages/KelasPage"
import TestimonialPage from "./pages/TestimonialPage"
import FaqPage from "./pages/FaqPage"
import SyaratKetenPage from "./pages/SyaratKetenPage"


export default function App () {
  return (
    <div>
        <NavbarCompont />

        <Routes> 
          {/* ini adalah router dom, untuk membuat navigasi  */}
            <Route path="/" Component={HomePage}/>
            <Route path="/kelas" Component={KelasPage}/>
            <Route path="/testimonial" Component={TestimonialPage}/>
            <Route path="/faq" Component={FaqPage}/>
            <Route path="/syaratken" Component={SyaratKetenPage}/>
        </Routes>

        {/* <FooterCompont />  */}
    </div>
  )
}
// ini adalah App jsx, sebagai tempat bagian utama/core nya dari web

import { Routes, Route } from "react-router-dom";

import NavbarCompont from "./components/NavbarCompont";
import FooterCompont from "./components/FooterCompont";

import HomePage from "./pages/HomePage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import MarketPage from "./pages/MarketPage";
import TestimonialPage from "./pages/TestimonialPage";

export default function App() {
  return (
    <div>
      <NavbarCompont />

      <Routes>
        {/* ini adalah router dom, untuk membuat navigasi  */}
        <Route path="/home" Component={HomePage} />
        <Route path="/market" Component={MarketPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/Faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKetenPage} />
      </Routes>

      <FooterCompont />
    </div>
  );
}

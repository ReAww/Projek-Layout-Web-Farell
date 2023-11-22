import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import NavbarCompont from "./components/NavbarCompont";
import FooterCompont from "./components/FooterCompont";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const FaqPage = React.lazy(() => import("./pages/FaqPage"));
const SyaratKetenPage = React.lazy(() => {import("./pages/SyaratKetenPage")});
const MarketPage = React.lazy(() => import("./pages/MarketPage"));
const TestimonialPage = React.lazy(() => import("./pages/TestimonialPage"));

// import HomePage from "./pages/HomePage";
// import FaqPage from "./pages/FaqPage";
// import SyaratKetenPage from "./pages/SyaratKetenPage";
// import MarketPage from "./pages/MarketPage";
// import TestimonialPage from "./pages/TestimonialPage";

export default function App() {
  return (
    <div>
      <NavbarCompont />

      <Suspense fallback={<div>Loading...</div>}>
        <div>
        <Routes>
          <Route path="/" Component={HomePage} />
        </Routes>
        </div>
      </Suspense>


      <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Routes>
          <Route path="/market" Component={MarketPage} />
        </Routes>
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Routes>
          <Route path="/testimonial" Component={TestimonialPage} />
        </Routes>
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Routes>
          <Route path="/Faq" Component={FaqPage} />
        </Routes>
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Routes>
          <Route path="/syaratketen" Component={SyaratKetenPage} />
        </Routes>
        </div>
      </Suspense>

      <FooterCompont />
    </div>
  );
}

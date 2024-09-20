// import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import DesignStyles from "./pages/DesignStyles/DesignStyles.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import FreeQuote from "./components/FreeQuote/FreeQuote.js";
import DesignDetail from "./pages/DesignDetail/DesignDetail.js";
import StyleDetail from "./components/StyleDetail/StyleDetail.js";
import DesignIdea from "./components/DesignIdea/DesignIdea.js";
import DesignersGallery from "./pages/DesignersGallery/DesignersGallery.jsx";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/Contact/ContactUs.jsx";


function App() {
  return (
    <>
      <div className="container-fluid" >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/designer/:id" element={<DesignersGallery />} />


          {/* <FreeQuote/> */}
          {/* <DesignDetail /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/design/:slug" element={<DesignIdea />} />
          <Route path="/free-quote" element={<FreeQuote />} />
          <Route path="/design-detail/:id" element={<DesignDetail />} />
        </Routes>
        <Footer />
        {/* <HomePage /> */}
        <Routes>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/" element={<StyleDetail />} />

        </Routes>
        {/* <DesignStyles/> */}
        <Footer />
      </div >
    </>
  )
}

export default App;

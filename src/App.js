// import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import FreeQuote from "./components/FreeQuote/FreeQuote.js";
import DesignDetail from "./pages/DesignDetail/DesignDetail.js";
import { Routes, Route } from "react-router-dom";
import DesignIdea from "./components/DesignIdea/DesignIdea.js";
import Login from "./components/Login/Login.js";

import DesignersGallery from "./pages/DesignersGallery/DesignersGallery.jsx";
import React from "react";
import ContactUs from "./components/Contact/ContactUs.jsx";
import AboutUs from './components/About/AboutUs.jsx'

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
          <Route path="/designer/:id" element={<DesignersGallery />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

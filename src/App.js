// import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import DesignStyles from "./pages/DesignStyles/DesignStyles.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import FreeQuote from "./components/FreeQuote/FreeQuote.js";
import DesignDetail from "./pages/DesignDetail/DesignDetail.js";
import StyleDetail from "./components/StyleDetail/StyleDetail.js";
import { Routes, Route } from "react-router-dom";
import DesignIdea from "./components/DesignIdea/DesignIdea.js";
import DesignersGallery from "./pages/DesignersGallery/DesignersGallery.jsx";
import React from "react";

function App() {
  return (
    < div className="container-fluid" >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/designer/:id" element={<DesignersGallery />} />


        {/* <FreeQuote/> */}
        {/* <DesignDetail /> */}
        {/* <HomePage /> */}
        {/* <StyleDetail/> */}
        {/* <DesignStyles /> */}
        {/* <DesignIdea/> */}
      </Routes>
      <Footer />
    </div >

  );
}

export default App;

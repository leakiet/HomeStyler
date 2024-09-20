// import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import DesignStyles from "./pages/DesignStyles/DesignStyles.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import FreeQuote from "./components/FreeQuote/FreeQuote.js";
import StyleDetail from "./components/StyleDetail/StyleDetail.js";
import { Routes,Route } from "react-router-dom";
import ContactUs from "./components/Contact/ContactUs.jsx";


function App() {
  return (
    <>
      {/* <div className="container-fluid"> */}
      <div className="container-fluid">
        <Header />
        {/* <FreeQuote/> */}
        {/* <HomePage /> */}
        <Routes>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/" element={<StyleDetail/>}/>
        
        </Routes>
        {/* <DesignStyles/> */}
        <Footer />
      </div >
    </>
  )
}

export default App;

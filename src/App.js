// import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import DesignStyles from "./pages/DesignStyles/DesignStyles.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import FreeQuote from "./components/FreeQuote/FreeQuote.js";
import StyleDetail from "./components/StyleDetail/StyleDetail.js";
import { Routes } from "react-router-dom";


function App() {
  return (
    <>
      {/* <div className="container-fluid"> */}
      <div className="container-fluid">
        <Header />
        {/* <FreeQuote/> */}
        <HomePage />
        <StyleDetail/>
        <DesignStyles/>
        <Footer />
      </div >
    </>
  )
}

export default App;

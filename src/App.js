// import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import DesignStyles from "./pages/DesignStyles/DesignStyles.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import FreeQuote from "./components/FreeQuote/FreeQuote.js";
import DesignDetail from "./pages/DesignDetail/DesignDetail.js";
import StyleDetail from "./components/StyleDetail/StyleDetail.js";
import { Routes,Route } from "react-router-dom";
import DesignIdea from "./components/DesignIdea/DesignIdea.js";
import { useState } from "react";
import Login from "./components/Login/Login.js";


function App() {
  const [userInfo,setUserInfo] = useState({});

  return (
    <>
      {/* <div className="container-fluid"> */}
      <div className="container-fluid">
        <Header userInfo = {userInfo} setUserInfo = {setUserInfo}/>
        {/* <FreeQuote/> */}
        {/* <DesignDetail /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list-design" element={<DesignIdea/>} />
          <Route path="/free-quote" element={<FreeQuote/>} />
          <Route path="/design-detail/:id" element={<DesignDetail />} />
          <Route path="/login" element={<Login  setUserInfo = {setUserInfo}/>} />
        </Routes>
        
        <Footer />
      </div >
    </>
  )
}

export default App;

// import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import DesignStyles from "./pages/DesignStyles/DesignStyles.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import FreeQuote from "./components/FreeQuote/FreeQuote.js";
import DesignDetail from "./pages/DesignDetail/DesignDetail.js";
import StyleDetail from "./components/StyleDetail/StyleDetail.js";
import { Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import './App.css'
import ProductsList from "./pages/ProductsList/ProductsList.jsx";
import ProductsDetails from "./pages/ProductDetails/ProductDetails.jsx";


function App() {
  return (
    <>
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path='/' element= {
          <HomePage />
           } />
        <Route path='/products' element={
          <ProductsList /> 
          } />
        <Route path="/products/1" element={
          <ProductsDetails />
          } />

      </Routes>
      <Footer />
    </div >
    </>
  )
}

export default App

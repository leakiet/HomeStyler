import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductsList from "./pages/ProductsList/ProductsList.jsx";
import CartList from "./pages/Cart/CartList.jsx";
import FreeQuote from "./components/FreeQuote/FreeQuote.js";
import DesignDetail from "./pages/DesignDetail/DesignDetail.js";
import DesignIdea from "./components/DesignIdea/DesignIdea.js";
import React from "react";
import ContactUs from "./components/Contact/ContactUs.jsx";
import AboutUs from "./components/About/AboutUs.jsx";
import ProductDetail from "./pages/ProductDetails/ProductDetail.jsx";
import CheckOut from "./pages/CheckOut/CheckOut.jsx";
import DesignersCard from "./components/DesignersList/DesignersCard.js";
import Profile from "./pages/Profile/Profile.jsx";
import SiteMap from "./pages/Others/SiteMap/SiteMap.jsx";
import DesignersHome from "./components/DesignerHome/DesignerHome.js";
import DesignersGallery from "./pages/DesignersGallery/DesignersGallery.jsx";
import Login from "./pages/Login/Login.js";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:idPro" element={<ProductDetail />} />
          <Route path="/cart" element={<CartList />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/list-design" element={<DesignIdea />} />
          <Route path="/free-quote" element={<FreeQuote />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/site-map" element={<SiteMap />} />
          <Route path="/designer/:id" element={<DesignersGallery />} />
          <Route path="/design/:slug" element={<DesignIdea />} />
          <Route path="/designer-list/:slug" element={<DesignersCard />} />
          <Route path="/design-detail/:id" element={<DesignDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductsList from "./pages/ProductsList/ProductsList.jsx";
import CartList from "./pages/Cart/CartList.jsx";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Login/Signup.js";
import Profile from "./pages/ProfilePage/Profile.js";
import Swal from "sweetalert2";
import Pagination from "./components/Pagination/Pagination.js";
import FreeQuote from "./components/FreeQuote/FreeQuote.js";
import DesignDetail from "./pages/DesignDetail/DesignDetail.js";
import DesignIdea from "./components/DesignIdea/DesignIdea.js";
import DesignersGallery from "./pages/DesignersGallery/DesignersGallery.jsx";
import React from "react";
import ContactUs from "./components/Contact/ContactUs.jsx";
import AboutUs from "./components/About/AboutUs.jsx";
import ProductInCategory from "./pages/ProductsList/ProductInCategory/ProductInCategory.jsx";
import ProductInSubCategory from "./pages/ProductsList/ProductInCategory/ProductInSubCategory.jsx";
import ProductDetail from "./pages/ProductDetails/ProductDetail.jsx";
import CheckOut from "./pages/CheckOut/CheckOut.jsx";

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/userpage" element={<Profile />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/list-design" element={<DesignIdea />} />
          <Route path="/free-quote" element={<FreeQuote />} />
          <Route path="/design-detail/:id" element={<DesignDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
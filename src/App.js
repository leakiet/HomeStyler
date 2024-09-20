// import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import FreeQuote from "./components/FreeQuote/FreeQuote.js";
import DesignDetail from "./pages/DesignDetail/DesignDetail.js";
import DesignIdea from "./components/DesignIdea/DesignIdea.js";
import Login from "./components/Login/Login.js";

import DesignersGallery from "./pages/DesignersGallery/DesignersGallery.jsx";
import React from "react";
import ContactUs from "./components/Contact/ContactUs.jsx";
import AboutUs from './components/About/AboutUs.jsx'
import StyleDetail from "./components/StyleDetail/StyleDetail.js";
import ProductsList from "./pages/ProductsList/ProductsList.jsx";
import ProductsDetails from "./pages/ProductDetails/ProductDetails.jsx";
import CartList from "./pages/Cart/CartList.jsx";
import Signup from './pages/Login/Signup.js';
import Profile from './pages/ProfilePage/Profile.js';
import Swal from 'sweetalert2';
import Pagination from './components/Pagination/Pagination.js';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import DesignersCard from "./components/DesignersList/DesignersCard.js";


function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  // const [searchProducts, setSearchProducts] = useState([]);

  const [searchValue, setSearchValue] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(9);

  const [carts, setCarts] = useState(() => JSON.parse(localStorage.getItem('carts')) || []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json = await fetch('../data/products.json');
        const data = await json.json();

        setProducts(data);
        setFilterProducts(data);
        // setSearchProducts(data);
      } catch (error) {
        console.log('error reading json');
      }
    };
    fetchData();
  }, []);

  const handleAddCarts = (product) => {
    const currentProduct = carts.find(item => item.id === product.id);
    if (currentProduct) {
      const updatedCart = carts.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      setCarts(updatedCart);
    } else {
      setCarts([...carts, { ...product, quantity: 1 }]);
    }
    // alert('Succesully add to cart')
  }

  const handleDeleteCart = (id) => {
    const updatedCart = carts.map(item =>
      item.id === id
        ? { ...item, quantity: 0 }
        : item
    );
    const filterCart = updatedCart.filter(item => item.quantity > 0);
    setCarts(filterCart);
  }

  const handleQuantityChange = (action, id) => {
    const updatedCartList = carts.map((product) => {
      if (product.id === id) {
        let newQuantity;
        if (action === 'increment') {
          newQuantity = product.quantity + 1;
        } else if (action === 'decrement') {
          newQuantity = product.quantity - 1;
        }
        if (newQuantity > 0 && newQuantity <= 10) {
          return { ...product, quantity: newQuantity };
        } else {
          return product;
        }
      } else {
        return product;
      }
    });
    setCarts(updatedCartList);
  };

  const calculateTotalProduct = (carts) => {
    let totalProduct = 0;
    for (const product of carts) {
      totalProduct += product.quantity;
    }
    return totalProduct;
  }


  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(carts));
  }, [carts]);
  //update cart change
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'carts') {
        setCarts(JSON.parse(event.newValue));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const checkLogin = (checkUser) => {
    const savedUser = JSON.parse(localStorage.getItem('user-data')) || [];
    const findUser = (savedUser && savedUser.find(u => u.username === checkUser.loginUsername && u.password === checkUser.loginPassword))
    console.log(savedUser);
    if (findUser) {
      localStorage.setItem('username', JSON.stringify(checkUser));
      Swal.fire({
        title: "Login successful",
        text: "Welcome back!",
        icon: "success"
      })
      navigate('/userpage')
    } else {
      // setErrorLogin(true);
      Swal.fire({
        title: 'Login Fail',
        text: 'Please input the correct user',
        icon: 'error',
        confirmButtonText: 'Close'
      })
    }
  };

  const handleMinPriceChange = (event) => {
    const newMinPrice = parseFloat(event.target.value);
    if (!isNaN(newMinPrice) && newMinPrice <= maxPrice) {
      setMinPrice(newMinPrice);
    }
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = parseFloat(event.target.value);
    if (!isNaN(newMaxPrice) && newMaxPrice >= minPrice) {
      setMaxPrice(newMaxPrice);
    }
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const searchedProducts = products.filter(d => {
      const catMatch = d.cat2 && d.cat2.toLowerCase().includes(searchValue.toLowerCase());
      const priceMatch =
        (minPrice === '' || d.price >= parseFloat(minPrice)) &&
        (maxPrice === '' || d.price <= parseFloat(maxPrice));
      return catMatch && priceMatch;
    })
    setFilterProducts(searchedProducts);
  }, [searchValue, minPrice, maxPrice]);

  //Get Current Products
  const indexOfLastProduct = (currentPage * productPerPage);
  const indexOfFirstProduct = (indexOfLastProduct - productPerPage);
  const currentProducts = filterProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="container-fluid" >
      <Header itemsCartCount={calculateTotalProduct(carts)} />
        <Routes>
          <Route path='/products' element={
            <>
              <ProductsList products={currentProducts} addCart={handleAddCarts}
                searchValue={searchValue} onSearch={handleSearch} minPrice={minPrice} maxPrice={maxPrice} onMinPrice={handleMinPriceChange} onMaxPrice={handleMaxPriceChange} />
              <Pagination productPerPage={productPerPage}
                totalProducts={filterProducts.length} paginate={paginate} currentPage={currentPage} />
            </>
          } />
          <Route path="/products/:id" element={
            <ProductsDetails addCart={handleAddCarts} />
          } />
          <Route path='/cart' element={
            <CartList carts={carts} deleteCart={handleDeleteCart} onQuantityChange={handleQuantityChange} />
          } />
          <Route path='/login' element={
            <Login checkLogin={checkLogin} />
          } />
          <Route path='/signup' element={
            <Signup />
          } />
          <Route path='/userpage' element={
            <Profile />
          } />
          <Route path="/" element={<HomePage />} />
          <Route path="/design/:slug" element={<DesignIdea />} />
          <Route path="/free-quote" element={<FreeQuote />} />
          <Route path="/design-detail/:id" element={<DesignDetail />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/designer/:id" element={<DesignersGallery />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/" element={<StyleDetail />} />
        </Routes>
        <Footer />
      </div >
    </>
  );
}

export default App;

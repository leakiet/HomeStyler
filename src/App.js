import './App.css'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import HomePage from "./pages/HomePage/HomePage.jsx";
import FreeQuote from "./components/FreeQuote/FreeQuote.js";
import DesignDetail from "./pages/DesignDetail/DesignDetail.js";
import StyleDetail from "./components/StyleDetail/StyleDetail.js";
import DesignIdea from "./components/DesignIdea/DesignIdea.js";
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductsList from "./pages/ProductsList/ProductsList.jsx";
import ProductsDetails from "./pages/ProductDetails/ProductDetails.jsx";
import CartList from "./pages/Cart/CartList.jsx";
import Login from './pages/Login/Login.js';
import Signup from './pages/Login/Signup.js';
import Profile from './pages/ProfilePage/Profile.js';
import Swal from 'sweetalert2';



function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);

  const [carts, setCarts] = useState(() => JSON.parse(localStorage.getItem('carts')) || []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json = await fetch('../data/products.json');
        const data = await json.json();

        setProducts(data);
        setFilterProducts(data);
        setSearchProducts(data);
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
      navigate('/cart')
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



  return (
    <>
      <div className="container-fluid">
        <Header />
        {/* <FreeQuote/> */}
        {/* <DesignDetail /> */}

        <Header itemsCartCount={calculateTotalProduct(carts)} />
        <Routes>
          <Route path='/' element={
            <HomePage />
          } />
          <Route path='/products' element={
            <ProductsList products={products} addCart={handleAddCarts} />
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
          <Route path="/list-design" element={<DesignIdea />} />
          <Route path="/free-quote" element={<FreeQuote />} />
          <Route path="/design-detail/:id" element={<DesignDetail />} />

        </Routes>
        <Footer />
      </div >
    </>
  )
}

export default App

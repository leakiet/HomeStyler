import React, { useContext, useEffect, useState } from 'react'
import './ProductList.css'
import Banner from '../../components/Banner/Banner'
import './ProductList.css'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cate1, setCate1] = useState(products);
  const [searchName, setSearchName] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const {setCart}  = useContext(DataContext)
  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setFilteredProducts(data)
        const uniqueCate1 = [...new Set(data.map(item => item.cate1))];
        setCate1(uniqueCate1)
      })
      .catch(err => console.log(err))
  }, [])
  function handleReadMore(item) {
    navigate(`/products/${item.id}`, { state: item })
  }

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const filterProducts = () => {
    let result = products;

    // Lọc theo khoảng giá
    if (selectedPriceRange) {
      if (selectedPriceRange === "under50") {
        result = result.filter(product => product.price < 50);
      } else if (selectedPriceRange === "between50and200") {
        result = result.filter(product => product.price >= 50 && product.price <= 200);
      } else if (selectedPriceRange === "over100") {
        result = result.filter(product => product.price > 100);
      }
    }

    // Lọc theo tên sản phẩm
    if (searchName) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
  // Lọc theo danh mục
  if (selectedCategory) {
    result = result.filter(product => product.cate1 === selectedCategory);
  }
    setFilteredProducts(result);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  useEffect(() => {
    filterProducts();
  }, [searchName, selectedPriceRange,selectedCategory])

  const addToCart = (product) => {
    setCart(prevCart => {
      const itemInCart = prevCart.find(item => item.id === product.id);
      if (itemInCart) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };


  return (
    <>
      <div className='row'>
        <Banner />
      </div>
    <div className='container'>
    <div className="row">
        <div className="col-md-3 col-lg-3 col-sm-12 mb-3 container-filter">
          <h5>Filter</h5>
          <form>
            <div className="form-group">
              <label for="categoryFilter">Categories </label>
              <select className="form-control" id="categoryFilter" onChange={handleCategoryChange}>
                <option value="">Tất cả</option>
                {cate1.length > 0 && cate1.map((item, index) => {
                  return (
                    <option key={index} value={item}>{item}</option>
                  )
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Select by Price</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" id="price1"
                  name='price' value="under50" onChange={handlePriceRangeChange} />
                <label className="form-check-label" for="price1">
                  Under $50
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" id="price2"
                  name='price' value="between50and200" onChange={handlePriceRangeChange} />
                <label className="form-check-label" for="price2">
                  $50 - $200
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" id="price3"
                  name='price' value="over200" onChange={handlePriceRangeChange} />
                <label className="form-check-label" for="price3">
                  Over $200
                </label>
              </div>
            </div>

          </form>
        </div>
        <div className="col-md-9 col-lg-9 col-sm-12">
          <div className='search-field'>
            <h5 className='list-title'>Product List</h5>
            <div className="search-container">
              <input
                type="text"
                className="form-control search-input"
                onChange={handleSearchNameChange}
                placeholder="Search for products..."
              />
              <i className="fas fa-search search-icon"></i>
            </div>
          </div>

          <div className="row">
            {filteredProducts.length > 0 && filteredProducts.map((item, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card mb-4">
                    <i className="fa-solid fa-bookmark favorite-icon"></i>
                    <img src={item.image[0]} className="card-img-top" alt="Sản phẩm 3" />
                    <div className="card-body">
                      <h6 className="card-title">{item.name}</h6>
                      <p className="card-text">{item.price}$</p>
                      <div className="card-buttons">
                        <button className="btn btn-addtocart" onClick={() => addToCart(item)}>Add Card</button>
                        <button className="btn btn-readmore" onClick={() => handleReadMore(item)}>Read more</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductsList

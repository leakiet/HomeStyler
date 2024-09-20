import React, { useContext, useEffect, useState } from 'react'
import './ProductList.css'
import Banner from '../../components/Banner/Banner'
import './ProductList.css'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import ProductCard from './ProductCard';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cate1, setCate1] = useState(products);
  const [searchName, setSearchName] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const { setWishList, userInfo } = useContext(DataContext)

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
  }, [searchName, selectedPriceRange, selectedCategory])




  const toggleWishlist = (product) => {
    if (userInfo != null) {
      setWishList((prevWishlist) => {
        const isProductInWishlist = prevWishlist.some(item => item.id === product.id);
        
        if (isProductInWishlist) {
          return prevWishlist.filter(item => item.id !== product.id);
        } else {
          return [...prevWishlist, product];
        }
      });
    } else {
      let data = {
           type: "wproduct"
      }
      navigate("/login", { state: data });
    }

  };
  
  return (
    <>
      <div className='row'>
        <Banner />
      </div>
      <div className='container'>
        <div class="row">
          <div class="col-md-3 col-lg-3 col-sm-12 mb-3 container-filter">
            <h5>Filter</h5>
            <form>
              <div class="form-group">
                <label for="categoryFilter">Categories </label>
                <select class="form-control" id="categoryFilter" onChange={handleCategoryChange}>
                  <option value="">Tất cả</option>
                  {cate1.length > 0 && cate1.map((item, index) => {
                    return (
                      <option key={index} value={item}>{item}</option>
                    )
                  })}
                </select>
              </div>
              <div class="form-group">
                <label>Select by Price</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="price1"
                    name='price' value="under50" onChange={handlePriceRangeChange} />
                  <label class="form-check-label" for="price1">
                    Under $50
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="price2"
                    name='price' value="between50and200" onChange={handlePriceRangeChange} />
                  <label class="form-check-label" for="price2">
                    $50 - $200
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="price3"
                    name='price' value="over200" onChange={handlePriceRangeChange} />
                  <label class="form-check-label" for="price3">
                    Over $200
                  </label>
                </div>
              </div>

            </form>
          </div>
          <div class="col-md-9 col-lg-9 col-sm-12">
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

            <div class="row">
              {filteredProducts.length > 0 && filteredProducts.map((item, index) => {
                return (
                  <ProductCard key={index} item={item}
                  onToggleWishlist={toggleWishlist}  />
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

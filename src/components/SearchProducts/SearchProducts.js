import './Search.css'
import './ProductList.css'
import BannerProduct from '../Assets/Banner3.webp'

function Search({ value, onSearch, minPrice, maxPrice, onMinPrice, onMaxPrice }) {

    return (
        <div>
                <div className='search'>
                    <select type="text" value={value} onChange={onSearch}>
                        <option value="">All Products</option>
                        <option value="Bag">Bag</option>
                        <option value="Jewelry">Jewelry</option>
                        <option value="Sunglasses">Sunglasses</option>
                        <option value="Long Dress">Ao Dai Viet Nam</option>
                        <option value="Casual wear">Casual Wear</option>
                        <option value="Occasion wear">Occasion Wear</option>
                        <option value="Formal wear">Formal Wear</option>
                    </select>

                    {/* <input type="number" placeholder="Min price" value={minPrice} onChange={onMinPrice}/>
                    <input type="number" placeholder="Max price" value={maxPrice} onChange={onMaxPrice}/> */}

                    <select type="number" placeholder="Min price" value={minPrice} onChange={onMinPrice}>
                        <option value="1">Price From</option>
                        <option value="0">0</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                    </select>

                    <select type="number" placeholder="Max price" value={maxPrice} onChange={onMaxPrice}>
                        <option value="199">Price To</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Search;
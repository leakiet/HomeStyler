import React from 'react';
import '../AppBar.css';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <div>
            <div className="dropdown btnDropdown">
                <Link className="dropdown-toggle" to="/products"  aria-expanded="false">
                    Products
                </Link>
                <ul className="dropdown-menu">
                    <li className="dropdown dropend">
                        <Link className="dropdown-item" to="/category/bathroom" aria-haspopup="true" aria-expanded="false">Bathroom</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/sub-category/vanities-and-cabinets">Vanities and Cabinets</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/showers-and-bathtubs">Showers and Bathtubs</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/toilets-and-bidets">Toilets and Bidets</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/bathroom-sinks">Bathroom Sinks</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/mirrors-and-medicine-cabinets">Mirrors and Medicine Cabinets</Link></li>
                        </ul>
                    </li>

                    <li className="dropdown dropend">
                        <Link className="dropdown-item" to="/category/decor" aria-haspopup="true" aria-expanded="false">Decor</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/sub-category/rugs-and-carpets">Rugs and Carpets</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/curtains-and-blinds">Curtains and Blinds</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/wall-art-and-mirrors">Wall Art and Mirrors</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/cushions-and-throws">Cushions and Throws</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/vases-and-plant-pots">Vases and Plant Pots</Link></li>
                        </ul>
                    </li>

                    <li className="dropdown dropend">
                        <Link className="dropdown-item" to="/category/furniture" aria-haspopup="true" aria-expanded="false">Furniture</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/sub-category/sofas-and-couches">Sofas and Couches</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/chairs-and-recliners">Chairs and Recliners</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/tables">Tables</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/beds-and-mattresses">Beds and Mattresses</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/storage">Storage</Link></li>
                        </ul>
                    </li>

                    <li className="dropdown dropend">
                        <Link className="dropdown-item" to="/category/kitchens" aria-haspopup="true" aria-expanded="false">Kitchens</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/sub-category/cabinets-and-pantries">Cabinets and Pantries</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/countertops">Countertops</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/sinks-and-faucets">Sinks and Faucets</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/kitchen-islands-and-carts">Kitchen Islands and Carts</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/backsplashes">Backsplashes</Link></li>
                        </ul>
                    </li>

                    <li className="dropdown dropend">
                        <Link className="dropdown-item" to="/category/lighting" aria-haspopup="true" aria-expanded="false">Lighting</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/sub-category/ceiling-lights">Ceiling Lights</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/wall-lights">Wall Lights</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/floor-lamps">Floor Lamps</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/table-lamps">Table Lamps</Link></li>
                            <li><Link className="dropdown-item" to="/sub-category/outdoor-lighting">Outdoor Lighting</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Products;

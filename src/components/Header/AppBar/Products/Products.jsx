import React from 'react';
import '../AppBar.css';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <div>
            <div className="dropdown btnDropdown">
                <Link className="dropdown-toggle" to="/products" role="button" aria-expanded="false">
                    Products
                </Link>
                {/* <ul className="dropdown-menu">
                    <li className="dropdown dropend">
                        <Link className="dropdown-item dropdown-toggle" to="/products/bathroom" aria-haspopup="true" aria-expanded="false">Bathroom</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/products/bathroom/vanities-and-cabinets">Vanities and Cabinets</Link></li>
                            <li><Link className="dropdown-item" to="/products/bathroom/showers-and-bathtubs">Showers and Bathtubs</Link></li>
                            <li><Link className="dropdown-item" to="/products/bathroom/toilets-and-bidets">Toilets and Bidets</Link></li>
                            <li><Link className="dropdown-item" to="/products/bathroom/bathroom-sinks">Bathroom Sinks</Link></li>
                            <li><Link className="dropdown-item" to="/products/bathroom/mirrors-and-medicine-cabinets">Mirrors and Medicine Cabinets</Link></li>
                        </ul>
                    </li>

                    <li className="dropdown dropend">
                        <Link className="dropdown-item dropdown-toggle" to="/products/decor" aria-haspopup="true" aria-expanded="false">Decor</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/products/decor/rugs-and-carpets">Rugs and Carpets</Link></li>
                            <li><Link className="dropdown-item" to="/products/decor/curtains-and-blinds">Curtains and Blinds</Link></li>
                            <li><Link className="dropdown-item" to="/products/decor/wall-art-and-mirrors">Wall Art and Mirrors</Link></li>
                            <li><Link className="dropdown-item" to="/products/decor/cushions-and-throws">Cushions and Throws</Link></li>
                            <li><Link className="dropdown-item" to="/products/decor/vases-and-plant-pots">Vases and Plant Pots</Link></li>
                        </ul>
                    </li>

                    <li className="dropdown dropend">
                        <Link className="dropdown-item dropdown-toggle" to="/products/furniture" aria-haspopup="true" aria-expanded="false">Furniture</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/products/furniture/sofas-and-couches">Sofas and Couches</Link></li>
                            <li><Link className="dropdown-item" to="/products/furniture/chairs-and-recliners">Chairs and Recliners</Link></li>
                            <li><Link className="dropdown-item" to="/products/furniture/tables">Tables</Link></li>
                            <li><Link className="dropdown-item" to="/products/furniture/beds-and-mattresses">Beds and Mattresses</Link></li>
                            <li><Link className="dropdown-item" to="/products/furniture/storage">Storage</Link></li>
                        </ul>
                    </li>

                    <li className="dropdown dropend">
                        <Link className="dropdown-item dropdown-toggle" to="/products/kitchens" aria-haspopup="true" aria-expanded="false">Kitchens</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/products/kitchens/cabinets-and-pantries">Cabinets and Pantries</Link></li>
                            <li><Link className="dropdown-item" to="/products/kitchens/countertops">Countertops</Link></li>
                            <li><Link className="dropdown-item" to="/products/kitchens/sinks-and-faucets">Sinks and Faucets</Link></li>
                            <li><Link className="dropdown-item" to="/products/kitchens/kitchen-islands-and-carts">Kitchen Islands and Carts</Link></li>
                            <li><Link className="dropdown-item" to="/products/kitchens/backsplashes">Backsplashes</Link></li>
                        </ul>
                    </li>

                    <li className="dropdown dropend">
                        <Link className="dropdown-item dropdown-toggle" to="/products/lighting" aria-haspopup="true" aria-expanded="false">Lighting</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/products/lighting/ceiling-lights">Ceiling Lights</Link></li>
                            <li><Link className="dropdown-item" to="/products/lighting/wall-lights">Wall Lights</Link></li>
                            <li><Link className="dropdown-item" to="/products/lighting/floor-lamps">Floor Lamps</Link></li>
                            <li><Link className="dropdown-item" to="/products/lighting/table-lamps">Table Lamps</Link></li>
                            <li><Link className="dropdown-item" to="/products/lighting/outdoor-lighting">Outdoor Lighting</Link></li>
                        </ul>
                    </li>
                </ul> */}
            </div>
        </div>
    );
}

export default Products;

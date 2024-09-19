import React from 'react'
import '../AppBar.css'
import Furniture from './Furniture/Furniture'
import Kitchen from './Kitchen/Kitchen'
import Decor from './Decor/Decor'
import Bathroom from './Bathroom/Bathroom'
import Lighting from './Lighting/Lighting'

function Products() {
    return (
        <div>
            <div className="dropdown btnDropdown">
                <a className="dropdown-toggle" data-bs-auto-close='outside' href="#"
                    role="button" data-bs-toggle="dropdown" aria-expanded="false"> Products </a>
                <ul class="dropdown-menu">
                    <Furniture />
                    <Kitchen />
                    <Lighting />
                    <Decor />
                    <Bathroom />
                </ul>
            </div>
        </div>
    )
}

export default Products

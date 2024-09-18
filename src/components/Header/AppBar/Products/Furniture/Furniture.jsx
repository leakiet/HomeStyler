import React from 'react'

function Furniture() {
    return (
        <>
            <li class="dropdown dropend">
                <a class="dropdown-item dropdown-toggle" href="#"
                    data-bs-auto-close='outside'
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Furniture</a>
                <ul class="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Sofas and Couches</a></li>
                    <li><a className="dropdown-item" href="#">Chairs and Recliners</a></li>
                    <li><a className="dropdown-item" href="#">Tables (Dining, Coffee tables, or Side tables)</a></li>
                    <li><a className="dropdown-item" href="#">Beds and Mattresses</a></li>
                    <li><a className="dropdown-item" href="#">Storage (Cabinets, Shelves, or Dressers)</a></li>

                    {/* <li class="dropdown dropend">
                                <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">Submenu 001 001</a>
                                <ul class="dropdown-menu" >
                                    <li><a class="dropdown-item" href="#">Eat</a></li>
                                    <li><a class="dropdown-item" href="#">More</a></li>
                                    <li><a class="dropdown-item" href="#">Beans</a></li>
                                    <li><a class="dropdown-item" href="#">On Toast</a></li>
                                </ul>
                            </li> */}
                </ul>
            </li>
        </>
    )
}

export default Furniture

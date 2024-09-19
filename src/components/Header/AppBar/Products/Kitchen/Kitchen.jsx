import React from 'react'

function Kitchen() {
  return (
    <>
    <li className="dropdown dropend">
        <a className="dropdown-item dropdown-toggle" href="#"
            data-bs-auto-close='outside'
            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kitchen</a>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Cabinets and Pantries</a></li>
            <li><a className="dropdown-item" href="#">Countertops</a></li>
            <li><a className="dropdown-item" href="#">Sinks and Faucets</a></li>
            <li><a className="dropdown-item" href="#">Kitchen Islands and Carts</a></li>
            <li><a className="dropdown-item" href="#">Backsplashes</a></li>
        </ul>
    </li>
</>
  )
}

export default Kitchen

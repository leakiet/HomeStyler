import React from 'react'

function Decor() {
  return (
    <>
    <li className="dropdown dropend">
        <a className="dropdown-item dropdown-toggle" href="#"
            data-bs-auto-close='outside'
            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Decor</a>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Rugs and Carpets</a></li>
            <li><a className="dropdown-item" href="#">Curtains and Blinds</a></li>
            <li><a className="dropdown-item" href="#">Wall Art and Mirrors</a></li>
            <li><a className="dropdown-item" href="#">Cushions and Throws</a></li>
            <li><a className="dropdown-item" href="#">Vases and Plant Pots</a></li>
        </ul>
    </li>
</>
  )
}

export default Decor

import React from 'react'

function Lighting() {
  return (
    <>
    <li class="dropdown dropend">
        <a class="dropdown-item dropdown-toggle" href="#"
            data-bs-auto-close='outside'
            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Lightning</a>
        <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="#">Ceiling Lights</a></li>
            <li><a className="dropdown-item" href="#">Wall Lights</a></li>
            <li><a className="dropdown-item" href="#">Floor Lamps</a></li>
            <li><a className="dropdown-item" href="#">Table Lamps</a></li>
            <li><a className="dropdown-item" href="#">Outdoor Lighting</a></li>
        </ul>
    </li>
</>
  )
}

export default Lighting

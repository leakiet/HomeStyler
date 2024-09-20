import React from 'react'
import '../AppBar.css'
import { Link } from 'react-router-dom'

function DesignersGallary() {
  return (
    <div className="dropdown btnDropdown">
            <a className="dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Designers Gallary
            </a>

            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="">Jackson A</Link></li>
                <li><Link className="dropdown-item" to="">Linda B</Link></li>
                <li><Link className="dropdown-item" to="">Rio C</Link></li>
                <li><Link className="dropdown-item" to="">Rio C</Link></li>
            </ul>
        </div>
  )
}

export default DesignersGallary

import React from 'react'
import '../AppBar.css'

function DesignersGallary() {
  return (
    <div className="dropdown btnDropdown">
            <a className="dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Designers Gallary
            </a>

            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Jackson A</a></li>
                <li><a className="dropdown-item" href="#">Linda B</a></li>
                <li><a className="dropdown-item" href="#">Rio C</a></li>
            </ul>
        </div>
  )
}

export default DesignersGallary

import React from 'react'
import '../AppBar.css'

function DesignStyles() {
    return (
        <div className="dropdown btnDropdown">
            <a className="dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Design Styles
            </a>

            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Living Rome</a></li>
                <li><a className="dropdown-item" href="#">Kitchen</a></li>
                <li><a className="dropdown-item" href="#">Bedroom</a></li>
                <li><a className="dropdown-item" href="#">Bathroom</a></li>
                <li><a className="dropdown-item" href="#">Contemporary Styles</a></li>
                <li><a className="dropdown-item" href="#">Elegant Look Styles</a></li>
            </ul>
        </div>
    )
}

export default DesignStyles

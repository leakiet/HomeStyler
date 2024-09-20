import React from 'react'
import '../AppBar.css'
import { Link } from 'react-router-dom';


function DesignStyles() {
    return (
        <div className="dropdown btnDropdown">
            <a className="dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Design Styles
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/design/living-room">Living Room</Link></li>
                <li><Link className="dropdown-item" to="/design/kitchen">Kitchen</Link></li>
                <li><Link className="dropdown-item" to="/design/bedroom">Bedroom</Link></li>
                <li><Link className="dropdown-item" to="/design/bathroom">Bathroom</Link></li>
                <li><Link className="dropdown-item" to="/design/contemporary-styles">Contemporary Styles</Link></li>
                <li><Link className="dropdown-item" to="/design/elegant-look-styles">Elegant Look Styles</Link></li>
            </ul>
        </div>
    )
}

export default DesignStyles

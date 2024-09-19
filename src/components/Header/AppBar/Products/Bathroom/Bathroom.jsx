import React from 'react'

function Bathroom() {
    return (
        <>
            <li class="dropdown dropend">
                <a class="dropdown-item dropdown-toggle" href="#"
                    data-bs-auto-close='outside'
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bathroom</a>
                <ul class="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Vanities and Cabinets </a></li>
                    <li><a className="dropdown-item" href="#">Showers and Bathtubs</a></li>
                    <li><a className="dropdown-item" href="#">Toilets and Bidets</a></li>
                    <li><a className="dropdown-item" href="#">Bathroom Sinks</a></li>
                    <li><a className="dropdown-item" href="#">Mirrors and Medicine Cabinets</a></li>
                </ul>
            </li>
        </>
    )
}

export default Bathroom

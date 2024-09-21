import React from 'react'
import '../AppBar.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';


function DesignerssGallary() {
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/designer.json");
        const data = await response.json();
        setDesigners(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="dropdown btnDropdown">
      <a className="dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Designers Gallary
      </a>
      <ul className="dropdown-menu">
        {designers.length > 0 && designers.map((designer, index) => (
          <li key={index}>
            <Link className="dropdown-item" to={'/designer-list/' + designer.name.toLowerCase().replace(' ', '-')}>{designer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DesignerssGallary

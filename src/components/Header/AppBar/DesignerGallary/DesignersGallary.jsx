import React from 'react'
import '../AppBar.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';


function DesignerssGallary() {
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/designers.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDesigners(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log('designer', designers);


  return (
    <div className="dropdown btnDropdown">
      <a className="dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Designers Gallary
      </a>
      <ul className="dropdown-menu">
        {designers.length > 0 && designers.map((designer, index) => (
          <li>
            <Link className="dropdown-item" to={'/' + designer.name}>{designer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DesignerssGallary

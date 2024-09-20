import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './designIdea.css';

function DesignIdea() {
  const [designStyles, setDesignStyles] = useState([]);
  const [filteredDesigns, setFilteredDesigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const params = useParams();
  const slug = params.slug;

  // Fetch data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/roomtype.json");
        const data = await response.json();
        setDesignStyles(data);
        setFilteredDesigns(data); // Set filtered data initially to the full dataset
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    const filtered = designStyles.filter((designStyle) =>
      designStyle.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredDesigns(filtered);
  };

  return (
    <div className='container-designidea'>
      <div className='designidea-title'>
        <div className="input-group">
          <select className="selectpicker">
            <option>Mustard</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </select>
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="button" className="btn btn-outline-danger">Search</button>
        </div>
      </div>
      <div className='container-designidea-card'>
        {filteredDesigns.length > 0 ? (
          filteredDesigns.map((designStyle, index) => (
            <div className='di-card' key={index}>
              <Link to={'/design-detail/' + designStyle.id}>
                <div className='di-image'>
                  <span className='di-love-image'>
                    <i className="bi bi-heart-fill"></i>
                  </span>
                  {designStyle.image ? (
                    <img src={designStyle.image} alt={designStyle.name} />
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
              </Link>
              <div className='di-text'>
                <Link to={`/design-detail/${designStyle.id}`}>
                  <div className='di-title'>
                    <h4>{designStyle.name || "No name available"}</h4>
                  </div>
                  <div className='di-description'>
                    Size: {designStyle.size || "No size available"}
                  </div>
                </Link>
              </div>
              <div className='di-btn'>
                <Link to='/free-quote'>
                  <button className='di-consultation btn btn-danger rounded-pill'>
                    Book free consultation
                  </button>
                </Link>
                <button className='di-getquote btn btn-light rounded-pill'>
                  Get quote
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='not-found-design'>No designs found</p>
        )}
      </div>
    </div>
  );
}

export default DesignIdea;

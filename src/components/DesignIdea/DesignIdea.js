import React from 'react';
import { useParams } from 'react-router-dom';
import './designIdea.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function DesignIdea({ props }) {
    const [designStyles, setDesignStyles] = useState([])
    const [filteredDesigns, setFilteredDesigns] = useState([])
    const [searchTerm, setSearchTerm] = useState('');


    const params = useParams();
    const slug = params.slug;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/roomtype.json");
                const data = await response.json();
                setDesignStyles(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredDesigns(designStyles.filter(designStyle =>
            designStyle.type === slug &&
            designStyle.name.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    }, [designStyles, slug, searchTerm])

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleLoveImage = () => {
        // alert('You loved this design!')
    }

    return (
        <div className='container-designidea'>
            <div className='designidea-title'>
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={handleSearch} />
                    <button type="button" className="btn btn-outline-danger" data-mdb-ripple-init>search</button>
                </div>
            </div>
            <div className='design-title-slug'>
                <h1>Design {slug} :</h1>
            </div>
            <div className='container-designidea-card'>
                {filteredDesigns.length > 0 ? (
                    filteredDesigns.map((designStyle, index) => (
                        <div className='di-card' key={index}>
                            <Link to={'/design-detail/' + designStyle.id}>
                                <div className='di-image'>
                                    <span className='di-love-image' ><i className="bi bi-heart-fill" onClick={handleLoveImage}></i></span>
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
                                        <p>
                                            {(designStyle.name) ? designStyle.name : "No name available"}
                                        </p>
                                    </div>
                                    <div className='di-discription'>
                                        size:  {(designStyle.size) ? designStyle.size : "No size available"}
                                    </div>
                                </Link>
                            </div>
                            <div className='di-btn'>
                                <Link to='/free-quote'>
                                    <button className='di-consultation btn btn-danger rounded-pill'>
                                        book free consultation
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='not-found-desing'>No designs found</p>
                )}
            </div>
        </div>
    );
}

export default DesignIdea;
import React from 'react';
import { useParams } from 'react-router-dom';
import './designIdea.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function DesignIdea(props) {
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



    return (
        <div className='container-designidea'>
            <div className='designidea-title'>
                <div class="input-group">
                    <select class="selectpicker">
                        <option>Mustard</option>
                        <option>Ketchup</option>
                        <option>Relish</option>
                    </select>
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" class="btn btn-outline-danger" data-mdb-ripple-init>search</button>
                </div>
            </div>
            <div className='container-designidea-card'>
                {designStyles.map((designStyle, index) => (
                    <div className='di-card' key={index}>
                        <Link to={'/design-detail/' + designStyle.id}>
                            <div className='di-image'>
                                <span className='di-love-image'><i className="bi bi-heart-fill"></i></span>
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
                                    <h4>
                                        {(designStyle.name) ? designStyle.name : "No name available"}
                                    </h4>
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
                            <button className='di-getquote btn btn-light rounded-pill'>
                                get quote
                            </button>
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
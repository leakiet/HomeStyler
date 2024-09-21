import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './designIdea.css';
import { DataContext } from "../../context/DataContext";

function DesignIdea() {
    const [designStyles, setDesignStyles] = useState([]);
    const [filteredDesigns, setFilteredDesigns] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { favoriteStyle, setFavoriteStyle } = useContext(DataContext);
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
        const results = designStyles.filter(designStyle =>
            designStyle.type === slug &&
            designStyle.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDesigns(results);
    }, [designStyles, slug, searchTerm]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleLoveImage = (designStyle) => {
        setFavoriteStyle(prev => {
            const isFavorite = prev.some(fav => fav.id === designStyle.id);
            if (isFavorite) {
                return prev.filter(fav => fav.id !== designStyle.id);
            } else {
                return [...prev, designStyle];
            }
        });
    };

    return (
        <div className='container-designidea'>
            <div className='designidea-title'>
                <div className="input-group">
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={handleSearch}
                    />
                    <button type="button" className="btn btn-outline-danger">Search</button>
                </div>
            </div>
            <div className='design-title-slug'>
                <h1>Design {slug}</h1>
            </div>
            <div className='container-designidea-card'>
                {filteredDesigns.length > 0 ? (
                    filteredDesigns.map((designStyle, index) => {
                        // const isFavorite = favoriteStyle.some(fav => fav.id === designStyle.id);
                        return (

                            <div className='di-card' key={index}>
                                <Link to={`/design-detail/${designStyle.id}`}>
                                    <div className='di-image'>
                                        {/* <span
                                        className='di-love-image'
                                        style={{ color: isFavorite ? 'red' : 'black' }}
                                        onClick={() => handleLoveImage(designStyle)}
                                    >
                                        <i className="bi bi-heart-fill"></i>
                                    </span> */}
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
                                            <p>{designStyle.name || "No name available"}</p>
                                        </div>
                                    </Link>
                                    <div className='di-discription'>
                                        Size: {designStyle.size || "No size available"}
                                    </div>
                                </div>
                                <div className='di-btn'>
                                    <Link to='/free-quote'>
                                        <button className='di-consultation btn btn-danger rounded-pill'>
                                            Book Free Consultation
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className='not-found-design'>No designs found</p>
                )}
            </div>
        </div>
    );
}

export default DesignIdea;

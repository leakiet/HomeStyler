import React from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './typeInterio.css'

function TypeInterio(props) {
    const [cardHome, setCardHome] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("data/cardHomes.json");
                const data = await response.json();
                setCardHome(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);


    return (
        <>
            <div className='container-card-list'>
                <div className='card-title'>
                    <h2>One-stop shop for all things interiors</h2>
                    <p>Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office.
                        With a wide range of furniture & decor, we have your back from start to finish.</p>
                </div>
                <div className='container-card row'>
                    {cardHome.length > 0 && cardHome.map((card, index) => (
                        <div className="card" key={index}>
                            <Link to={'/design/' + card.type}>
                                <img className="card-img-bottom " src={card.image} alt={card.name} />
                                <div className="card-body">
                                    <h4 className="card-title">{card.name}</h4>
                                    <p className="card-text">{card.description}</p>
                                </div>
                                <Link to={'/design/' + card.type}>View</Link>
                            </Link>
                        </div>
                    ))}
                </div>
            </div >
        </>

    );
}

export default TypeInterio;
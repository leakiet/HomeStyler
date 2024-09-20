import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './designerCard.css';

function DesignersCard() {
    const [designers, setDesigners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("data/designer.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setDesigners(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleCardClick = (id) => {
        navigate(`/designer/${id}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='container-card-list'>
            <div className='card-title'>
                <h2>Designers</h2>
                <p>Explore our talented designers.</p>
            </div>
            <div className='container-card'>
                {designers.map((designer) => (
                    <div className="card" key={designer.id} onClick={() => handleCardClick(designer.id)}>
                        <img className="card-img-bottom" src={designer.image} alt={designer.name} />
                        <div className="card-body">
                            <h4 className="card-title">{designer.name}</h4>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DesignersCard;
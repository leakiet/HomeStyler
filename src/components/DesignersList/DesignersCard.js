import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './designerCard.css';

function DesignersCard() {
    const [designers, setDesigners] = useState([]);
    const [filerDesigners, setFilerDesigners] = useState([]);
    const navigate = useNavigate();

    const params = useParams();
    const slug = params.slug;


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


    useEffect(() => {
        const results = designers.filter(designStyle =>
            designStyle.name.toLowerCase() === slug
        );
        setFilerDesigners(results);
    }, [designers, slug]);


    const handleCardClick = (id) => {
        navigate(`/designer/${id}`);
    };


    return (
        <div className='container-card-list'>
            <div className='card-title'>
                <h2>Designers</h2>
                <p>Explore our talented designers.</p>
            </div>
            <div className='container-card'>
                {filerDesigners.map((designer) => (
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
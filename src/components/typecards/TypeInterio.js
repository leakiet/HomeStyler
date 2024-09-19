import React from 'react';
import './typeInterio.css'

function TypeInterio(props) {

    const array =[1,2,3,4]

    return (
        <div className='container-card'>
            {array.map((e, index)=>(
            <div className="card" key={index}>
            <img className="card-img-bottom" src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
                <div className="card-body">
                    <h4 className="card-title">Jane Doe</h4>
                    <p className="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
                    <a href="/" className="btn btn-primary">View</a>
                </div>
            </div>
            ))}
        </div>
    );
}

export default TypeInterio;
import React from 'react';

const Card = ({ coffee }) => {
    const { name, image, category, description, origin, type, id, rating, popularity } =
        coffee || {}
    return (
        <div className="card bg-base-100 w-96 shadow-xl mx-auto">
            <figure>
                <img className='w-full h-72'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className='flex my-1'>
                    <p>Popularity: {popularity}</p>
                    <p className='text-end'>Rating: {rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
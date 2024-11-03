import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
const Card = ({ coffee }) => {
    const { name, image, category, description, origin, type, id, rating, popularity } =
        coffee || {}
    const { pathname } = useLocation()

    return (
        <div className="card bg-base-100 w-96 shadow-xl mx-auto">
            <Link to={`/coffee/${id}`}>
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
                    {/* {
                        pathname === '/dashboard' && 
                    } */}
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default Card;
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getCoffeeItems, setCoffeeData } from '../utility';

const CoffeeDetails = () => {
    const { id } = useParams()
    const coffeesData = useLoaderData()
    const [coffee, setCoffee] = useState({})
    const [isActive, setIsActive] = useState(false)



    useEffect(() => {
        const findCoffee = coffeesData.find(coffee => coffee.id === parseInt(id))
        setCoffee(findCoffee)
        const setItems = getCoffeeItems()
        const exist = setItems.find(cof => cof.id == findCoffee.id)
        if (exist) {
            setIsActive(true)
        }
    }, [setCoffee, id])

    const handleCoffeeAdd = (coffee) => {
        setCoffeeData(coffee)
        setIsActive(true)
    }
    const { name, image, category, description } = coffee


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img className='w-[600px]'
                    src={image}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{name}</h2>
                <p>{description}</p>
                <p>{category}</p>
                <div className="card-actions justify-end">
                    <button disabled={isActive} onClick={() => handleCoffeeAdd(coffee)} className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;
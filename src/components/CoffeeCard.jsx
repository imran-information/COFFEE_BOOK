import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';


const CoffeeCard = () => {
    const navigate = useNavigate()
    const coffeesData = useLoaderData()
    const { category } = useParams()
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        if (category) {
            const categoryDataFilter = [...coffeesData].filter(coffee => coffee.category === category)
            setCoffees(categoryDataFilter)
        } else {
            setCoffees(coffeesData.slice(0, 6))
        }

    }, [coffeesData, category])

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10 gap-5'>

                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }

            </div>
            <button onClick={() => navigate('/coffees')} className='btn btn-warning font-bold mb-10'>Show all</button>
        </>
    );
};

export default CoffeeCard;
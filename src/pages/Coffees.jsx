import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Coffees = () => {
    const coffeesData = useLoaderData()

    const [coffees, setCoffees] = useState(coffeesData)
    const handleShort = (short) => {
        if (short === 'popularity') {
            const shortByPopularity = [...coffeesData].sort((a, b) => a.popularity - b.popularity)
            setCoffees(shortByPopularity)
        } else if (short === 'rating') {
            const shortByRating = [...coffeesData].sort((a, b) => a.rating - b.rating)
            setCoffees(shortByRating)
        }
    }
    return (
        <>
            <div className='flex justify-between items-center my-5'>
                <div className='text-5xl font-semibold'>Browse Coffees by Category</div>
                <div>
                    <button onClick={() => handleShort('popularity')} className='btn btn-warning mr-10'>Short by Rating</button>
                    <button onClick={() => handleShort('rating')} className='btn btn-warning'>Short by popularity</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10 gap-5'>

                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }

            </div>
        </>
    );
};

export default Coffees;
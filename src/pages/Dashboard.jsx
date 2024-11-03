import React, { useEffect, useState } from 'react';

import { getCoffeeItems } from '../utility';
import Card from '../components/Card';


const Dashboard = () => {
   

    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        const storedCoffees = getCoffeeItems()
        setCoffees(storedCoffees)
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10 gap-5'>

            {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
            }

        </div>
    );
};

export default Dashboard;
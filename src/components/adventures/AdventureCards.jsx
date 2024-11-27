import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const AdventureCards = () => {

    const places = useLoaderData();
    return (
     <div className='my-12 mx-12 lg:mx-32 grid gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         {
            places.length === 0 ? 
            (
                <p className='text-center text-red-300 text-4xl'>No data found</p>
            ) : (
                places.map(place => <Card key={place.id} place={place}></Card>)
            )
         }
        
     </div>
    );
};

export default AdventureCards;
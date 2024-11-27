import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Buttons = () => {

    const [division, setDivision] = useState([]);

    useEffect(() =>{
        fetch('/divisions.json')
        .then(res => res.json())
        .then(data => setDivision(data))
    },[])

    return (
        <div className='mx-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                division.map(item => (
                <NavLink to={`division/${item.division}`} key={item.id} className={({isActive})=>`btn font-bold text-2xl ${isActive ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-blue-50'}`}>{item.division}</NavLink>
                ))
            }
        </div>
    );
};

export default Buttons;
import React from 'react';

const Card = ({place}) => {
    const {adventureTitle, image, ecoFriendlyFeatures} = place;
    return (

            <div className="card card-compact w-80 border">
                <figure>
                    <img className='h-[200px] p-2 w-full rounded-2xl'
                        src={image}
                        alt={adventureTitle} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-extrabold text-2xl">{adventureTitle}</h2>
                    <p>
                        {
                        ecoFriendlyFeatures.map((item, index)=><li className='font-medium text-slate-600 text-base' key={index}>{item}</li>)
                        }
                    </p>
                    <div className="card-actions">
                        <button className="btn mt-4 font-bold font-gummy text-slate-600 text-xl bg-gradient-to-r from-blue-400 to-blue-100">Explore Now</button>
                    </div>
                </div>
            </div>

    );
};

export default Card;
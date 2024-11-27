import React from 'react';

const Card = ({place}) => {
    const {adventureTitle, image, } = place;
    return (

            <div className="card card-compact w-80 border">
                <figure>
                    <img className='h-[200px] p-2 w-full rounded-2xl'
                        src={image}
                        alt={adventureTitle} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

    );
};

export default Card;
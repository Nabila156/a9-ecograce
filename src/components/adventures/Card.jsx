
import { Link } from 'react-router-dom';

const Card = ({place}) => {
    const {adventureTitle, image, ecoFriendlyFeatures, id} = place;
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
                        ecoFriendlyFeatures.map((item, index)=><li key={index} className='font-medium text-slate-600 text-base'>{item}</li>)
                        }
                    </p>
                    <div className="card-actions">
                        <Link to={`/place/${id}`} className="btn w-full mt-4 font-extrabold font-gummy text-white text-xl bg-gradient-to-r from-blue-500 to-blue-200">Explore Now</Link>
                    </div>
                </div>
            </div>

    );
};

export default Card;

import { Link } from 'react-router-dom';

const Card = ({ place }) => {
    const { adventureTitle, image, ecoFriendlyFeatures, id } = place;
    return (

        <div
            data-aos='zoom-in-down'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'>
            <div className="card card-compact w-80 border shadow-lg hover:scale-105 transform transition duration-300">
                < figure >
                    <img className='h-[200px] p-2 w-full rounded-2xl'
                        src={image}
                        alt={adventureTitle} />
                </figure >
                <div className="p-5">
                    <div className='h-40 flex-grow overflow-auto'>
                        <h2 className="card-title font-extrabold text-2xl">{adventureTitle}</h2>
                        <p className='mt-4'>
                            {
                                ecoFriendlyFeatures.map((item, index) => <li key={index} className='font-medium text-slate-600 text-base'>{item}</li>)
                            }
                        </p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/place/${id}`} className="btn w-full mt-4 font-extrabold font-gummy text-white text-xl bg-gradient-to-r from-blue-500 to-blue-200">Explore Now</Link>
                    </div>
                </div>
            </div >

        </div>
    );
};

export default Card;
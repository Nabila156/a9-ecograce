import { useState } from "react";

const TipsCard = ({ tips }) => {

    const { title, image, description } = tips;
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div onClick={handleFlip} className="h-60 p-2 text-center rounded-none shadow-lg border w-72 hover:scale-105 transform transition duration-300">

            {/* Front side  */}

            {
                !isFlipped && (
                    <div className="animate__animated animate__flipInY w-full h-full hover:text-blue-600">
                        <img src={image} alt={title} className="w-full h-[80%] object-cover" />
                        <p className="text-2xl mt-2 font-gummy font-bold">{title}</p>
                    </div>
                )
            }

            {/* Back side */}

            {
                isFlipped && <p className="p-2 font-semibold text-gray-500">{description}</p>
            }

        </div>

    );
};

export default TipsCard;
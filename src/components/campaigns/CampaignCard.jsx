
const CampaignCard = ({ campaign }) => {

    const { title, description, image, startDate, endDate } = campaign;

    return (
        <div className="card card-compact border w-72 hover:scale-105 transform transition duration-300">
            <img src={image} alt={title} className="w-full h-1/2 object-cover" />
            <div className="p-4">
                <div className="h-32 flex-grow overflow-auto">
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <p className="text-gray-600 mt-2">{description}</p>
                </div>
                <div className="mt-10 text-gray-700">
                    <p><strong>Start Date:</strong> {startDate}</p>
                    <p><strong>End Date:</strong> {endDate}</p>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;
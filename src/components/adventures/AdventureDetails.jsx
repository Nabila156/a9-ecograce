
const AdventureDetails = ({ adventure }) => {

    const {
        adventureTitle,
        image,
        shortDescription,
        location,
        division,
        duration,
        adventureLevel,
        adventureCost,
        includedItems = [],
        ecoFriendlyFeatures = [],
        specialInstructions = [],
        bookingAvailability,
        maxGroupSize,
    } = adventure;

    return (

        <div className="bg-gray-100 text-gray-800 p-6">
            <div className="max-w-3xl mx-auto">
                {/* Adventure Details Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            {adventureTitle}
                        </h1>
                        <img
                            src={image}
                            alt={adventureTitle}
                            className="w-full object-cover rounded-md"
                        />
                    </div>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Adventure Details
                        </h2>
                        <p>
                            <strong>Description:</strong> {shortDescription}
                        </p>
                        <p>
                            <strong>Location:</strong> {location}
                        </p>
                        <p>
                            <strong>Division:</strong> {division}
                        </p>
                        <p>
                            <strong>Duration:</strong> {duration}
                        </p>
                        <p>
                            <strong>Adventure Level:</strong> {adventureLevel}
                        </p>
                        <p>
                            <strong>Cost:</strong> {adventureCost} Taka
                        </p>
                    </div>

                    {/* Included Items Section */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            What's Included
                        </h2>
                        <ul className="list-disc ml-6">
                            {includedItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Eco-Friendly Features Section */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Eco-Friendly Features
                        </h2>
                        <ul className="list-disc ml-6">
                            {ecoFriendlyFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Special Instructions Section */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Special Instructions
                        </h2>
                        <ul className="list-disc ml-6">
                            {specialInstructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Additional Information Section */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Additional Information
                        </h2>
                        <p>
                            <strong>Booking Availability:</strong>{" "}
                            <span
                                className={
                                    bookingAvailability
                                        ? "text-green-600"
                                        : "text-red-600"
                                }
                            >
                                {bookingAvailability ? "Yes" : "No"}
                            </span>
                        </p>
                        <p>
                            <strong>Maximum Group Size:</strong> {maxGroupSize} people
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdventureDetails;
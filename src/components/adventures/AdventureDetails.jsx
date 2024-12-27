import { useState } from "react";

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTalkWithExpert = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if ((currentHour >= 10 && currentHour < 20)) {
            window.open('https://meet.google.com/", "_blank');
        }
        else {
            setIsModalOpen(true);
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (

        <div className="bg-gray-100 text-gray-800 p-6">
            {/* Modal */}
            {
                isModalOpen && (
                    <dialog className="modal modal-open">
                        <div className="modal-box">
                            <form method="dialog">
                                <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg text-center">Consultation Time</h3>
                            <p className="py-4 text-center"> Our experts are available for consultation from 10:00 AM to 8:00 PM.
                                Please contact us during these hours for assistance.</p>
                        </div>
                    </dialog>
                )
            }
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

                    {/* Details */}
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

                    {/* Talk with Expert */}
                    <div className="md:w-96 mx-auto flex justify-between items-center border-red-50 rounded-xl hover:bg-slate-200 hover:scale-105 mt-12 p-4 border-2">
                        <img className="h-24 w-24" src="/assets/expert.png" alt="expert" />
                        <button onClick={handleTalkWithExpert} className="btn bg-red-50 text-red-400 font-bold text-lg md:text-2xl">Talk with Expert</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdventureDetails;
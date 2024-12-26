
import CampaignCard from "./campaignCard";

const Campaigns = ({ campaigns }) => {

    return (
        <div>
            <div className="text-center lg:mx-32 my-10">
                <h1 className="text-3xl lg:text-4xl font-extrabold">EcoGrace: Green Actions</h1>
                <p className="text-lg font-bold mt-6 text-gray-500 md:mx-24 lg:mx-40">Small steps, big impact. Join us in taking meaningful actions to protect the planet and create a sustainable future for all.</p>
            </div>
            <div className='my-12 mx-12 lg:mx-40 grid gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    campaigns.length === 0 ?
                        (
                            <p className='text-center text-red-300 text-4xl'>No data found</p>
                        ) : (
                            campaigns.map((campaign, index) => <CampaignCard key={index} campaign={campaign}></CampaignCard>)
                        )
                }

            </div>
        </div>
    );
};

export default Campaigns;
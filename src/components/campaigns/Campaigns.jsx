
import CampaignCard from "./campaignCard";

const Campaigns = ({campaigns}) => {

    return (
        <div className='my-12 mx-12 lg:mx-32 grid gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                campaigns.length === 0 ?
                    (
                        <p className='text-center text-red-300 text-4xl'>No data found</p>
                    ) : (
                        campaigns.map((campaign, index) => <CampaignCard key={index} campaign={campaign}></CampaignCard>)
                    )
            }

        </div>
    );
};

export default Campaigns;
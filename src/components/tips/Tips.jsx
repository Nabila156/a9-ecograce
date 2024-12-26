import TipsCard from "./TipsCard";

const Tips = ({ tips }) => {
    return (
        <div>
            <div className="text-center lg:mx-32 my-10">
                <h1 className="text-3xl lg:text-4xl font-extrabold">Eco Travel Tips</h1>
                <p className="text-lg font-bold mt-6 text-gray-500 md:mx-24 lg:mx-40">Simple tips to help you travel sustainably and minimize your environmental footprint.</p>
            </div>
            <div className='my-12 mx-12 lg:mx-40 grid gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    tips.length === 0 ?
                        (
                            <p className='text-center text-red-300 text-4xl'>No data found</p>
                        ) : (
                            tips.map((item, index) => <TipsCard key={index} tips={item}></TipsCard>)
                        )
                }

            </div>
        </div>
    );
};

export default Tips;
import { Outlet } from "react-router-dom";
import Buttons from "./Buttons";


const Adventure = () => {
    return (
        <div>
            <h2 className='text-center my-10 font-extrabold text-3xl md:text-4xl text-blue-500'>Adventure Experiences</h2>
            <Buttons></Buttons>
            <Outlet></Outlet>
        </div>
    );
};

export default Adventure;
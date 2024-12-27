import { useLoaderData } from "react-router-dom";
import DynamicTitle from "../components/DynamicTitle";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tips from "../components/tips/Tips";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const TipsLayout = () => {
    const { loading } = useContext(AuthContext);
    const tips = useLoaderData();

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div> 
    }

    return (
        <div className="min-h-screen flex flex-col font-archivo">
            <DynamicTitle></DynamicTitle>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="flex-grow">
                <Tips tips={tips}></Tips>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default TipsLayout;
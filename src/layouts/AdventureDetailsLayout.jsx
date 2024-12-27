
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdventureDetails from "../components/adventures/adventureDetails";
import { useLoaderData } from "react-router-dom";
import DynamicTitle from "../components/DynamicTitle";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const AdventureDetailsLayout = () => {
    const adventure = useLoaderData();
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    }

    if (!adventure) {
        return (
            <div className="text-center text-4xl text-red-400 py-10">
                <h2>No Adventure Found.</h2>
            </div>
        );
    }

    return (
        <div className="font-archivo flex flex-col min-h-screen">
            <DynamicTitle></DynamicTitle>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="flex-grow">
                <AdventureDetails key={adventure.id} adventure={adventure}></AdventureDetails>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AdventureDetailsLayout;
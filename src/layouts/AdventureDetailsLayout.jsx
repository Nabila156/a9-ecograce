
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdventureDetails from "../components/adventures/adventureDetails";
import { useLoaderData } from "react-router-dom";


const AdventureDetailsLayout = () => {
    const adventure = useLoaderData();
    
    if (!adventure) {
        return (
            <div className="text-center text-4xl text-red-400 py-10">
                <h2>No Adventure Found.</h2>
            </div>
        );
    }

    return (
        <div className="font-archivo flex flex-col min-h-screen">
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
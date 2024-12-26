import { useLoaderData } from "react-router-dom";
import DynamicTitle from "../components/DynamicTitle";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tips from "../components/tips/Tips";


const TipsLayout = () => {

    const tips = useLoaderData();

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
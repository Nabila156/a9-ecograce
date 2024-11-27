import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const TipsLayout = () => {

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
           <div className="flex-grow">
           <h1>Hey!</h1>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default TipsLayout;
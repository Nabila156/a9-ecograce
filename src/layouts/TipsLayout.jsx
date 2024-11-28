import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const TipsLayout = () => {

    return (
        <div className="min-h-screen flex flex-col font-archivo">
            <header>
                <Navbar></Navbar>
            </header>
            <main className="flex-grow">
                <h1>Hey!</h1>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default TipsLayout;
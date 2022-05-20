import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <main>
                    <h1>Home page</h1>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Home;
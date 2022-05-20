import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import style from "./List.module.css"
const List = () => {
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <main className={style.main}>
                    <h1>List page</h1>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default List;
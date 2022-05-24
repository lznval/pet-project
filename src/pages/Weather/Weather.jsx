import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Weather.module.scss";

const Weather = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [weather, setWeather] = useState([]);
    const [locations, setLocations] = useState("london");

    const [value, setValue] = useState("");
    const [city, setCity] = useState("");

    const hadnleChange = (value) => {
        setValue(value)
    };

    const getCity = () => {
        setCity(value);
        setValue("");
    };

    const getWeather = () => {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID={APP_ID}&units=metric`

        )
    }

    return (
        <>
            <div className="wrapper">
                <Navbar />
                <main className={style.main}>
                    <h1>Weather page</h1>
                    <div className="weather">
                        <div className="weather__input">
                            <input type="text" value={value} onChange={(e) => hadnleChange(e.target.value)} />
                        </div>                        
                        <div className="weather__button">
                            <button onClick={getCity}>Know weather</button>
                            <span>{city}</span>
                        </div>
                        <div className="weather__body">
                            <div className="weather__temperature">12</div>
                            <div className="weather__description">sky</div>
                            <div className="weather__icon">
                                <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />
                            </div>
                            <div className="weather__pressure">760</div>
                            <div className="weather__city">Spb</div>
                            <div className="weather__country">RU</div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Weather;
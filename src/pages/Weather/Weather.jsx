import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Weather.module.scss";

const Weather = () => {

    const API_KEY = "6a7b59f97d4790bd13ce26e1a93d2a9b";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

    const [value, setValue] = useState("");
    const [city, setCity] = useState("");

    const hadnleChange = (value) => {
        setValue(value)
    };

    const getCity = () => {
        setCity(value);
        setValue("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })
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
                            <button onClick={(e) => handleSubmit(e)}>Know weather</button>
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
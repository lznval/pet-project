import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Weather.module.scss";

const Weather = () => {

    const API_KEY = "6a7b59f97d4790bd13ce26e1a93d2a9b";

    const [value, setValue] = useState("");
    const [city, setCity] = useState("");

    const hadnleChange = (value) => {
        setValue(value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`)
            
            .then((response) => {
                const data = response.data;
                setCity(data);
            })
            .catch((error) => {
                alert("Wrong city. Try again")
            })
    }

    const handleKeySubmit = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`)
            
            .then((response) => {
                const data = response.data;
                setCity(data);
            })
            .catch((error) => {
                alert("Wrong city. Try again")
            })
        }
    }

    return (
        <>
            <div className="wrapper">
                <Navbar />
                <main className={style.main}>
                    <h1>Weather page</h1>
                    <div className={style.weather}>
                        <div className={style.weather__input}>
                            <input type="text" value={value} onKeyUp={(e) => handleKeySubmit(e)} onChange={(e) => hadnleChange(e.target.value)}/>
                        </div>                        
                        <div className={style.weather__button}>
                            <button onClick={(e) => handleSubmit(e)} >Know weather</button>
                        </div>
                        <div className={style.weather__body}>
                            <div className={style.weather__temperature}><span>Temperature:</span> {city && `${Math.ceil(city.main.temp - 273.15)} °С`}</div>
                            <div className={style.weather__description}><span>Weather:</span> {city && city.weather.map((item) => item.main)}</div>
                            <div className={style.weather__icon}>
                                {city && city.weather.map((item, key) => (
                                    <img src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} alt={city.weather.map((item) => item.description)} key={key}/>
                                ))}
                            </div>
                            <div className={style.weather__pressure}><span>Pressure:</span> {city && `${Math.ceil(city.main.pressure / 1.333)} mm Hg`}</div>
                            <div className={style.weather__city}><span>City name:</span> {city && city.name}</div>
                            <div className={style.weather__country}><span>Country:</span> {city && city.sys.country}</div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Weather;
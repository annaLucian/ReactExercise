import React, { useState } from "react";

const Weather = () => {
    const [temperature, setTemperature] = useState(25);
    const [day, setDay] = useState("summy");

    const hotter = () => {
        setTemperature(temperature + 1)
        if (temperature >= 20) {
            setDay("sunny")
        }

    }
    const colder = () => {
        let newTemperature = temperature - 1
        setTemperature(newTemperature)
        if (newTemperature < 20) {
            setDay("cloudy")
        }

    }

    return (
        <div>
            <p>{temperature}</p>
            <p>{day}</p>
            <button onClick={hotter}>hotter</button>
            <button onClick={colder}>colder</button>
        </div>
    )

}
export default Weather;
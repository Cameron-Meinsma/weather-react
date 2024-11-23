import React from "react";
import City from "./City";
import Temperature from "./Temperature";

export default function LocationTemperature() {
    return (
        <div className="LocationTemperature">
            <City city="Los Angeles" />
            <img
                src="https://openweathermap.org/img/wn/50d@2x.png"
                id="weather-icon"
                alt="weather icon"
            />
            <Temperature temperature={24} />
        </div>
    );
}

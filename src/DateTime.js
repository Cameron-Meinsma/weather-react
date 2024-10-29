import React from "react";
import DayTime from "./DayTime";
import WindSpeed from "./WindSpeed";
import WeatherDescription from "./WeatherDescription";
import "./DateTime.css";

export default function DateTime() {
    return (
        <div className="DateTime">
            <strong>
                <p className="day-time">
                    <DayTime day="Sunday" time="20:59" />
                </p>
            </strong>
            <p className="wind-speed">
                <WindSpeed windSpeed={0} />
            </p>
            <p className="weather-description">
                <WeatherDescription weatherDescription="Haze" />
            </p>
        </div>
    );
}

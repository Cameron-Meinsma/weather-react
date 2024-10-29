import React from "react";
import "./Temperature.css";

export default function Temperature({ temperature }) {
    return (
        <div className="Temperature">
            <h2 id="temperature">{temperature}</h2>
            <a href="#" class="active celsius">
                °C
            </a>{" "}
            |{" "}
            <a href="#" class="fahrenheit">
                °F
            </a>
        </div>
    );
}

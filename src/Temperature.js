import React from "react";
import "./Temperature.css";

export default function Temperature({ temperature }) {
    return (
        <div className="Temperature">
            <h2 id="temperature">{temperature}</h2>
            <button href="#" class="active celsius">
                °C
            </button>{" "}
            |{" "}
            <button href="#" class="fahrenheit">
                °F
            </button>
        </div>
    );
}

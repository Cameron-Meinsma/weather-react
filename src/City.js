import React from "react";
import "./City.css";

export default function City({ city }) {
    return (
        <div className="city">
            <h1>{city}</h1>
        </div>
    );
}

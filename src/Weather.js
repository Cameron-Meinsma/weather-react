import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather({ city }) {
    function handleResponse(response) {
        alert(`The weather in ${city} ${response.data.main.temp}°C`);
    }
    let apiKey = "de2c40e370d58e257faf07ba4ea95840";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;

    axios.get(url).then(handleResponse);
    return (
        <Audio
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />
    );
}

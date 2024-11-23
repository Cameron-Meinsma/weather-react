import React from "react";
import "./Search.css";

export default function Search() {
    return (
        <div className="Search">
            <form className="search-form col-9" id="search-form">
                <div className="input-group mb-3">
                    <input
                        type="search"
                        className="form-control rounded-pill mr-1 pr-5 shadow-none search-input"
                        placeholder="Search a Location"
                        aria-label="Search a Location"
                        aria-describedby="basic-addon2"
                        autoFocus="on"
                    />
                    <span className="input-group-append">
                        <button
                            className="btn rounded-pill border-0 ml-n5"
                            type="button"
                        >
                            <i className="fa fa-search search-icon"></i>
                        </button>
                    </span>
                </div>
            </form>
            <button
                className="current-location-button col-3"
                id="current-location-button"
            >
                My Location
            </button>
        </div>
    );
}

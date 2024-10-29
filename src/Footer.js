import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="Footer">
            <footer>
                <p>
                    This project is{" "}
                    <a
                        href="https://github.com/Cameron-Meinsma/weather-react"
                        target="_blank"
                        rel="noreferrer"
                        class="github"
                    >
                        open-sourced on GitHub
                    </a>{" "}
                    &{" "}
                    <a
                        href="https://camerons-react-weather-app.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                        class="netlify"
                    >
                        hosted on Netlify
                    </a>
                </p>
            </footer>
        </div>
    );
}

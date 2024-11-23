import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import axios from "axios";
import Footer from "./Footer";
import Search from "./Search";
import LocationTemperature from "./LocationTemperature";
import DateTime from "./DateTime";
import "./App.css";

function App() {
    function handleResponse(response) {
        console.log(response.data);
    }

    const apiKey = "91e4be9d3f0ce62462b88df7804804ae";
    let city = "Los Angeles";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="App">
            <header className="App-header">
                <div className="Container">
                    <div className="card border-0">
                        <div className="card-body">
                            <div className="row">
                                <Search />
                            </div>
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-6 location-temp">
                                        <LocationTemperature />
                                    </div>
                                    <div className="col-6">
                                        <DateTime />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;

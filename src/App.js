import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Footer from "./Footer";
import Search from "./Search";
import LocationTemperature from "./LocationTemperature";
import DateTime from "./DateTime";
import "./App.css";

function App() {
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

import React, { Component } from 'react';
import City from "./city";
import "./cities.css"



class Cities extends Component {

    state = {
        cities: [
            { name: "Sofia", image: "sofia.jpg", cityLetter: "S" },
            { name: "Plovdiv", image: "plovdiv.jpg", cityLetter: "P" },
            { name: "Bourgas", image: "burgas.jpg", cityLetter: "B" },
            { name: "Varna", image: "varna.jpg", cityLetter: "V" },
            { name: "Veliko Tarnovo", image: "veliko tarnovo.jpg", cityLetter: "V" }
        ]
    }
    render() {
        return (
            <section class="cities">
                <div>
                    <h1 class="h1-cities"> Градове </h1>
                    <h2> Открий ни в твоя град</h2>
                </div>
                <div className="cityList">
                        {this.state.cities.map(city => (
                            <City name={city.name} image={city.image} cityLetter={city.cityLetter} />
                        ))}
                </div>
            </section>
        );
    }
}

export default Cities;

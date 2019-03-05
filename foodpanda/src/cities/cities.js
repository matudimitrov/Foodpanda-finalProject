import React, { Component } from 'react';
import City from "./city"



class Cities extends Component {
    
    state = {
        cities: [
            {name:"Sofia", image: "./images/sofia.jpg", cityLetter:"S"},
            {name:"Plovdiv", image:"./images/plovdiv.jpg", cityLetter:"P"},
            {name:"Plovdiv", image:"./images/plovdiv.jpg", cityLetter:"P"},
            {name:"Varna", image:"./images/varna.jpg", cityLetter:"V"},
            {name:"Veliko Tarnovo", image:"./images/veliko tarnovo.jpg", cityLetter:"V"}
        ]
    }
    render() {
        return (
         <section class="cities">
            <h2> Градове 
                <span> 
                    Открии ни в твоя град
                </span>
            </h2>
            <div className= "cityList">
            <ul>
                {this.state.cities.map(city => (
                    <City name={city.name} image={city.image} cityLetter={city.cityLetter}/>
                ))}
                
            </ul>
            </div>
         </section>
        );
    }
}

export default Cities;

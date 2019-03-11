import React, { Component } from 'react';
import RestaurantCard from "../restaurantCard/RestaurantCard";
import "../cityRestaurants.css";
import HeroSection from "../UpperSection/UpperSectionForCity";
import DownloadApp from "../../downloadApp/downloadApp"


class Varna extends Component {
    state = {
        Varna: [
            { id: 1, name: "Turkish restaurant Sarai", price: "$$", rating: 3.6, image: "    https://images.deliveryhero.io/image/fd-bg/LH/v7oz-listing.jpg?width=400&amp;height=292" },
            { id: 2, name: "Salt & Pepper", price: "$$", rating: 4.5, image: "https://images.deliveryhero.io/image/fd-bg/LH/v4ex-listing.jpg?width=400&height=292" },
            { id: 3, name: "Starbucks", price: "$", rating: 4.3, image: "https://images.deliveryhero.io/image/fd-bg/LH/v0vl-listing.jpg?width=400&height=292" },
            { id: 4, name: "Pizza Verace", price: "$$", rating: 4.1, image: "https://images.deliveryhero.io/image/fd-bg/LH/v0zw-listing.jpg?width=400&amp;height=292" },
            { id: 5, name: "Green Deli Kafe", price: "$$$", rating: 3.9, image: "https://images.deliveryhero.io/image/fd-bg/LH/v6zo-listing.jpg?width=400&amp;height=292" }
        ]
    }

    render() {
        return (
            <React.Fragment>
            <HeroSection name="Varna"/>
            <section class="restaurants">
                <div>
                    <h1 class="h1-restaurants"> Varna </h1>
                    <h2> Популярни ресторанти </h2>
                </div>
                <div className="RestaurantList">
                    {this.state.Varna.map(restaurant => (
                        <RestaurantCard name={restaurant.name} price={restaurant.price} rating={restaurant.rating} image={restaurant.image} />
                    ))}
                </div>
            </section>
            <DownloadApp/>
            </React.Fragment>
        );
    }
}

export default Varna;

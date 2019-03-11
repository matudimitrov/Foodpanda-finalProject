import React, { Component } from 'react';
import RestaurantCard from "../restaurantCard/RestaurantCard";
import "../cityRestaurants.css";
import HeroSection from "../UpperSection/UpperSectionForCity";
import DownloadApp from "../../downloadApp/downloadApp"


class Bourgas extends Component {
    state = {
        Bourgas: [
            { id: 1, name: "Burgeria", price: "$", rating: 3.3, image: "    https://images.deliveryhero.io/image/fd-bg/LH/v4vh-listing.jpg?width=400&amp;height=292" },
            { id: 2, name: "Salt & Pepper", price: "$$$", rating: 4.5, image: "https://images.deliveryhero.io/image/fd-bg/LH/v4ex-listing.jpg?width=400&height=292" },
            { id: 3, name: "La Porchetta", price: "$$", rating: 4.2, image: "https://images.deliveryhero.io/image/fd-bg/LH/v1ds-listing.jpg?width=400&amp;height=292"},
            { id: 4, name: "Pizza Monteo", price: "$", rating: 4.1, image: "https://images.deliveryhero.io/image/fd-bg/LH/v3gz-listing.jpg?width=400&amp;height=292" },
            { id: 5, name: "Green Deli Kafe", price: "$", rating: 3.9, image: "https://images.deliveryhero.io/image/fd-bg/LH/v6zo-listing.jpg?width=400&amp;height=292" }
        ]
    }

    render() {
        return (
            <React.Fragment>
            <HeroSection name="Bourgas"/>
            <section class="restaurants">
                <div>
                    <h1 class="h1-restaurants"> Bourgas </h1>
                    <h2> Популярни ресторанти </h2>
                </div>
                <div className="RestaurantList">
                    {this.state.Bourgas.map(restaurant => (
                        <RestaurantCard name={restaurant.name} price={restaurant.price} rating={restaurant.rating} image={restaurant.image} />
                    ))}
                </div>
            </section>
            <DownloadApp/>
            </React.Fragment>
        );
    }
}

export default Bourgas;

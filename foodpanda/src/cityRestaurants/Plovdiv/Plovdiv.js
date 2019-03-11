import React, { Component } from 'react';
import RestaurantCard from "../restaurantCard/RestaurantCard";
import "../cityRestaurants.css";
import HeroSection from "../UpperSection/UpperSectionForCity";
import DownloadApp from "../../downloadApp/downloadApp"


class Plovdiv extends Component {
    state = {
        Plovdiv: [
            { id: 1, name: "Burger Bar Joy", price: "$$$", rating: 4.6, image: "    https://images.deliveryhero.io/image/fd-bg/LH/v1vo-listing.jpg?width=400&amp;height=292" },
            { id: 2, name: "La Porchetta", price: "$$", rating: 4.2, image: "https://images.deliveryhero.io/image/fd-bg/LH/v1ds-listing.jpg?width=400&amp;height=292" },
            { id: 3, name: "Starbucks", price: "$", rating: 4.3, image: "https://images.deliveryhero.io/image/fd-bg/LH/v0vl-listing.jpg?width=400&height=292" },
            { id: 4, name: "Tasty Bar and Pizza", price: "$$$", rating: 3.1, image: "https://images.deliveryhero.io/image/fd-bg/LH/v0zw-listing.jpg?width=400&amp;height=292" },
            { id: 5, name: "Piccantino Two", price: "$$$", rating: 3.7, image: "https://images.deliveryhero.io/image/fd-bg/LH/v7cm-listing.jpg?width=400&amp;height=292" }
        ]
    }

    render() {
        return (
            <React.Fragment>
            <HeroSection name="Plovdiv"/>
            <section class="restaurants">
                <div>
                    <h1 class="h1-restaurants"> Plovdiv </h1>
                    <h2> Популярни ресторанти </h2>
                </div>
                <div className="RestaurantList">
                    {this.state.Plovdiv.map(restaurant => (
                        <RestaurantCard id={restaurant.id} name={restaurant.name} price={restaurant.price} rating={restaurant.rating} image={restaurant.image} city="Plovdiv" />
                    ))}
                </div>
            </section>
            <DownloadApp/>
            </React.Fragment>
        );
    }
}

export default Plovdiv;

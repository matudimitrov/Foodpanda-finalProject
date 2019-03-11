import React, { Component } from 'react';
import RestaurantCard from "./RestaurantCard";
import "./Sofia.css"


class Sofia extends Component {
    state = {
        Sofia: [
            { id: 1, name: "Turkish restaurant Sarai", price: "$$", rating: 3.6, image: "    https://images.deliveryhero.io/image/fd-bg/LH/v7oz-listing.jpg?width=400&amp;height=292" },
            { id: 2, name: "Salt & Pepper", price: "$$", rating: 4.5, image: "https://images.deliveryhero.io/image/fd-bg/LH/v4ex-listing.jpg?width=400&height=292" },
            { id: 3, name: "Starbucks", price: "$", rating: 4.3, image: "https://images.deliveryhero.io/image/fd-bg/LH/v0vl-listing.jpg?width=400&height=292" },
            { id: 4, name: "Pizza Verace", price: "$$", rating: 4.1, image: "https://images.deliveryhero.io/image/fd-bg/LH/v0zw-listing.jpg?width=400&amp;height=292" },
            { id: 5, name: "Green Deli Kafe", price: "$$$", rating: 3.9, image: "https://images.deliveryhero.io/image/fd-bg/LH/v6zo-listing.jpg?width=400&amp;height=292" }
        ]
    }

    render() {
        return (
            <section class="restaurants">
                <div>
                    <h1 class="h1-restaurants"> Sofia </h1>
                    <h2> Популярни ресторанти </h2>
                </div>
                <div className="RestaurantList">
                    {this.state.Sofia.map(restaurant => (
                        <RestaurantCard name={restaurant.name} price={restaurant.price} rating={restaurant.rating} image={restaurant.image} />
                    ))}
                </div>
            </section>
        );
    }
}

export default Sofia;

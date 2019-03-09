import React, { Component } from 'react';
import "./restaurant.css"


class Restaurant extends Component {
    render () {
        return (
            <div className="restaurant">
                <section>
                    <div height="250px" className="restaurant-image">
                    <img alt="" src="https://cdn10.bigcommerce.com/s-ibjgubc/products/80/images/266/long_lake_pizza__03240.1424065993.1280.1280.jpg?c=2"></img>
                    </div>
                    <h1>Pizza Verruci</h1>
                </section>
                <aside className="cart">

                </aside>
            </div>
        )
    }
}

export default Restaurant;

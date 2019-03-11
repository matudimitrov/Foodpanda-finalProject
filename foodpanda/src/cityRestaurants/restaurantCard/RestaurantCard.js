import React, { Component } from 'react';
import "../restaurantCard/restaurantCard.css";
import { Link } from "react-router-dom"


class RestaurantCard extends Component {

    state = {
        currentRestaurant: {

        }
    }

    componentDidMount() {
    let currentRestaurant = {
    city: this.props.city,
    id: this.props.id,
    name: this.props.name,
    rating: this.props.rating,
    image: this.props.image,
    price: this.props.price

    }
    this.setState({currentRestaurant})
       }
    setRestaurant = () => { 
        const currentRestaurant = this.state.currentRestaurant;
        sessionStorage.setItem('currentRestaurant', JSON.stringify(currentRestaurant)); }
render() {
    return (
        <div className="restaurant">
            <Link to={"/" + this.props.city + "/" + this.props.id} onClick={this.setRestaurant}>
                <div className="restaurant-div" >
                    <img className="restaurant-pic" alt="" src={this.props.image}></img>
                </div>
                <div className="info">
                    <span className="restaurant-name">{this.props.name}</span>
                    <span className="restaurant-price"> Rating: {this.props.rating}</span>
                    <span className="restaurant-rating">Prices: {this.props.price}</span>
                </div>
            </Link>
        </div>
    )
}
}

export default RestaurantCard;

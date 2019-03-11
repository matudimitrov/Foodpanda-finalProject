import React, { Component } from 'react';
import "./restaurantCard.css";


class RestaurantCard extends Component {
    render() {
        return (
                <div className="restaurant">
                    <a href={"/" + this.props.name}>
                        <div className="restaurant-div" >
                            <img className="restaurant-pic" alt="" src={this.props.image}></img>
                        </div>
                        <div className="info">
                            <span className="restaurant-name">{this.props.name}</span>
                        </div>
                    </a>
                </div>
        )
    }
}

export default RestaurantCard;

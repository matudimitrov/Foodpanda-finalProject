import React, { Component } from 'react';
import "./meal.css";

class Meal extends Component {

    state = {
        cart : [

        ]
    }

    

    render () {
        return (
            <li className="meal">
        <div className="meal-wrapper">
            <div className="meal-name">
                <h3><span> {this.props.mealName} </span> </h3>
            </div>
            <div className="add-to-cart">
                <div className="meal-price">
                    <span> {this.props.mealPrice}  </span>
                </div>
                <a onClick={()=> this.props.addToCart()}> <div className="add-item"> <span> + </span> </div> </a>
            </div>
        </div>
            </li>
        )
    }
}

    
    



export default Meal;
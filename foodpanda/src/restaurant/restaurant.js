import React, { Component } from 'react';
import "./restaurant.css"
import FormComponent from "./rating"

class Restaurant extends Component {
    render () {
        return (
            <div className="restaurant">
                <section>
                    <div class="container">
                        <div class="restaurant-image">
                            <img alt="" src="https://cdn10.bigcommerce.com/s-ibjgubc/products/80/images/266/long_lake_pizza__03240.1424065993.1280.1280.jpg?c=2"></img>
                        </div>
                        <div class="overlay">
                            <label>Провери дали ресторантът доставя до: </label>
                            <input type="text"></input>
                            <button>Провери</button>
                        </div>
                    </div>
                    <div class="info" >
                        <div className="restaurant-name">Pizza Verruci</div> 
                        <div>
                            <ul>
                                <li> > Пицария </li>
                                <li> > Италианска кухня </li>
                                <li> > Паста </li>
                            </ul>
                        </div>  
                    </div>
                    <div className="menu"> 
                        <a href="Salads">Салати</a>
                        <a href="Pizza">Пица</a>
                        <a href="Pasta">Паста</a>
                        <a href="Deserts">Десерти</a>
                        <a href="Beverages">Напитки</a>

                    </div>
                        {/* <div  class="ratings">
                            <span>
                                <img font-size="0"
                                 alt="" src="https://assets.foodora.com/23818f1/img/icons/ic-star-sm.svg?23818f1"></img>
                            </span>
                            <span>
                            <strong>4.4</strong> "/5"
                            </span>
                            <span>
                                (40)
                            </span>
                        </div> */}
                </section>
                <aside className="cart">

                </aside>
            </div>
        )
    }
}

export default Restaurant;

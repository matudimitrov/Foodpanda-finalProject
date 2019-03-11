import React, { Component } from 'react';
import "./restaurant.css";
import Cart from '../cart/cart';
import Meal from './menu/meal';

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [

            ],
            menu: [

            ]
        };
    }

    componentDidMount() {
        const currentRestaurant = JSON.parse(sessionStorage.getItem('currentRestaurant'));
        console.log(currentRestaurant);
        const image = document.querySelector('.restaurant-image');
        const restaurantHeader = document.querySelector('.restaurant-header');
        const rating = document.querySelector('.rating .rating-number');
        const priceRange = document.querySelector('.rating .price-range');
        restaurantHeader.innerText =  currentRestaurant.name;
        priceRange.innerText =  currentRestaurant.price;
        rating.innerText = "Rating: " + currentRestaurant.rating + " / 5   ";
        image.style.backgroundImage = `url('${currentRestaurant.image}')`;

        let menu = require('./menu/menu.json');
        menu = menu.categorys[currentRestaurant.id]["menu-items"];
        this.setState({ currentRestaurant });
        this.setState({menu});
        console.log(menu);
        
    }

   
    addToCart = (name, price) => {

        let meal = {
            name, 
            price
        }
        let cart = [...this.state.cart, meal]
        console.log(cart);
        this.setState({cart})
        sessionStorage.setItem('cart', JSON.stringify(this.state.cart));
    }

    render() {
        console.log(this.state.menu);
        const currentRestaurant = JSON.parse(sessionStorage.getItem('currentRestaurant'));
        return (
            <div className="restaurant-wrapper">
                <section>
                    <div className="restaurant-image" />
                   
                    <div className="nav-menu">
                        <h1 className="restaurant-header"> </h1>
                    
                        <div className="rating"> <span className="rating-number">  </span> <span className="price-range">  </span></div>
                    </div>
                    <div className="restaurant-menu nav-menu">
                        <ul className="categories">
                            <li className="category1 cat">Apperizers</li>
                            <li className="category2 cat"> Salads</li>
                            <li className="category3 cat">Desserts</li>
                        </ul>
                    </div>
                    <div className="menu-content">
                        <div className="meals-category1">
                            <ul className="dish-list">
                            {this.state.menu.map(meal => (
                        <Meal addToCart={() => this.addToCart(meal.name, Math.floor(meal['sub-items'][0].price / 30) + ".00")} mealName={meal.name} mealPrice={Math.floor(meal['sub-items'][0].price / 30) + ".00"}/>))}
        

                            </ul>
                        </div>
                    </div>

                </section>

                <Cart restName={currentRestaurant.name} />



            </div>
        )
    }
}

export default Restaurant;

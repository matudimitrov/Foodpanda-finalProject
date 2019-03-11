import React, { Component } from 'react';
import "./restaurant.css";
import Cart from '../cart/cart';


class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
          menu: [
              
          ]
        };
      }
    
    
      componentDidMount() {
        let menu = require('./menu/menu.json');
        let appetizers = menu.categorys[0]["menu-items"];
        let finoSides = menu.categorys[1]["menu-items"];
        let chickenMeals = menu.categorys[2]["menu-items"];
        let sharingPlatters = menu.categorys[3]["menu-items"];
        let desserts =  menu.categorys[4]["menu-items"];
        let sides = menu.categorys[5]["menu-items"];
        let salads = menu.categorys[6]["menu-items"];
        let newOffering = menu.categorys[7]["menu-items"];
        let burgers = menu.categorys[8]["menu-items"];
        menu = [appetizers, finoSides, chickenMeals, sharingPlatters, desserts, sides, salads, newOffering, burgers];
        this.setState({menu});
        
    }
 
    render () {
        console.log(this.state.menu);
       setTimeout(console.log(this.state.isLoaded), 3000) ;
        return (
            <div className="restaurant">
                <section>
                    <div height="250px" className="restaurant-image">
                    <img alt="" src="https://cdn10.bigcommerce.com/s-ibjgubc/products/80/images/266/long_lake_pizza__03240.1424065993.1280.1280.jpg?c=2"></img>
                    </div>
                    <h1>Pizza Verruci</h1>
                </section>
                <Cart />
                

                
            </div>
        )
    }
}

export default Restaurant;

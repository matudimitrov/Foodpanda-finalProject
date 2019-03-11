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
    
    
      
 
    render () {
        console.log(this.state.menu);
       setTimeout(console.log(this.state.isLoaded), 3000) ;
        return (
            <div className="restaurant">
                <section>
                    <div  className="restaurant-image">
                    <img alt="" src="https://cdn10.bigcommerce.com/s-ibjgubc/products/80/images/266/long_lake_pizza__03240.1424065993.1280.1280.jpg?c=2"></img>
                    </div>
                    <h1>Pizza Verruci</h1>
                </section>

                <Cart restName="restaurant1"/>
                

                
            </div>
        )
    }
}

export default Restaurant;

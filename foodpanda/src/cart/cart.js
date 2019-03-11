import React, { Component } from 'react';
import './cart.css';


class Cart extends Component {
    render() {
        return (
            <aside className="cart-wrapper">
                <div className="cart-content">
                    <h3 className="cart-header">Your order from {this.props.restName}</h3>    
                   </div>
            </aside>

        )

    }
}

export default Cart;
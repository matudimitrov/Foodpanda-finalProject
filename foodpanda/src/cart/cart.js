import React, { Component } from 'react';
import './cart.css';


class Cart extends Component {
    state = {
        items: [

        ]
    }

    componentDidMount () {
        let cart  = JSON.parse(sessionStorage.getItem('cart'));
        let items = [...this.state.items];
        this.setState({items});
    }

    render() {
        let items  = JSON.parse(sessionStorage.getItem('cart'));
        
        return (
            <aside className="cart-wrapper">
                <div className="cart-content">
                    <h3 className="cart-header">Your order from {this.props.restName}</h3>    
                    <div className="ordered-meals"> <span className="meals-list"> You haven't added anything to your cart yet! Start ordering your favourite meals!</span> </div>
                   </div>
                   <div className="calculator">
                    <div className="fee">
                    <span> Price without delivery fee: </span> 
                    <span> 0.00 </span>
                    </div>
                    <div className="fee">
                    <span> Delivery fee: </span> 
                    <span> 0.00 </span>
                    </div>
                    <div className="fee">
                    <span> Order price: </span> 
                    <span> 0.00 </span>
                    </div>
                   </div>
                   <button className="order-btn" > Place order </button> 
            </aside>

        )

    }
}

export default Cart;
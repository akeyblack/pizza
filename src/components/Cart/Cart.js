import React from 'react';

import CartList from './CartList';

function Cart () {
    return ( <div className="cart">
        <div className="cart__stages">
            <div className="cart__stage_current">Shopping Cart
                <span>1</span>
            </div>
            <div className="cart__stage">Checkout
                <span>2</span>
            </div>
            <div className="cart__stage">Order Complete
                <span>3</span>
            </div>
        </div>
        <CartList/>
        <div className="cart__delivery">
            <div className="cart__radio-img" style={{backgroundImage: "url('/scooter.svg')"}}/>
            <input checked className="cart__radio" type="radio" id="delivery" name="takeOption"/>
            <label htmlFor="delivery">With Delivery</label>
            <div className="cart__radio-img" style={{backgroundImage: "url('/cart-icon.png')"}}/>
            <input className="cart__radio" type="radio" id="pickUp" name="takeOption"/>
            <label htmlFor="pickUp">Order with Pick Up</label>
        </div>
        <div className="cart__total">
            <span>Order with <b>Pick Up</b> </span>
            <span>Total: <b>{}₴</b></span>
        </div>
        <div>
            <button>Proceed to Checkout</button>
            <button>Update Cart</button>
        </div>
    </div>
    );
}

export default Cart;
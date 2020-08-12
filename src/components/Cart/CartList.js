import React from 'react';
import {connect} from 'react-redux';
import {setCart} from './../../store/Home/actions';

import CartItem from './CartItem';

function CartList (props) {

    function cartFill () {
        let ids = [];
        return props.cart.map( item => {
            ids.push({id:item.id,size:item.size});
            if (ids.filter(x=>x.id===item.id).length===1 || ids.filter(x=>x.size===item.size).length===1)
                return <CartItem 
                item = {
                    props.items.find(array => array.find(x=>x.id===item.id)).find(x=>x.id===item.id)
                } 
                size={item.size} 
                price={item.price}
                count={
                    props.cart.filter(x=>x.id===item.id && x.size===item.size).length
                }
                key={item.id}/>
            else
                return false;
        });
    }
    return ( <table className="cart__items">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            { cartFill() }
        </tbody>
    </table>
    );
}

const mapStateToProps = state => {
    return {  
        cart: state.home.cart,
        items: state.home.items 
    }
}
const dispatchStateToProps = {
    setCart
}

export default connect(mapStateToProps,dispatchStateToProps)(CartList);
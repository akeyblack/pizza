import React from 'react'

function CartItem (props) {
    const getSize = size => {
        console.log(size);
        switch(size) {
        case '0': 
            return "25 сm"
        case '1': 
            return '35 cm'
        case '2':
            return '45 cm'
        default:
            return 'error'
        }
    }
    return ( <tr className="cart-item">
        <td>
            <button className="cart-item__delete"/>
            <img src="/instagram/1.jpg" alt="pizza"></img>
            <div className="cart-item__text">
                <span className="cart-item__name" maxLength="40">{props.item.name}</span>
                <span className="cart-item__description" maxLength="200">{props.item.description}</span>
                <span className="cart-item__description">{getSize(props.size)}</span>
            </div>
        </td>
        <td>
            <div className="cart-item__price">{props.price}₴</div>
        </td>
        <td>
            <div className="cart-item__price">{props.count}</div>
        </td>
        <td>
            <div className="cart-item__price">{props.count*props.price}₴</div>
        </td>
    </tr>
    );
}

export default CartItem;
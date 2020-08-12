import React, {useState, Fragment} from 'react'
import PropTypes from 'prop-types'
import {setCart} from '../../../store/Home/actions'
import {connect} from 'react-redux'

function MenuItem(props) {

    const [size, setSize] = useState('0');
    const [price, setPrice] = useState(props.item.price[0]);

    function onSizeChange (event) {
        setPrice(props.item.price[event.target.value]);
        setSize(event.target.value);
    };

    function onCartAdd () {
        props.setCart({id: props.item.id, size, price});
    }

    function sizeChoice() {
        if (props.pizza)
            return (<Fragment>
                Pick Size: 
                <select className="menu-item__size" onChange={onSizeChange}>
                    <option value='0'>25см</option>     
                    <option value='1'>35см</option>   
                    <option value='2'>45см</option>   
                </select>
            </Fragment>);
    }

    return <li className="menu-item">
        <div className="menu-item__number">{props.number}</div>
        <div maxLength="40" className="menu-item__name">{props.item.name}</div> 
        <div className="menu-item__adding">
            {sizeChoice()}
            <div className="menu-item__price"> {price}₴</div> 
            <button className="menu-item__button" onClick={onCartAdd}/>
        </div>
        <div className="menu-item__break"/>
        <div maxLength="200" className="menu-item__description">{props.item.description}</div>
    </li>
}

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    number: PropTypes.number.isRequired,
    pizza: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        cart: state.home.cart
    };
};

const dispatchStateToProps = {
    setCart
};

export default connect (mapStateToProps,dispatchStateToProps)(MenuItem);
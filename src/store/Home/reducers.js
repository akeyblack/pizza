import { HOME_CHANGE_CART, HOME_CHANGE_ITEMS } from "./actions";

const defaultState = {
    cart: [{id:1, price:120, size:"0"}],
    cartSum: 0,
    items: [ [ 
            {id:1,name:"Margarita", price:[120,200,270], description:"garlic, tomatos, meat"}, 
            {id:2,name:"Mozarella", price:[130,210,290], description:"nutty Swiss cheese, onions"}
        ],[
            {id:4,name:"Cheese", price:[120], description:"garlic, tomatos, meat"}, 
            {id:5,name:"Hamburger", price:[130], description:"nutty Swiss cheese, onions"}, 
            {id:6,name:"Big Mac", price:[90], description: "beautiful child pizza"}, 
            {id:7,name:"Hamburger", price:[130], description:"nutty Swiss cheese, onions"}, 
            {id:8,name:"Big Mac", price:[90], description: "beautiful child pizza"}, 
            {id:9,name:"Hamburger", price:[130], description:"nutty Swiss cheese, onions"}, 
            {id:10,name:"Big Mac", price:[90], description: "beautiful child pizza"}, 
            {id:11,name:"Hamburger", price:[130], description:"nutty Swiss cheese, onions"}, 
            {id:12,name:"Big Mac", price:[90], description: "beautiful child pizza"}, 
            {id:13,name:"Hamburger", price:[130], description:"nutty Swiss cheese, onions"}, 
            {id:14,name:"Big Mac", price:[90], description: "beautiful child pizza"}, 
            {id:15,name:"Hamburger", price:[130], description:"nutty Swiss cheese, onions"}, 
            {id:16,name:"Big Mac", price:[90], description: "beautiful child pizza"}            
        ]
    ]
}

export const homeReducer = (state = defaultState,action) => { 
    switch(action.type) {
        case HOME_CHANGE_CART: 
            return {
                ...state,
                cart: [...state.cart, action.payload],
                cartSum: state.cartSum+=action.payload.price
            }
        case HOME_CHANGE_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        default: 
            return state;
    }
}
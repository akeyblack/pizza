export const HOME_CHANGE_CATEGORY ='HOME_CHANGE_CATEGORY';
export const HOME_CHANGE_CART ='HOME_CHANGE_CART';
export const HOME_CHANGE_ITEMS ='HOME_CHANGE_ITEMS';
//actions creators

export const setCart = item => ({
    type: HOME_CHANGE_CART,
    payload: item
});

export const setItems = items => ({
    type: HOME_CHANGE_ITEMS,
    payload: items
});

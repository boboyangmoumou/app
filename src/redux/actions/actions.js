export const ADD_SHOPCART = ' ADD_SHOPCART';
export const DELETE_GOOD = 'DELETE_GOOD';

export const addShopcart = (selectCart) => ({
    type: ADD_SHOPCART,
    selectCart
})

export const deletegood = (index) => ({
    type: DELETE_GOOD,
    index
})
import { createSelector } from "reselect";

const selectCart = state => state.cart;
const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc,curr)=>acc+curr.quantity,0)
)


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc,curr)=>acc+(curr.quantity*curr.unit_price),0)
)
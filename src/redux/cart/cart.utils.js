export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id == cartItemToAdd.id);
    if(existingCartItem){
        return cartItems.map(cartItem => ((cartItem.id==cartItemToAdd.id) ? 
            {...cartItem,quantity:cartItem.quantity+1}
            :
            cartItem))
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const adjustQuantityFromCart = (cartItems,cartItemToRemove,op) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id == cartItemToRemove.id);
    if(op=="decrement" && existingCartItem.quantity==1){
        return cartItems.filter(cartItem=>!(cartItem.id==cartItemToRemove.id))
    }
    else{
        return cartItems.map(cartItem => ((cartItem.id==cartItemToRemove.id) ? 
            {...cartItem,quantity:(op=="decrement"?cartItem.quantity-1:cartItem.quantity+1)}
            :
            cartItem))
    }
   // return [...cartItems,{...cartItemToRemove,quantity:1}]
}

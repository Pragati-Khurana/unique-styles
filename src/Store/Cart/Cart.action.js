import { CART_ACTION_TYPES } from "./Cart.types";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);

    if(existingCartItem) {
        return cartItems.map((item) => 
        item.id === productToAdd.id ? {...item, quantity: item.quantity+1} : item)
    }
       
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItems = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((item) => item.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter((item) => item.id !== cartItemToRemove.id);
    }

    return cartItems.map((item) => 
        item.id === cartItemToRemove.id ? {...item, quantity: item.quantity-1} : item)
}

const clearCartItems = (cartItems, cartItemToClear) => cartItems.filter((item) => item.id !== cartItemToClear.id);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems}
 }

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItems(cartItems, cartItemToRemove);
    return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems}
 }

export const clearItemsFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItems(cartItems, cartItemToClear);
    return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems}
 }

 export const setIsCartOpen = (isCartOpen) => ({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: isCartOpen});
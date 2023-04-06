import { CART_ACTION_TYPES } from "./Cart.types";

export const setIsCartOpen = (isCartOpen) => ({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: isCartOpen})
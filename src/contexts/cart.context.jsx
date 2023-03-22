import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemsFromCart: () => {}
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [countItems, setCountItems] = useState(0);

    useEffect(() => {
        var totalItems = cartItems.reduce((total, item) => total+item.quantity, 0);
        setCountItems(totalItems);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItems(cartItems, cartItemToRemove));
    }

    const clearItemsFromCart = (cartItemToClear) => {
        setCartItems(clearCartItems(cartItems, cartItemToClear));
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, countItems, removeItemFromCart, clearItemsFromCart};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}
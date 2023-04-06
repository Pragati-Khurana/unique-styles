import { createContext, useReducer } from "react";

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

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    countItems: 0,
    countTotal: 0,
}

const cartReducer = (state, action) => {
    const {type, payload} = action;
    console.log(payload);
    console.log(state);
    switch(type) {
        case 'SET_IS_CART_OPEN':
            return {
                ...state,
                isCartOpen: payload,
            }
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error();
    }
}

export const CartProvider = ({children}) => {
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [countItems, setCountItems] = useState(0);
    // const [countTotal, setCountTotal] = useState(0);

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { isCartOpen, cartItems, countItems, countTotal} = state;

    const setIsCartOpen = (val) => {
        dispatch({type:'SET_IS_CART_OPEN', payload: val});
    }

    const updateCartItemsReducer = (newCartItems) => {
        var newCountItems = newCartItems.reduce((total, item) => total+item.quantity, 0);

        var newCountTotal = newCartItems.reduce((total, item) => total+(item.quantity * item.price), 0);

        const payload = {
            cartItems: newCartItems,
            countItems: newCountItems,
            countTotal: newCountTotal,
        }
            

        dispatch({type: 'SET_CART_ITEMS', payload})
    }


    const addItemToCart = (productToAdd) => {
       const newCartItems = addCartItem(cartItems, productToAdd);
       updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (cartItemToRemove) => {
       const newCartItems = removeCartItems(cartItems, cartItemToRemove);
       updateCartItemsReducer(newCartItems);
    }

    const clearItemsFromCart = (cartItemToClear) => {
       const newCartItems = clearCartItems(cartItems, cartItemToClear);
       updateCartItemsReducer(newCartItems);
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, countItems, removeItemFromCart, clearItemsFromCart, countTotal};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}
import { combineReducers } from "redux";
import { userReducer } from "./User/User.reducer";
import { categoriesReducer } from "./Categories/Category.reducer";
import { cartReducer } from "./Cart/Cart.reducer";

export const RootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})
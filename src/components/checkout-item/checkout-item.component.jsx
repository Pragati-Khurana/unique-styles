import React from "react";
import "./checkout-item.styles.scss";
import {
  addItemToCart,
  clearItemsFromCart,
  removeItemFromCart,
} from "../../Store/Cart/Cart.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../Store/Cart/Cart.selector";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemsHandler = () => dispatch(clearItemsFromCart(cartItems, item));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, item));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, item));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemsHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

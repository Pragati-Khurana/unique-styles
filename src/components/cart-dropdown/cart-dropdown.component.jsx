import React, {useContext} from 'react';
import Button from '../button/button.component';
import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
      navigate('/checkout');
    }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}
 
export default CartDropdown

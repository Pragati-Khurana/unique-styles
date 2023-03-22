import React from 'react';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {[].map((item) => <CartItem CartItem={item} /> )}
        </div>
        <Button>Go to checkout</Button>
    </div>
  )
}
 
export default CartDropdown

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

import { setIsCartOpen } from '../../Store/Cart/Cart.action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectIsCartOpen } from '../../Store/Cart/Cart.selector';

const CartIcon = () => {
  const { countItems } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{countItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
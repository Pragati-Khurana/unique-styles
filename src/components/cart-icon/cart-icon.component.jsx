import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

import { setIsCartOpen } from '../../Store/Cart/Cart.action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from '../../Store/Cart/Cart.selector';

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
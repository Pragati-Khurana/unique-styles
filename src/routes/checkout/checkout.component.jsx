import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const {cartItems} = useContext(CartContext);

  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((item) => (
                <CheckoutItem key={item.id} item={item} />
            ))
        }
        <span className='total'>Total: 0</span>
    </div>
  )
}

export default Checkout
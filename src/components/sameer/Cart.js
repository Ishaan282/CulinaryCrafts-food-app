import React from 'react';
import PRODUCTS from './products';
import { useCartFunctions } from './context/cartFunctions';
import './Cart.css';

const Cart = () => {
  const { cartItems, addItemToCart, removeItemFromCart, calculateTotalPrice } = useCartFunctions();

  return (
    <div className='home-container'>
      <div classNmae ='products'>
      <h2>Products</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItemFromCart(item.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      </div>

      <div className = 'cart'>
      <h2>Shopping Cart</h2>
      <ul>
        {PRODUCTS.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addItemToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      </div>  

      <p className = "total">Total: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Cart;

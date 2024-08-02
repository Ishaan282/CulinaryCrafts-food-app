import React, { useContext } from "react";
import { ShopContext } from "./context/shop-context";
import { PRODUCTS } from "./assets/products";
import { CartItem } from "./Cart-Item";
import { useNavigate } from "react-router-dom";
import CartCSS from "./Cart.module.css";
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className={CartCSS.cart}>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className={CartCSS.cart}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className={CartCSS.bttn}>
          <p> Subtotal: ₹{totalAmount} </p>
          <button> <Link to = "/Incrediants">Continue Shopping</Link></button>
          <button onClick={() => alert("Thanks for shopping!")}>Checkout</button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
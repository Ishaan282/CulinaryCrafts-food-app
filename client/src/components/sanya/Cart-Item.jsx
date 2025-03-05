import React, { useContext } from "react";
import { ShopContext } from "./context/shop-context";
import CartItemCSS from "./Cart.module.css";

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className={CartItemCSS.cartItem}>
            <img src={productImage} />
            <div className={CartItemCSS.description}>
                <p>
                    <b>{productName}</b>
                </p>
                <p> Price: ₹{price}</p>
                <div className={CartItemCSS.countHandler}>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};
import React, { useContext } from 'react';
import { ShopContext } from "./context/shop-context";

import IncrediantsCSS from './Incrediants.module.css';
import apple from './assets/images/apple.jpg'
import tomato from './assets/images/tomato.jpg'
import garlic from './assets/images/garlic.jpg'
import ginger from './assets/images/ginger.jpg'
import onion from './assets/images/onion.jpg'

export const Incrediants = () => {
    const { addToCart, cartItems } = useContext(ShopContext);

    return (
        <div className={IncrediantsCSS.container}>
            <div className={IncrediantsCSS.headercontent}>
                <p>A recipe has no soul.</p>
                <p>You as a cook, must bring soul to the recipe.</p>
                <p>That is why we bring the best incrediants.</p>
                <p>For all works deserves to be a masterpiece.</p>
            </div>
            <div className={IncrediantsCSS.gridcontainer}>

                <div className={IncrediantsCSS.griditem}>
                    <img src={tomato} alt='tomato'></img>
                    <h1>Tomato</h1>
                    <h2>Price: ₹312 per kg</h2>
                    <button className={IncrediantsCSS.button} onClick={() => addToCart(1)}>
                        Add To Cart
                        {cartItems[1] > 0 && <> ({cartItems[1]})</>}
                    </button>
                </div>

                <div className={IncrediantsCSS.griditem}>
                    <img src={apple} alt='apple'></img>
                    <h1>Apple</h1>
                    <h2>Price: ₹1050 per kg</h2>
                    <button className={IncrediantsCSS.button} onClick={() => addToCart(2)}>
                        Add To Cart
                        {cartItems[2] > 0 && <> ({cartItems[2]})</>}
                    </button>
                </div>

                <div className={IncrediantsCSS.griditem}>
                    <img src={ginger} alt='ginger'></img>
                    <h1>Ginger</h1>
                    <h2>Price: ₹345 per kg</h2>
                    <button className={IncrediantsCSS.button} onClick={() => addToCart(3)}>
                        Add To Cart
                        {cartItems[3] > 0 && <> ({cartItems[3]})</>}
                    </button>
                </div>

                <div className={IncrediantsCSS.griditem}>
                    <img src={garlic} alt='garlic'></img>
                    <h1>Garlic</h1>
                    <h2>Price: ₹211 per kg</h2>
                    <button className={IncrediantsCSS.button} onClick={() => addToCart(4)}>
                        Add To Cart
                        {cartItems[4] > 0 && <> ({cartItems[4]})</>}
                    </button>
                </div>

                <div className={IncrediantsCSS.griditem}>
                    <img src={onion} alt='onion'></img>
                    <h1>Onion</h1>
                    <h2>Price: ₹13 per kg</h2>
                    <button className={IncrediantsCSS.button} onClick={() => addToCart(5)}>
                        Add To Cart
                        {cartItems[5] > 0 && <> ({cartItems[5]})</>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Incrediants;
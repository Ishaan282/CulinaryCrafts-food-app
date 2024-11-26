import React from 'react';
import y from './list.module.css'; 
import House from './House';

function ShoppingList({ setOpenShoppingList }) {
    return (
        <div className={`${y.main}`}>
            <div className={`${y.listHeader}`}>
                <p className={`${y.header}`}>Shopping List</p>
                <p className={`${y.header}`}><button className={ `${y.closeButton}`} onClick={() => setOpenShoppingList(false)}><i className="fa-regular fa-rectangle-xmark"></i></button></p> 
            </div>
            <div className={`${y.list}`}>
                <div>
                    <House/>
                </div>
            </div>
        </div>
    );
}

export default ShoppingList;
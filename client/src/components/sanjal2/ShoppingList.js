import React from 'react';
import y from './list.module.css'; 
import axios from 'axios';
import House from './House'

function ShoppingList({ setOpenShoppingList }) {
    return (
        // <div className={`${y.entire}`}>
            <div className={`${y.main}`}>
                <div className={`${y.listHeader}`}>
                    <p className={`${y.header}`}>Shopping List</p>
                    <p className={`${y.header}`}><button className={ `${y.closeButton}`} onClick={() => setOpenShoppingList(false)}><i class="fa-regular fa-rectangle-xmark"></i></button></p> 
                </div>
                {/* TO_DO LIst  V*/}
                <div className={`${y.list}`}>
                    <div>
                        <House/>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}

export default ShoppingList;


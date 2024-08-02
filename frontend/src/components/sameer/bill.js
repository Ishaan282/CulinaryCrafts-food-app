import billCSS from './Billing.module.css'

export const Bill = () => {
    return (
        <div className={billCSS.container}>

            <form>

                <div className={billCSS.row}>

                    <div className={billCSS.col}>

                        <h3 className={billCSS.title}>billing address</h3>

                        <div className={billCSS.inputbox}>
                            <span>full name :</span>
                            <input type="text"></input>
                        </div>
                        <div className={billCSS.inputbox}>
                            <span>email :</span>
                            <input type="email"></input>
                        </div>
                        <div className={billCSS.inputbox}>
                            <span>address :</span>
                            <input type="text"></input>
                        </div>
                        <div className={billCSS.inputbox}>
                            <span>city :</span>
                            <input type="text"></input>
                        </div>

                        <div className={billCSS.flex}>
                            <div className={billCSS.inputbox}>
                                <span>state :</span>
                                <input type="text"></input>
                            </div>
                            <div className={billCSS.inputbox}>
                                <span>zip code :</span>
                                <input type="text"></input>
                            </div>
                        </div>

                    </div>

                    <div className={billCSS.col}>col

                        <h3 className={billCSS.title}>payment</h3>

                        <div className={billCSS.inputbox}>
                            <span>cards accepted :</span>
                            <img src="card_img.png" alt=""></img>
                        </div>
                        <div className={billCSS.inputbox}>
                            <span>name on card :</span>
                            <input type="text" ></input>
                        </div>
                        <div className={billCSS.inputbox}>
                            <span>credit card number :</span>
                            <input type="number"></input>
                        </div>
                        <div className={billCSS.inputbox}>
                            <span>exp month :</span>
                            <input type="text"></input>
                        </div>

                        <div className={billCSS.flex}>
                            <div className={billCSS.inputbox}>
                                <span>exp year :</span>
                                <input type="number"></input>
                            </div>
                            <div className={billCSS.inputbox}>
                                <span>CVV :</span>
                                <input type="text">,/</input>
                            </div>
                        </div>

                    </div>
                </div>
                <button onClick={() => alert("Thanks for shopping!")}>Checkout</button>
            </form>
        </div>
    )
}

export default Bill;
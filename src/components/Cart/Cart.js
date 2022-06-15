import React from "react";
import classes from "./Cart.module.css";
import Header from "../Category/CategoryHeader/CategoryHeader";

class Cart extends React.Component {
    render() {
        return (
            <div className={classes.cartWrapper}>
                <Header/>
            </div>
        )
    }
}

export default Cart;
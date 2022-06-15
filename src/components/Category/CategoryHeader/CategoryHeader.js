import React from "react";
import classes from "./CategoryHeader.module.css";
import logo from './../../../assets/images/logo.svg';
import dollar from './../../../assets/images/$.svg';
import cart from './../../../assets/images/cart.svg'
import {NavLink} from "react-router-dom";

class CategoryHeader extends React.Component {

    render() {
        return (
            <div className={classes.categoryHeaderWrapper}>
                <div className={classes.leftside}>
                    <p>women</p>
                    <p>men</p>
                    <p>kids</p>
                </div>
                <NavLink to="/category"><img src={logo} alt="logo"/></NavLink>
                <div className={classes.rightside}>
                    <div className={classes.dollar}>
                        <img src={dollar} alt="$"/>
                    </div>
                    <div className={classes.cart}>
                        <NavLink to='/cart'><img src={cart} alt="cart"/></NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryHeader;
import React from "react";
import classes from "./CategoryMain.module.css";
import ShopItem from "./ShopItem/ShopItem";

class CategoryMain extends React.Component {
    render() {
        return(
            <div className={classes.categoryMainWrapper}>
                <h1>Category name</h1>
                <div className={classes.itemsWrapper}>
                    <ShopItem/>
                </div>
            </div>
        )
    }
}

export default CategoryMain;
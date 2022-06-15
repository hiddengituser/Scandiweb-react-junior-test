import React from "react";
import CategoryHeader from "./CategoryHeader/CategoryHeader";
import CategoryMain from "./CategoryMain/CategoryMain";


class Category extends React.Component {
    render() {
        return(
            <div>
                <CategoryHeader/>
                <CategoryMain/>
            </div>
        )
    }
}

export default Category;
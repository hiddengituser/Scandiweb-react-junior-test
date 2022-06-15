import React from "react";
import classes from "./App.module.css";
import Category from "./components/Category/Category";
import PDP from "./components/PDP/PDP";
import {Routes, Route} from 'react-router-dom';
import Cart from "./components/Cart/Cart";

class App extends React.Component {
    render() {
        return (
            <div className={classes.wrapper}>
                <Routes>
                    <Route path='/category/*' element={<Category/>}/>
                    <Route path='' element={<Category/>}/>
                    <Route path='/pdp' element={<PDP/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </div>
        )
    }
}

export default App;
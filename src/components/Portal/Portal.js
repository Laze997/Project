import React from "react";
import { Route } from "react-router-dom";

import { NewProduct } from "../NewProduct/NewProduct";
import { Products } from "../Products/Products";
import { Expenses } from "../Expenses/Expenses";
import { Header } from "../Header/Header";


export class Portal extends React.Component{
    render(){
        return(
            <section id="portal">
                
<<<<<<< HEAD
                <Route exact path="/(newproduct|products|expenses)/" component={Header} />
                <Route path = "/newproduct" component = {NewProduct} />
                <Route path = "/products" component = {Products} />
                <Route path = "/expenses" component = {Expenses} />
=======
                <Route path = "/newproduct" component = {NewProduct}/>
                <Route path ="/products" component = {Products}/>
                <Route path ="/expenses" component = {Expenses}/>
>>>>>>> c32406782ced013ffa41627e29c91303ee9a3e4c

            </section>
        )
    }
}
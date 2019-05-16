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
                
                <Route path = "/newproduct" component = {NewProduct}/>
                <Route path ="/products" component = {Products}/>
                <Route path ="/expenses" component = {Expenses}/>

            </section>
        )
    }
}
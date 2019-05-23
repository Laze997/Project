import React from "react";
import "./NewProduct.css"
import { Header } from "../Header/Header";

export class NewProduct extends React.Component {
    render() {
        return (
            <section id="new-prod">

<Header/>
            

    <div className="text-np">
        <h2>New Product</h2>
    </div>

    

    

<div className="new-product">
        <div className="new-p">
                <label className="login-label" htmlFor="productname">Product Name</label>
                <input  type="text" name="productname" className="login-input"/>
                <label className="login-label" htmlFor="desc">Product Description</label> 
                <input type="text" name="desc" className="login-input" /> 
                <label className="login-label" htmlFor="type">Product Type</label>
                <input type="text" name="type" className="login-input"/>
                <label className="login-label" htmlFor="date">Purchase Date</label> 
                <input type="date" name="date" className="login-input" /> 
                <label className="login-label" htmlFor="number">Product Price</label>
                <input type="number" name="number" className="login-input"/>
                <button className="btn" type="submit">CREATE PRODUCT</button>
        </div>
        <div className="plus-logo">
               <span className="logo-size plus"></span>
               <div className="product-text">
                
                <h2>You are creating a new product</h2>
            </div>
        </div>
        

        
</div>
            </section>
                                )
                            }
}
import React from "react";
import "./NewProduct.css"
import Axios from 'axios';

export class Edit extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            productname: "",
            desc: "",
            type: "",
            date: "",
            price: ""
        }
    }
    

    render() {
        return (
            <section id="new-prod">


                <div className="text-np">
                    <h2>Edit Product</h2>
                </div>

                <div className="new-product">
                    <div className="new-p">
                        <label className="login-label" htmlFor="productname">Product Name</label>
                        <input  type="text" name="productname" className="login-input" />
                        <label className="login-label" htmlFor="desc">Product Description</label>
                        <input  type="text" name="desc" className="login-input" />
                        <label className="login-label" htmlFor="type">Product Type</label>
                        <input  type="text" name="type" className="login-input" />
                        <label className="login-label" htmlFor="date">Purchase Date</label>
                        <input  type="date" name="date" className="login-input" />
                        <label className="login-label" htmlFor="price">Product Price</label>
                        <input  type="number" name="price" className="login-input" />
                        <button className="btn" type="submit">CREATE PRODUCT</button>
                    </div>
                    <div className="plus-logo">
                        <span className="logo-size plus"></span>
                        <div className="product-text">

                            <h2>You are editing a product</h2>
                        </div>
                    </div>



                </div>
            </section>
        )
    }
}
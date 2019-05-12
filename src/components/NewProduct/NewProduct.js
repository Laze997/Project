import React from "react";
import "./NewProduct.css"

export class NewProduct extends React.Component {
    render() {
        return (
            <section id="new-product">

                <div className="text-np">
                    <h2>New Product</h2>
                </div>

                <div className="new-product">
                    <div className="new-p">
                        <label className="login-label" for="productname">Product Name</label>
                        <input type="text" name="productname" className="login-input" />
                        <label className="login-label" for="desc">Product Description</label>
                        <input type="text" name="desc" className="login-input" />
                        <label className="login-label" for="type">Product Type</label>
                        <input type="text" name="type" className="login-input" />
                        <label className="login-label" for="date">Purchase Date</label>
                        <input type="date" name="date" className="login-input" />
                        <label className="login-label" for="number">Product Price</label>
                        <input type="number" name="number" className="login-input" />
                        <button className="btn" type="submit">CREATE PRODUCT</button>
                    </div>
                    <div className="plus-logo">

                        <div className="logo-className">
                            <span className="logo-size"><i className="fas fa-plus-circle"></i></span>
                            <div className="product-text">

                                <h2>You are creating a new product</h2>
                            </div>

                        </div>

                    </div>



                </div>
            </section>
        )
    }
}
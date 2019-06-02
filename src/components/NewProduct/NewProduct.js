import React from "react";
import "./NewProduct.css"
import Axios from 'axios';

export class NewProduct extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            productname: "",
            desc: "",
            type: "",
            date: "",
            price: ""
        }
        this.newProduct = this.newProduct.bind(this);
        this.handleFieldsChange = this.handleFieldsChange.bind(this)
    }
    newProduct(){
        let data = {
            "productname": this.state.productname,
            "desc": this.state.desc,
            "type": this.state.type,
            "date": this.state.date,
            "price": this.state.price
        }

        var formData = new FormData();
        formData.append('productname', this.state.productname);
        formData.append('desc', this.state.desc);
        formData.append('type', this.state.type);
        formData.append('date', this.state.date);
        formData.append('number', this.state.price);

        Axios.post("http://localhost:3000/newproduct", {
            productname : this.state.productname,
            desc : this.state.desc,
            type : this.state.type,
            date : this.state.date,
            price : this.state.price
        })
        .then((res) => console.log("NEWPRODUCT RESULT: ", res.formData))
        .catch((err) => console.error(err));
    }

    handleFieldsChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        return (
            <section id="new-prod">


                <div className="text-np">
                    <h2>New Product</h2>
                </div>





                <div className="new-product">
                    <div className="new-p">
                        <label className="login-label" htmlFor="productname">Product Name</label>
                        <input onInput={this.handleFieldsChange} type="text" name="productname" className="login-input" />
                        <label className="login-label" htmlFor="desc">Product Description</label>
                        <input onInput={this.handleFieldsChange} type="text" name="desc" className="login-input" />
                        <label className="login-label" htmlFor="type">Product Type</label>
                        <input onInput={this.handleFieldsChange} type="text" name="type" className="login-input" />
                        <label className="login-label" htmlFor="date">Purchase Date</label>
                        <input onInput={this.handleFieldsChange} type="date" name="date" className="login-input" />
                        <label className="login-label" htmlFor="price">Product Price</label>
                        <input onInput={this.handleFieldsChange} type="number" name="price" className="login-input" />
                        <button onClick={this.newProduct} className="btn" type="submit">CREATE PRODUCT</button>
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
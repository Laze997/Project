import React from "react";
import "./NewProduct.css"
import Axios from 'axios';

export class NewProduct extends React.Component {
    constructor(props) {
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


    newProduct() {
        var access_token = localStorage.getItem("access_token", access_token);
        
        Axios.post('http://localhost:3000/newproduct', this.state, {
        headers:{
            'Authorization': `Bearer ${access_token}`,
            'Access-Control-Allow-Origin': '*',
            'mode': 'no-cors'
          }
        }   
        )
            .then( res => {
                
                console.log("Product Res:", res);
                this.props.history.push("/products")
            }
            )
            .catch(err => console.log(err))
    }


    handleFieldsChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // newProduct() {
    //     const access_token = localStorage.getItem('access_token')

    //     Axios.post('http://localhost:3000/newproduct', this.state, {
    //         // headers: {
    //         //     access_token
    //         // }
    //     })
    //     .then(res => {
    //         access_token()
    //         this.props.history.push('/products')
    //     })
    //         .catch(err => console.log(err))

    // }




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
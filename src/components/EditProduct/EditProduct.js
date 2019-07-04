import React from "react";
import "../NewProduct/NewProduct.css";
import moment from "moment";
import Axios from 'axios';

export class EditProduct extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            productname: "",
            desc: "",
            type: "",
            date: "",
            price: "",
            product: this.props.location.state.product
        }

        this.editProduct = this.editProduct.bind(this);
        this.hanldeField = this.hanldeField.bind(this)
    }

    editProduct(){
        const access_token = localStorage.getItem('access_token')

        Axios.patch('http://localhost:3000/editproduct/' + this.state.product._id , this.state.product, {
            headers:{
                'Authorization': `Bearer ${access_token}`,
                'Access-Control-Allow-Origin': '*',
                'mode': 'no-cors'
              }
        })
        .then( res => {
            
            this.props.history.push('/products')
        })
            .catch(err => console.log(err))
    
    }

    hanldeField(e) {
        let newEditProduct = {...this.state.product, [e.target.name]: e.target.value };
        this.setState({
            product: newEditProduct
        })
    }


    

    render() {
        var product = this.state.product
        return (
            <section id="new-prod">


                <div className="text-np">
                    <h2>Edit Product</h2>
                </div>

                <div className="new-product">
                    <div className="new-p">
                        <label className="login-label" htmlFor="productname">Product Name</label>
                        <input value={product.productname} onChange={this.hanldeField}  type="text" name="productname" className="login-input" />
                        <label className="login-label" htmlFor="desc">Product Description</label>
                        <input value={product.desc} onChange={this.hanldeField}  type="text" name="desc" className="login-input" />
                        <label className="login-label" htmlFor="type">Product Type</label>
                        <input value={product.type} onChange={this.hanldeField}  type="text" name="type" className="login-input" />
                        <label className="login-label" htmlFor="date">Purchase Date</label>
                        <input value={moment(product.date).format('DD MMM YYYY')} onChange={this.hanldeField}  type="date" name="date" className="login-input" />
                        <label className="login-label" htmlFor="price">Product Price</label>
                        <input value={product.price} onChange={this.hanldeField} type="number" name="price" className="login-input" />
                        <button onClick={this.editProduct} className="btn" type="submit">EDIT PRODUCT</button>
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
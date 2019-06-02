import React from "react";

import { NavLink } from "react-router-dom"
import "./Products.css"
import Axios from "axios";

export class Products extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
            ],
            err: {
                show: false,
                errorMsg: ""
            },

            isHidden: true,

        }
        this.fetchProducts = this.fetchProducts.bind(this)
        this.toggleAlert = this.toggleAlert.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    componentDidMount() {
        this.fetchProducts();
        this.deleteProduct();
    }

    toggleAlert() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    fetchProducts() {
        fetch("http://localhost:3000/products")
            .then(res => { return res.json() })
            .then(res => {
                this.setState({ products: res });
            })
            .catch(err => {
                this.setState(state => {
                    return {
                        ...state,
                        show: true,
                        errorMsg: err
                    }
                })
            })

    }

    deleteProduct = product => () => {

        Axios.delete('http://localhost:3000/products/' + product._id)
            .then((res) => {
                this.setState({ product: res.data })
            })
    }






    render() {

        return (
            <section id="products">

                <div className="select">
                    <h2 className="products-text">Products</h2>
                    <select className="select-opt">
                        <option value="0">Year</option>
                        <option value="1">Highest Price</option>
                        <option value="2">Lowest Price</option>
                        <option value="3">Latest Purchases</option>
                    </select>

                    <p className="filter">Filter by:</p>

                </div>

                <div className="table-products">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Type</th>
                                <th>Product Description</th>
                                <th>Purchase Date</th>
                                <th>Product Price</th>
                                <th>Customize</th>
                            </tr>

                            {
                                this.state.products.map((product) => {
                                    return (
                                        <tr key={product._id} className="products">
                                            <td>{product.productname}</td>
                                            <td>{product.desc}</td>
                                            <td>{product.type}</td>
                                            <td>{product.date}</td>
                                            <td>{product.price}</td>
                                            <td><button onClick={this.toggleAlert} className="th-btn trash"></button>
                                                <button className="th-btn edit">
                                                    {/* <NavLink to={"http://localhost:3000/edit/"}/> */}
                                                </button>
                                            </td>

                                        </tr>
                                    )
                                })

                            }

                        </tbody>
                    </table>


                </div>

                <div className="products-btns">
                    <button className="product-btn">
                        NEW CALCULATION
        </button>

                    <button className="calc-btn">
                        <NavLink className="nav-btn" to="/newproduct"> NEW PRODUCT </NavLink>
                    </button>
                </div>

                {
                    this.state.isHidden
                        ?
                        null
                        :
                        <div className="alert">
                            <div className="white-box">
                                <div className="alert-text">
                                    <h4 className="pr-title">Delete Product</h4>
                                    <p className="pr-text">You are about to delete this product. Are you sure you wish to continue?</p>
                                </div>
                                <div className="alert-btns">
                                    <button onClick={this.toggleAlert} className="cancel-btn">CANCEL</button>
                                    <button onClick={this.deleteProduct} className="delete-btn">DELETE</button>
                                </div>

                            </div>


                        </div>
                }

            </section>
        )
    }
}
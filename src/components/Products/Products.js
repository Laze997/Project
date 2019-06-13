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
            selectedId: {},


        }
        this.fetchProducts = this.fetchProducts.bind(this)
        this.toggleAlert = this.toggleAlert.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
        this.toEditProduct = this.toEditProduct.bind(this)
        this.productFilter = this.productFilter.bind(this)
    }

    componentDidMount() {
        this.fetchProducts();
    }

    toggleAlert(id) {
        this.setState(
            state => {
                return {
                    isHidden: !state.isHidden,
                    selectedId: id
                }

            })
    }

    toEditProduct = (product) => () => {
        this.props.history.push('/editproduct', { product });
    }

    fetchProducts() { 
        const access_token = localStorage.getItem("access_token")

        fetch("http://localhost:3000/products", {
            headers : {
                access_token
            }
        })
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

    deleteProduct(id) {
        let data = {
            "id": id,
        }
        Axios.delete("http://localhost:3000/products/" + id, data)
            .then((res) => console.log("DELETE RESULT: ", res.data))
            .then(res => {
                this.setState({
                    isHidden: true
                })
            })
            .catch((err) => console.error(err));
    }

    productFilter(e) {
        var type = e.target.value;
        var products = this.state.products;

        if (type === 'lowestPrice') {
            this.setState({
                products: products.sort((x, y) => {
                    if (x.price <= y.price) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
            })
        }

        if (type === 'highestPrice') {
            this.setState({
                products: products.sort((x, y) => {
                    if (x.price >= y.price) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
            })
        }

        
        if (type === "latestPurchase") {
            this.setState({
                products: products.sort((x, y) => {
                    if (x.date >= y.date) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
            })
        }
    }







    render() {

        return (
            <section id="products">

                <div className="select">
                    <h2 className="products-text">Products</h2>
                    <select onChange={this.productFilter} className="select-opt">
                        <option value="0">Year</option>
                        <option value="highestPrice">Highest Price</option>
                        <option value="lowestPrice">Lowest Price</option>
                        <option value="latestPurchase">Latest Purchases</option>
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
                                this.state.products.map(product => (
                                    <tr className="products" key={product._id}>
                                        <td>{product.productname}</td>
                                        <td>{product.desc}</td>
                                        <td>{product.type}</td>
                                        <td>{product.date}</td>
                                        <td>{product.price}</td>
                                        <td><button className="th-btn trash" onClick={() => this.toggleAlert(product._id)}></button>
                                            <button onClick={this.toEditProduct(product)} className="th-btn edit"></button>
                                        </td>
                                    </tr>
                                ))
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
                                    <button onClick={() => this.deleteProduct(this.state.selectedId)} className="delete-btn">DELETE</button>
                                </div>

                            </div>


                        </div>
                }

            </section>
        )
    }
}
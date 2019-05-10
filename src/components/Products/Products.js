import React from "react";
import {NavLink} from "react-router-dom"
import avatar from "../../assets/pictures/captain-beefheart-watercolor-portrait4-fabrizio-cassetta.jpg"

import "./Products.css"

export class Products extends React.Component {
render() {
return (
<section id="products">
    <div id="header">
        <div className="div-buttons">
            <button className="btn1">
                <NavLink className="green" to="/products"> PRODUCTS</NavLink>
            </button>
            <button className="btn2">
                <NavLink className="black" to="/expenses">EXPENSES</NavLink>
            </button>
        </div>

        <div className="div-pic">
            <img src={avatar} alt="avi" className="header-pic" />
            <p className="header-name">Lazar Stepanoski</p>
        </div>
    </div>

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
            <tr className="categories">
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Product Description</th>
                <th>Purchase Date</th>
                <th>Product Price</th>
                <th>Customize</th>
            </tr>

            <tr className="products">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>Carbonated Drink</td>
                <td>29/4/2019</td>
                <td>75</td>
                <td><button className="th-btn delete-btn"></button>
                <button className="th-btn edit-btn"></button></td>

            </tr>

            <tr className="products">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>Carbonated Drink</td>
                <td>29/4/2019</td>
                <td>75</td>
                <td><button className="th-btn delete-btn"></button>
                <button className="th-btn edit-btn"></button></td>

            </tr>
        </table>


    </div>

    <div className="products-btns">
        <button className="product-btn">
            NEW CALCULATION
        </button>

        <button className="calc-btn">
            NEW PRODUCT
        </button>
    </div>


    <div className="alert">
        <div className="white-box">
            <div className="alert-text">
                <h4 className="pr-title">Delete Product</h4>
                <p className="pr-text">You are about to delete this product. Are you sure you wish to continue?</p>
            </div>
            <div className="alert-btns">
                <button className="cancel-btn">CANCEL</button>
                <button className="delete-btn">DELETE</button>
            </div>

        </div>


    </div>
</section>
)
}
}
import React from "react";


import "./Expenses.css"


export class Expenses extends React.Component {
    render() {
        return (
            <section id="expenses">

                <div className="expense-text">
                    <h2>Expenses</h2>
                </div>

                <div className="expense-select">
                    <div className="exp-btns">
                        <button className="exp-btn1">MONTHLY</button>
                        <button className="exp-btn2">YEARLY</button>
                    </div>
                    <div className="exp-div">
                        <p className="exp-filter">Choose a Month:</p>
                        <select className="expense-opt">
                            <option value=''>--Select Month--</option>
                            <option selected value='1'>January</option>
                            <option value='2'>February</option>
                            <option value='3'>March</option>
                            <option value='4'>April</option>
                            <option value='5'>May</option>
                            <option value='6'>June</option>
                            <option value='7'>July</option>
                            <option value='8'>August</option>
                            <option value='9'>September</option>
                            <option value='10'>October</option>
                            <option value='11'>November</option>
                            <option value='12'>December</option>
                        </select>
                    </div>

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
                                
                            </tr>


                            <tr className="products">
                                <td>Coca Cola</td>
                                <td>Drink</td>
                                <td>Carbonated Drink</td>
                                <td>29/4/2019</td>
                                <td>75</td>

                            </tr>

                            <tr className="products">
                                <td>Coca Cola</td>
                                <td>Drink</td>
                                <td>Carbonated Drink</td>
                                <td>29/4/2019</td>
                                <td>75</td>
                            </tr>
                        </tbody>
                    </table>


                </div>

                <div className="result">
                    <h3 className="res-text">Total spend: 150 den</h3>
                </div>
            </section>
        )
    }
}
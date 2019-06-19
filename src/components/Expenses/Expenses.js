import React from "react";


import "./Expenses.css"


export class Expenses extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
            ],
            err: {
                show: false,
                errorMsg: ""
            },
            total: "",
            selected: "monthly" 

        }
        this.fetchProducts = this.fetchProducts.bind(this)
        this.totalSum = this.totalSum.bind(this)
        this.setYearly = this.setYearly.bind(this)
        this.setMonthly = this.setMonthly.bind(this)

    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts() {
        var access_token = localStorage.getItem("access_token")
        if(!access_token){
            this.props.history.push("/")
        }

        fetch("http://localhost:3000/expenses",  {
            method: "GET",
                headers:{
                    'Authorization': `Bearer ${access_token}`,
                    'Access-Control-Allow-Origin': '*',
                    'mode': 'no-cors'
                  }
        })
          .then(res => {
            return res.json();
          })
          .then(res => this.setState({
              products : res
          }))
          .catch(err => {
            this.setState(state => {
              return {
                error: {
                  ...state.error,
                  show: true,
                  errorMsg: err
                }
              };
            });
          });
          
        }
      

    setYearly(){
        this.setState({
            selected: "yearly"
        })
    }

    setMonthly(){
        this.setState({
            selected: "monthly"
        })
    }


    totalSum(){
        var totalPrice = this.state.products.reduce(function (prev, total) {
            return prev + total.price;
        }, 0);

        return totalPrice
    }

    
    render() {
        return (
            <section id="expenses">

                <div className="expense-text">
                    <h2>Expenses</h2>
                </div>

                <div className="expense-select">
                    <div className="exp-btns">
                        <button  className={(this.state.selected === "monthly") ? "exp-btn1" : "exp-btn2"} onClick={this.setMonthly} >MONTHLY</button>
                        <button className={(this.state.selected === "yearly") ? "exp-btn1" : "exp-btn2"} onClick={this.setYearly} >YEARLY</button>
                    </div>
                    <div className="exp-div">
                        <p className="exp-filter">Choose a Month:</p>
                        <select className="expense-opt">
                            <option value=''>--Select Month--</option>
                            <option defaultValue='1'>January</option>
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


                            {
                                    this.state.products.map((product) => {
                                        return (
                                            <tr key={product._id} className="products">
                                                <td>{product.productname}</td>
                                                <td>{product.desc}</td>
                                                <td>{product.type}</td>
                                                <td>{product.date}</td>
                                                <td>{product.price}</td>
                                        </tr>
                                        )
                                    })

                            }
                        </tbody>
                    </table>


                </div>

                <div className="result">
                    <h3 className="res-text">Total spend: {this.totalSum()} denari</h3>
                </div>
            </section>
        )
    }
}
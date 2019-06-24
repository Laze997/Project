import React from "react";
import moment from "moment"


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
        this.yearlyFilter = this.yearlyFilter.bind(this)
        this.monthlyFilter = this.monthlyFilter.bind(this)

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
              products : res,
              allProducts: res
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


    monthlyFilter(e) {
        const month = e.target.value

        if (month === "products") {
            return this.setState({
                products: this.state.allProducts
            })
        }

        const filterProduct = this.state.allProducts.filter((product) => {
            if (String(moment(product.date).month()) === month) {
                return true;
            }
            return false;
        })
        this.setState({
            products: filterProduct
        })
        console.log(filterProduct)
    }

    yearlyFilter(e) {
        const year = e.target.value

        if (year === "products") {
            return this.setState({
                products: this.state.allProducts
            })
        }

        const filterProducts = this.state.allProducts.filter((product) => {
            if (String(moment(product.date).years()) === year) {
                return true;
            }
            return false;
        })
        this.setState({
            products: filterProducts
        })
        console.log(filterProducts)
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

                    {           
                        this.state.selected === "monthly" ?

                    <div className="exp-div">
                        <p className="exp-filter">Choose a Month:</p>
                        <select onChange={this.monthlyFilter} className="expense-opt">
                            <option value="products">Select a Month</option>
                            <option value='0'>January</option>
                            <option value='1'>February</option>
                            <option value='2'>March</option>
                            <option value='3'>April</option>
                            <option value='4'>May</option>
                            <option value='5'>June</option>
                            <option value='6'>July</option>
                            <option value='7'>August</option>
                            <option value='8'>September</option>
                            <option value='9'>October</option>
                            <option value='10'>November</option>
                            <option value='11'>December</option>
                        </select>
                    </div>
                    :

                    <div className="exp-div">
                    <p className="exp-filter">Choose a Year:</p>
                    <select onChange={this.monthlyFilter} className="expense-opt">
                        <option value='products'>--Select Year--</option>
                        <option value="0">2016</option>
                        <option value='1'>2017</option>
                        <option value='2'>2018</option>
                        <option value='3'>2019</option>
                        <option value='4'>2020</option>
                    </select>
                </div>
                    }

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
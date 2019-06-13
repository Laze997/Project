import React from "react";
import {NavLink} from "react-router-dom"
import Axios from "axios"

import "./Login.css"

export class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : ""
        }

        this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
        this.logIn = this.logIn.bind(this)

    }


    logIn() {
        let data = {
          "email": this.state.email,
          "password": this.state.password
        }
    
        var formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
    
        Axios.post("http://localhost:3000/", {
          email: this.state.email,
          password: this.state.password
        },
        { headers: {"Authorization" : "Bearer" + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhemFyc3RlcDEyM0BnbWFpbC5jb20iLCJpYXQiOjE1NjA0MzQ0MTV9.gCFwq2q4waQHoRyk7jLZM9Pk7VT5XYxySBReBKXZpo0"} }
       ).then( res => {
          this.props.history.push('/products')
        })
          .catch(err => console.log(err))
    
      }
    

    HandleFieldsChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    render() {
        return (
            <section id="login">
                <div className="center-div">
                    <div>
                        <form className="login-form">
                            <label className="login-label" htmlFor="email">E-mail</label>
                            <input onInput={this.HandleFieldsChange} type="email" name="email" className="login-input" />
                            <label className="login-label" htmlFor="password">Password</label>
                            <input onInput={this.HandleFieldsChange} type="password" name="password" className="login-input" />
                            <button onClick={this.logIn} className="btn">SIGN IN</button>
                        </form>
                        <p className="text">Or if you don't have an account,<NavLink className="link" to="/register"> Register</NavLink></p>

                    </div>
                </div>
            </section>
        )
    }
}




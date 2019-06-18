import React from "react";
import { NavLink } from "react-router-dom"

import "./Register.css"
import Axios from "axios";

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      date: "",
      telephone: "",
      country: "",
      password: "",
    }

    this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
    this.RegisterUser = this.RegisterUser.bind(this);
  }

  RegisterUser() {
    Axios.post('http://localhost:3000/register', this.state)
    .then(res => {
        const access_token = res.data.token;
        localStorage.setItem("access_token", access_token);
        this.props.history.push('/')
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
      <section id="register">
        <div className="center-div">
          <div className="login-container-margintop">
            <div className="login-form">
              <label className="login-label" htmlFor="firstname">First Name</label>
              <input onInput={this.HandleFieldsChange} type="text" name="firstname" className="login-input" />
              <label className="login-label" htmlFor="lastname">Last Name</label>
              <input onInput={this.HandleFieldsChange} type="text" name="lastname" className="login-input" />
              <label className="login-label" htmlFor="email">Email</label>
              <input onInput={this.HandleFieldsChange} type="email" name="email" className="login-input" />
              <label className="login-label" htmlFor="date">Date of birth</label>
              <input onInput={this.HandleFieldsChange} type="date" name="date" className="login-input" />
              <label className="login-label" htmlFor="telephone">Telephone</label>
              <input onInput={this.HandleFieldsChange} type="number" name="telephone" className="login-input" />
              <label className="login-label" htmlFor="country">Country</label>
              <input onInput={this.HandleFieldsChange} type="text" name="country" className="login-input" />
              <label className="login-label" htmlFor="password">Password</label>
              <input onInput={this.HandleFieldsChange} type="password" name="password" className="login-input" />
              <button onClick={this.RegisterUser} className="btn">REGISTER</button>
            </div>
            <p className="text">Or if you have an account, <NavLink className="link" to="/"> Log In </NavLink></p>
          </div>




        </div>
      </section>
    )
  }
}
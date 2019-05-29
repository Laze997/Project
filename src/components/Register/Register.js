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
    let data = {
      "firstname": this.state.firstname,
      "lastname": this.state.lastname,
      "email": this.state.email,
      "date": this.state.date,
      "telephone": this.state.telephone,
      "country": this.state.country,
      "password": this.state.password,
    }

    var formData = new FormData();
    formData.append('firstname', this.state.firstname);
    formData.append('lastname', this.state.lastname);
    formData.append('email', this.state.email);
    formData.append('date', this.state.date);
    formData.append('telephone', this.state.telephone);
    formData.append('country', this.state.country);
    formData.append('password', this.state.password);

    Axios.post("http://localhost:3000/register", {
      firstname : this.state.firstname,
      lastname : this.state.lastname,
      email : this.state.email,
      date : this.state.date,
      telephone : this.state.telephone,
      country : this.state.country,
      password : this.state.password
  })
      .then((res) => console.log("REGISTER RESULT: ", res.formData))
      .catch((err) => console.error(err));
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
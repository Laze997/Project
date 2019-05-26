import React from "react";
import {NavLink} from "react-router-dom"

import "./Login.css"

export class Login extends React.Component {
    render() {
        return (
            <section id="login">
                <div className="center-div">
                    <div>
                        <form className="login-form">
                            <label className="login-label" htmlFor="email">E-mail</label>
                            <input type="email" name="email" className="login-input" />
                            <label className="login-label" htmlFor="password">Password</label>
                            <input type="password" name="password" className="login-input" />
                            <button className="btn">SIGN IN</button>
                        </form>
                        <p className="text">Or if you don't have an account,<NavLink className="link" to="/register"> Register</NavLink></p>

                    </div>
                </div>
            </section>
        )
    }
}






// Axios.post("http://localhost:3000/register",{
//       firstname : this.state.firstname,
//       lastname : this.state.lastname,
//       email : this.state.email,
//       date : this.state.date,
//       telephone : this.state.telephone,
//       country : this.state.country,
//       password : this.state.password
//     })
//     .then((res => {
//       const access_token = res.data.access_token;
//       await localStorage.setItem("access_token", access_token);
//       this.props.history.push("/")
//     }))
//   }
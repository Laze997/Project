import React from "react";

import "./Register.css"

export class Register extends React.Component {
    render() {
        return (
            <section id="register">
                <div className="center-div">
                    <div className="login-container-margintop">
                        <form className="login-form">
                            <label className="login-label" for="firstname">First Name</label>
                            <input type="text" name="firstname" className="login-input" />
                            <label className="login-label" for="lastname">Last Name</label>
                            <input type="text" name="lastname" className="login-input" />
                            <label className="login-label" for="email">Email</label>
                            <input type="email" name="email" className="login-input" />
                            <label className="login-label" for="date">Date of birth</label>
                            <input type="date" name="date" className="login-input"/>
                            <label className="login-label" for="number">Telephone</label>
                            <input type="number" name="number" className="login-input" />
                            <label className="login-label" for="country">Country</label>
                            <input type="text" name="country" className="login-input" />
                            <label className="login-label" for="password">Password</label>
                            <input type="password" name="password" className="login-input" />
                            <button className="btn">REGISTER</button>
                        </form>
                            <p className="text">Or if you have an account, <a className="link">Log In</a></p>
        </div>




                    </div> 
            </section>
                )
            }
}
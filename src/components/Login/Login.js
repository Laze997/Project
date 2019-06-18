import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
        this.logIn = this.logIn.bind(this);
    }


   logIn(e){
    e.preventDefault()
    axios.post('http://localhost:3000/', {
            email: this.state.email,
            password: this.state.password
        }
        ).then(res => {
            localStorage.setItem("access_token", res.data.access_token)
            this.props.history.push("/products")
        })
        .catch(err => {
            localStorage.removeItem("access_token")
            this.props.history.push("/")
        })
    }

    HandleFieldsChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render()
     {
        return (
            <section id="login">
                <div className="center-div">
                    <div>
                        <form className="login-form">
                            <label className="login-label" htmlFor="email">E-mail</label>
                            <input type="email" name="email" className="login-input" placeholder="" onChange={e => this.HandleFieldsChange(e)} value={this.state.email} />
                            <label className="login-label" htmlFor="password">Password</label>
                            <input type="password" name="password" className="login-input" placeholder="" onChange={e => this.HandleFieldsChange(e)} value={this.state.password} />
                            <button className="btn" onClick={this.logIn}>SIGN IN</button>
                        </form>
                        <p className="text">Or if you don't have an account,<NavLink className="link" to="/register"> Register</NavLink></p>

                    </div>
                </div>
            </section>
        )
    }
}




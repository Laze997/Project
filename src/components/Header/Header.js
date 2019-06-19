import React from "react";
import avatar from "../../assets/pictures/captain-beefheart-watercolor-portrait4-fabrizio-cassetta.jpg"
import {NavLink} from "react-router-dom"
import "../../assets/css/global.css"

export class Header extends React.Component {
    render() {
        return (
            <section className="header">
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

                        <button className="logout" onClick={() => {
                            localStorage.removeItem("access_token")
                            this.props.history.push("/");

                        }}>LOG OUT</button>
                    </div>
                </div>
            </section>
        )
    }
}
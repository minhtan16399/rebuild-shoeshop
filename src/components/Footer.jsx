import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="top_footer">
                    <div className="container">
                        <div className="row justify-content-evenly">
                            <div className="footer-content left col-6 col-md-4">
                                <h5>GET HELP</h5>
                                <ul>
                                    <li><NavLink>Contact us</NavLink></li>
                                    <li><NavLink>Shopping</NavLink></li>
                                    <li><NavLink>NIKEiD</NavLink></li>
                                    <li><NavLink>Nike+</NavLink></li>
                                </ul>
                            </div>
                            <div className="footer-content mid col-6 col-md-4">
                                <h5>ORDERS</h5>
                                <ul>
                                    <li><NavLink>Payment options</NavLink></li>
                                    <li><NavLink>Shipping and delivery</NavLink></li>
                                    <li><NavLink>Returns</NavLink></li>
                                </ul>
                            </div>
                            <div className="footer-content right col-12 col-md-4">
                                <h5>REGISTER</h5>
                                <ul>
                                    <li>
                                        <p>Create one account to manage everything you do with Nike, from your shopping preferences to
                                            your Nike+ activity.</p>
                                    </li>
                                    <li><NavLink className="footer-click-add" to='register'>Learn more</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bot_footer">
                    <div className="container">
                        <div className="row justify-content-evenly">
                            <div className="footer-content col col-md-4">
                                <h5>EMAIL SIGN UP</h5>
                                <ul>
                                    <li>
                                        <p>Be the first to know about new products and special offers.</p>
                                    </li>
                                    <li><NavLink className="footer-click-add">Sign up now</NavLink></li>
                                </ul>
                            </div>
                            <div className="footer-content col col-md-4">
                                <h5>GIFT CARDS</h5>
                                <ul>
                                    <li>
                                        <p>Give the gift that always fits.</p>
                                    </li>
                                    <li><NavLink className="footer-click-add">View cards</NavLink></li>
                                </ul>
                            </div>
                            <div className="footer-content col-md-4">
                                <h5>STORES NEAR YOU</h5>
                                <ul>
                                    <li>
                                        <p>Locate a Nike retail stories or authorized retailler.</p>
                                    </li>
                                    <li><NavLink className="footer-click-add">Search</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-tertiary px-2">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link me-2" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link me-2" to="/">Men</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link me-2" to="/">Women</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link me-2" to="/">Kid</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link me-2" to="/">Sport</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="header py-2 px-3">
                <div className="container-fluid d-flex justify-content-between">
                    <img src="./img/image 3.png" alt="" />
                    <div className="d-flex">
                        <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <NavLink><img className="modal-body" src="./img/image 8.png" alt />
                            </NavLink>
                            <span className="quatity-count me-3">0</span>
                        </div>
                        <NavLink className="me-3" to='/'>Login</NavLink>
                        <NavLink className="me-3" to='register'>Register</NavLink>
                    </div>
                </div>
            </header>
        )
    }
}

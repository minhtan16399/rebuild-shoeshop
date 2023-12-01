import React, { Component } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ModalFade from '../components/ModalFade'

export default class HomeTemplate extends Component {
    render() {
        return (
            <div>
                <Header />
                <ModalFade />
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        )
    }
}

import React, { Component } from 'react'
import Carousel from '../components/Carousel'
import ProductList from '../util/ProductList'
import Modal from '../util/Modal'
import { Outlet } from 'react-router'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Outlet/>
        <ProductList/>
      </div>
    )
  }
}

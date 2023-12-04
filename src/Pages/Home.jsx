import React, { Component } from 'react'
import ProductList from '../util/ProductList'
import { Outlet } from 'react-router'
import ShoeStores from '../util/ShoeStores'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Outlet/>
        {/* <ProductList/> */}
        <ShoeStores/>
      </div>
    )
  }
}

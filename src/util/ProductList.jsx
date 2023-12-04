import React, { Component } from 'react'
import DataProduct from '../Data/data.json'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderProductItem = () => {
        return DataProduct.map((prop, index) => {
            return <div className="item card mx-1 mb-4 mb-md-5 col-md-3 col-5" key={prop.id}>
                <ProductItem product={prop} />
            </div>
        })
    }
    render() {
        return (
            <div className="products mt-3">
                <div className="container">
                    <div className="title text-center">
                        <h3>- Products Feature -</h3>
                    </div>
                    <div className="products_show py-3 mt-4">
                        <div className="content row justify-content-evenly">
                            {this.renderProductItem()}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

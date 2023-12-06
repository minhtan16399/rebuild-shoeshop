import React, { Component } from 'react'
import ProductItem from './ProductItem'
import Modal from './Modal';


export default class ProductList extends Component {

    renderProductItem = () => {
        let { ArrProducts, content } = this.props;

        return ArrProducts.map((prod) => {
            return <div className="item card mx-1 mb-4 mb-md-5 col-md-3 col-5" key={prod.id}>
                <ProductItem product={prod} handleClickBuy={this.props.setStateItem} detail={this.props.content} />
            </div>
        })
    }

    render() {

        return (
            <div className="products mt-3">
                {/* <Modal content={this.props.content} /> */}

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

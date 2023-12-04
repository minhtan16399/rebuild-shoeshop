import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class ProductItem extends Component {

    render() {
        let { product } = this.props
        return (
            <div>
                <img className="card-img-top" src={product?.image} alt />
                <h5 className="card-title text-center">{product?.name}</h5>
                <div className="card_footer row">
                    <NavLink className="button-buy btn col-6" to='detail'>Buy Now</NavLink>
                    <span className="price col-6">{product?.price}</span>
                </div>
            </div>

        )
    }
}

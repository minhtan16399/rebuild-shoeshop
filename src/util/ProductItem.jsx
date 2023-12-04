import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './Modal';


export default class ProductItem extends Component {
    //  state = {};


    render() {
        let { product, handleClickBuy } = this.props;
        return (
            <div>
                <img className="card-img-top" src={product.image} />
                <h5 className="card-title text-center">{product.name}</h5>
                <div className="card_footer row">
                    <NavLink type='button' className="button-buy btn col-6"  onClick={() => {
                        document.body.scrollTop = 600;
                        document.documentElement.scrollTop = 600;
                        handleClickBuy(product);                       
                    }}>Buy Now</NavLink>
                    <span className="price col-6">{product.price}</span>
                </div>
            </div>

        )
    }
}

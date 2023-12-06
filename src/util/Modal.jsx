import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let { content } = this.props
        return (
            <div id='modal' className="product_detail my-5 d-none">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="detail_left mb-4 col-md-6">
                            <div className="card">
                                <img className="card-img-top w-100" src={content?.image} />
                            </div>
                        </div>
                        <div className="detail_right mt-5 col-md-6">
                            <h3 className="detail_right_title">{content?.name}</h3>
                            <p className="descript">{content?.description}</p>
                            <div className="my-4">
                                <span className="total-price alert alert-light text-black">${content?.price}</span>
                            </div>
                            <div className="quantity d-inline d-flex my-4">
                                <button id="btnMinus" className="btn text-black btn-outline-secondary" ><i className="fa-solid fa-minus" /></button>
                                <span className="number-quantity alert alert-light text-black py-0">1</span>
                                <button id="btnPlus" className="btn text-black btn-outline-secondary" ><i className="fa-solid fa-plus" /></button>
                            </div>
                            <button id="addCart" className="btn btn-success px-4 py-2" onClick={()=>{console.log(content);}}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import Data from '../Data/data.json';
import Modal from './Modal';
import ProductList from './ProductList';

const DataProduct = Data;
export default class ShoeStores extends Component {
    state = {
        itemDetail: {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        }
    }
    setStateItem = (product) => {
        this.setState({
            itemDetail: product
        });
        console.log(Data);
    }

    render() {

        return (
            <div className="">
                <div className="container">
                    <Modal content={this.state.itemDetail} />

                </div>
                <ProductList ArrProducts={DataProduct} setStateItem={this.setStateItem} content={this.state.itemDetail} />
            </div>
        )
    }
}

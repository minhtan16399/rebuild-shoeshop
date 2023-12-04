import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner pb-5">
                    <div className="container">
                        <div className="carousel-item active">
                            <img src='./img/image 4.png' classname="d-block w-75 mx-auto mx-sm-0" alt="..." />
                            <div className="carousel-caption d-none d-sm-block w-25">
                                <h5>Product name</h5>
                                <p>Product description ....</p>
                                <button className="btn btn-danger">Buy now</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/image 4.png" className="d-block w-75 mx-auto mx-sm-0" alt="..." />
                            <div className="carousel-caption d-none d-sm-block w-25">
                                <h5>Product name</h5>
                                <p>Product description ....</p>
                                <button className="btn btn-danger">Buy now</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/image 4.png" className="d-block w-75 mx-auto mx-sm-0" alt="..." />
                            <div className="carousel-caption d-none d-sm-block w-25">
                                <h5>Product name</h5>
                                <p>Product description ....</p>
                                <button className="btn btn-danger">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}

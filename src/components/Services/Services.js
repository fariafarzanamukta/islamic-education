import React from 'react';
import './Services.css'


const Services = () => {
    return (
        <div className="container">
            <div className="service-title">
                <h2>Our Services</h2>
            </div>

            <div className="teams p-4 g-4">
                <div className="row ">
                    <div className="col-md-6">
                        <div className="cart">
                            <div className="cart-details">
                                <img className="w-50" src="images" alt="" />
                            </div>
                            <div className="text-area">
                                <h4>Title:</h4>
                                <p>Price:</p>

                                <button className="btn btn-success">More Details</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState("");


    useEffect(() => {
        fetch(
            './data.json'
        )
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [services]);
    return (
        <div className="container all-teams">
            <div className="all-team">
                <h1>Our Services</h1>
            </div>
            <div className="teams">
                <div className="row">

                    <div className="col-md-6">
                        <div className="cart">
                            <div className="cart-details">
                                <img className="w-50" src="" alt="" />
                            </div>
                            <div className="text-area">
                                <Link to='/details'>
                                    <button className="btn btn-success">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Services;
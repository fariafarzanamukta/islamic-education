import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./Service.css";

const Service = (props) => {
    const { img, title, price, id } = props.service;

    const url = `/homes/${id}`
    return (
        <div className="container">
            <div className="service-info">
                <div className="service-img">
                    <img className='w-100' src={img} alt="" />
                </div>
                <div className="service-details">
                    <h5>{title}</h5>
                    <h5>Price:{price}</h5>
                    <Link to={url}>
                        <button>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
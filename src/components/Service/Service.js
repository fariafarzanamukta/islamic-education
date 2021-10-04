import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./Service.css";

const Service = (props) => {
    const { img, title, price, id } = props.service;

    const url =`/homes/${id}`
    return (
        <div className="conatiner">
            <div className="service-info">
                <div className="service-img">
                    <img className='w-75' src={img} alt="" />
                </div>
                <div className="details-info">
                    <h5>Title:{title}</h5>
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
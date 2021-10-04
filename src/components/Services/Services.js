import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch(
            './data.json'
        )
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className="align-items-center justify-content-center">
            <h1>Our Services</h1>
            <div className="services-info">
                {
                    services.map(service => <Service
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
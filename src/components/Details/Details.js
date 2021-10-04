import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./Details.css";

const Details = () => {
    const { detailsId } = useParams();
    const [coursedetails, setCouserdetails] = useState({});

    useEffect(() => {
        let abc = '';
        fetch(`http://localhost:3000/data.json`)
            .then(res => res.json())
            .then(data => {
                abc = data.find(result => (result.id === (detailsId)))
                setCouserdetails(abc);
            })
    }, [detailsId])
    return (
        <div>
            <div className="details-info">
                <Navbar></Navbar>
            </div>
            <br /><br />

            <div className="container">
                <img src={coursedetails?.img} alt="" />
                <h4>Title:{coursedetails?.title}</h4>
                <h4>Price{coursedetails?.price}</h4>
                <h4>Instructor Name:{coursedetails?.InstructorName}</h4>
                <h4>Instructor Info:{coursedetails?.InstructorInfo}</h4>
                <h4>Description:{coursedetails?.description}</h4>

            </div>

        </div>


    );
};

export default Details;
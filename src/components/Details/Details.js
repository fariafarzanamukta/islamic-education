import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import OurService from '../../OurService/OurService';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./Details.css";

const Details = () => {
    const { detailsId } = useParams();
    const [coursedetails, setCouserdetails] = useState({});

    useEffect(() => {
        let abc = '';
        fetch(`https://gist.githubusercontent.com/fariafarzanamukta/186b06d76187a986d5ef2cd286fc2661/raw/e931bba9989683a0b4d27f27df35e347ea79ece0/gistfile1.txt`)
            .then(res => res.json())
            .then(data => {
                abc = data.find(result => (result.id === (detailsId)))
                setCouserdetails(abc);
            })
    }, [detailsId])
    return (

        <div className="container">
            <div className="detail">
                <Navbar></Navbar>
            </div>
            <div className="details">
                <img src={coursedetails?.img} alt="" />
                <h4><b>{coursedetails?.title}</b></h4>
                <h5><b>Price:</b>{coursedetails?.price}</h5>
                <h5><b className="">Instructor Name:</b>{coursedetails?.InstructorName}</h5>
                <p><b>Instructor Information:</b>{coursedetails?.InstructorInfo}</p>
                <p><b>Description:</b>{coursedetails?.description}</p>
                <Link to="/home"><button>Back</button></Link>
            </div>
            <Footer></Footer>
        </div >



    );
};

export default Details;
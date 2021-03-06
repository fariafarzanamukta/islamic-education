
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Footer from '../Footer/Footer';

import Navbar from '../Navbar/Navbar';
import './About.css';


const About = () => {
    return (

        <div className="about">
            <Navbar></Navbar>
            <div className="container about-info">
                <h2>Followers of Islam are called Muslims</h2>
                <div className="about-details">
                    <CardGroup className="">
                        <Card>
                            <Card.Img variant="top" className="about-img w-100" src="https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <Card.Body>
                                <Card.Title>Learn With Islam</Card.Title>
                                <Card.Text>
                                    Followers of Islam aim to live a life of complete submission to Allah. They believe that nothing can happen without Allah’s permission, but humans have free will.Mosques are places where Muslims worship.
                                    Some important Islamic holy places include the Kaaba shrine in Mecca, the Al-Aqsa mosque in Jerusalem, and the Prophet Muhammad’s mosque in Medina.
                                </Card.Text>
                                <button>Read More</button>
                            </Card.Body>

                        </Card>

                    </CardGroup>
                </div>
            </div>
            <Footer></Footer>


        </div>
    );
};

export default About;
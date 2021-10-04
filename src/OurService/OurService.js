import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import "./OurService.css";
import { Card, CardGroup } from 'react-bootstrap';

const OurService = () => {
    return (
        <div className="ourservice">
            <Navbar></Navbar>

            <div className="">
                <h1>Our Services</h1>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" className="islam-img" src="https://media.istockphoto.com/vectors/vector-islam-kuran-ramadan-islamic-arabic-symbolism-vector-id1169856943?k=20&m=1169856943&s=612x612&w=0&h=2nEEXOJpwZwfkaTz7t1qLTPWAJtazmJjkEmYK4K-svs=
                " />
                        <Card.Body>
                            <Card.Title>Salat</Card.Title>
                            <Card.Text>
                                Salah is the second of the Five Pillars of Islam.It is the belief that Muslims should pray five times each day.Prayer is important as it allows Muslims to communicate with Allah, listen to Allah and follow in the footsteps of the prophets.follow in the footsteps of the prophets.
                            </Card.Text>
                            <button>Read More</button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" className="islam-img" src="https://media.istockphoto.com/photos/muslim-man-is-praying-in-mosque-picture-id1001021150?k=20&m=1001021150&s=612x612&w=0&h=6IQjNNZzZUKdz5COrH4P3Yj1QakFytxZcxMKUXIz02A=" />
                        <Card.Body>
                            <Card.Title>Quran</Card.Title>
                            <Card.Text>
                                The Quran, also romanized Qur'an or Koran, is the central religious text of Islam, believed by Muslims to be a revelation from God. It is widely regarded as the finest work in classical Arabic literature. It is organized in 114 chapters, which consist of verses.
                            </Card.Text>
                            <button>Read More</button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OurService;
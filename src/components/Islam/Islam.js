import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./Islam.css";



const Islam = () => {
    return (
        <div className="islam">
            <div>
                <Navbar></Navbar>
                <br /><br />
                <div className="container">
                    <div className="islam-info">
                        <h2> Pillar of Islam</h2>
                        <div className="pillar">
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" className="w-100 h-50 img" src="https://quranayat.com/wp-content/uploads/2020/06/The-Shahadah-The-First-Pillar-of-Islam-Quran-Ayat.jpg" />
                                    <Card.Body>
                                        <Card.Title>SHAHADAH</Card.Title>
                                        <Card.Text>
                                            It reads: "I bear witness that there is no god but (Allah), and I bear witness that Muhammad is His Messenger." The Shahada declares belief in the oneness (tawhid) of God (Allah) and the acceptance of Muhammad as God's messenger. Some Shias also include a statement of belief
                                        </Card.Text>
                                        <button>Read More</button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" className="w-100 h-50 img" src="https://www.jannatalquran.com/wp-content/uploads/2017/07/Salah.jpg" />
                                    <Card.Body>
                                        <Card.Title>SALAH</Card.Title>
                                        <Card.Text>
                                            Salah is the second of the Five Pillars of Islam . It is the belief that Muslims should pray five times each day. Prayer is important as it allows Muslims to communicate with Allah, listen to Allah and follow in the footsteps of the prophets.follow in the footsteps of the prophets.
                                        </Card.Text>
                                        <button>Read More</button>
                                    </Card.Body>

                                </Card>
                            </CardGroup>
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" className="w-100 h-50 img" src="https://www.globalsadaqah.com/blog/wp-content/uploads/2021/03/A-Second-Ramadan-in-a-Pandemic-How-Have-Things-Changed-1-1024x536.png" />
                                    <Card.Body>
                                        <Card.Title>JAKAT</Card.Title>
                                        <Card.Text>
                                            According to the Hanafi madhab, zakat is 2.5% of wealth that has been in one's possession for a lunar year. If wealth amounts to less than a threshold figure, termed the nisab, then no zakat is payable. If wealth amounts to more than the nisab, zakat becomes obligatory.
                                        </Card.Text>
                                        <button>Read More</button>
                                    </Card.Body>

                                </Card>
                                <Card>
                                    <Card.Img variant="top" className="w-100 h-50 img" src="https://static01.nyt.com/images/2019/08/09/us/politics/09hajj3/merlin_158983836_4646245e-fb6e-4f04-99b4-c73a1d14f06a-jumbo.jpg" />
                                    <Card.Body>
                                        <Card.Title>HAJJ</Card.Title>
                                        <Card.Text>
                                            Muslims believe that the rituals of Hajj have their origin in the time of the prophet Ibrahim (Abraham). Muhammad led the Hajj himself in 632, the year of his death. The Hajj now attracts about three million pilgrims every year from across the world.year from across the world
                                        </Card.Text>
                                        <button>Read More</button>
                                    </Card.Body>

                                </Card>
                                <Card>
                                    <Card.Img variant="top" className="w-100 h-50 img" src="https://pbs.twimg.com/media/EXe6XqlWsAMDjZG.jpg" />
                                    <Card.Body>
                                        <Card.Title>FASTING</Card.Title>
                                        <Card.Text>
                                            During Ramadan, Muslims abstain from eating any food, drinking any liquids, smoking cigarettes, and engaging in any sexual activity, from dawn to sunset. That includes taking medication (even if you swallow a pill dry, without drinking any water)  without drinking any water).
                                        </Card.Text>
                                        <button>Read More</button>
                                    </Card.Body>

                                </Card>
                            </CardGroup>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <Footer></Footer>
                </div>
            </div>
        </div>

    );
};

export default Islam;
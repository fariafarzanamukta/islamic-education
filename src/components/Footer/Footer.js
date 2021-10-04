import React from 'react';
import './Footer.css';



const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="left-container text-start">
                                <h1>Tazkum</h1>
                                <p className="mt-4 ">
                                    <small>
                                        These include the Quran (given to Muhammad), the Torah (given to Moses), the Gospel (given to Jesus), the Psalms (given to David), and the Scrolls (given to Abraham).
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>tazkum © . All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 p-4">
                            <div className="footer-menu-container">
                                <div className="icon-fab">
                                    <i class="fab fa-facebook-square"></i>
                                    <i class="fab fa-twitter-square"></i>
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div>
                                        <h5>+123456789</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">

                                    </div>
                                    <div>
                                        <p>
                                            16 RoadNo. , New York, NY 10038,
                                            <br /> 10002 1st Avenue, New York, NY 10001
                                        </p>
                                    </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="right-footer-container">
                                <h3>Sign up</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
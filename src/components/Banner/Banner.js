import React from 'react';
import Navbar from "../Navbar/Navbar";
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <div className="banner-container ">
                <div className="">
                    <div className="row d-flex banner align-items-center justify-content-center">
                        <Navbar></Navbar>
                        <div className="col-md-9">
                            <h1 className="title">
                                Assalamu Alaikum
                            </h1>
                            <p className="text-white text-center mt-2">
                                Islam is the second largest religion in the world after Christianity, with about 1.8 billion Muslims worldwide. Although its roots go back further, scholars typically date the creation of Islam to the 7th century, making it the youngest of the major world religions. Islam started in Mecca.
                            </p>
                            <button className="mt-3 about-btn">Read More</button>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
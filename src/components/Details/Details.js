import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';

const Details = () => {
    const { serviceId } = useParams();
    console.log(serviceId);

    const [details, setDetails] = useState({});
    console.log(details);

    useEffect(() => {
        fetch(
            './data.json')
            .then((res) => res.json())
            .then((data) => setDetails(data))
    }, []);
    return (
        <div>
            <div className=" details-container">
                <Navbar></Navbar>
                <div className="details">


                    <div className="row d-flex details-teams align-items-center justify-content-center">
                        <div className="col-md-6">
                            <div className="team-img">
                                <img className="w-50" src={details.img} alt="" />
                            </div>
                            <h3>{details.title}</h3>
                            <p>{details.price}</p>

                        </div>
                        <div className="col-md-6">
                            <div className="description-team">
                                <p>{details.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;
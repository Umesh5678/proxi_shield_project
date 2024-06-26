import React, { useEffect, useState } from "react";
import './Style.css';
import { Link } from "react-router-dom";

export default function Saleresponsive() {

    const [cNames, setCNames] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCNames(data)

            });
    }, []);

    const countries = cNames.map((item) => {
        return item.name.common
    })


    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-5 bg-light">

                            <ul>
                                <li className=" d-inline-block ml-3"> <Link to={'/'}>Home</Link></li>
                                <li className=" d-inline-block ml-3"><i className="fa-solid fa-chevron-right"></i></li>
                                <li className=" d-inline-block ml-3">Company</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1 className="c1">Sales Representative</h1>
                    {/* <center><h1>Coming Soon</h1></center> */}
                    <div className="row">
                        <div className="col-md-4">
                            <p>please select a location below.</p>
                            <div className="c11">
                                <h3 className="c12">Search By</h3>
                                <select id="inputState" className="c13 form-control">
                                    {countries.map((city, index) => (
                                        <option key={index}>{city}</option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        <div className="col-md-8">
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0720822744292!2d74.73210247480216!3d19.104493451078188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb07d76ddc4a1%3A0x7e8a5d2a19c41a33!2sSwasthya%20Hospital%20And%20Medical%20Research%20Center!5e0!3m2!1sen!2sin!4v1701795021192!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0720822744292!2d74.73210247480216!3d19.104493451078188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb07d76ddc4a1%3A0x7e8a5d2a19c41a33!2sSwasthya%20Hospital%20And%20Medical%20Research%20Center!5e0!3m2!1sen!2sin!4v1701795021192!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: "0" }}
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Google Maps Embed"
></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
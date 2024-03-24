import React from "react";
import './Style.css';
export default function Contact(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-5 bg-light">
                 
                 <ul>
                    <li className=" d-inline-block ml-3"><a href="#">Home</a></li>
                    <li className=" d-inline-block ml-3"><i className="fa-solid fa-chevron-right"></i></li>
                    <li className=" d-inline-block ml-3">Company</li>
                 </ul>
                </div>
            </div>
        </div>
        <section className="bg-light">
        <div className="container pt-5 pb-5">
        <h2 className="c1">Contact</h2>
            <div className="row mt-4 mb-4">
                
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="font-weight-bold">Leave Us Message</h2>
                            {/* <h1 className="text-primary">_____</h1> */}

                        </div>
                        <div className="col-md-6 mt-2">
                            <input type="text" placeholder="First Name*" className="form-control"/>
                        </div>
                        <div className="col-md-6 mt-2">
                            <input type="text" placeholder="Last Name*" className="form-control"/>
                        </div>
                        <div className="col-md-6 mt-2">
                            <input type="text" placeholder="Email*" className="form-control"/>
                        </div>
                        <div className="col-md-6 mt-2">
                            <input type="text" placeholder="Phone*" className="form-control"/>
                        </div>
                        <div className="col-md-6 mt-2">
                            <input type="text" placeholder="Subject*" className="form-control"/>
                        </div>
                        
                        <div className="col-12 mt-2">
                            <textarea  className="form-control" rows="5" placeholder="Message*..."></textarea>
                        </div>
                        <div className="col-12 mt-2">
                            <button className="btn btn-primary btn-lg">Send Message</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2>Address</h2>
                    <ul type="none" className="pl-0">
                        <li className="mt-4 font-weight-bold"><i className="text-primary fa-solid fa-location-dot"></i>Registered officeMYK Arment Private Limited CIN- U24114TG2006PTC050128.8-2-703/A, 3rd Floor Leela Gopal Towers, Rd No: 12,Banjara Hills Hyderabad – 500 034</li>
                        <li className="mt-4 font-weight-bold"><i className=" text-primary fa-solid fa-envelope"></i>proxishield@gmail.com</li>
                        <li className="mt-4 font-weight-bold"><i className="text-primary fa-solid fa-phone"></i>+91 8976 567 3401</li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}
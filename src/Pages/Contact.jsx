import React from "react";
import './Style.css';
import EmailLink from "./EmailLink";
import { Link } from "react-router-dom";
export default function Contact(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-5 bg-light">
                 
                 <ul>
                    <li className=" d-inline-block ml-3"><Link to={'/'}>Home</Link></li>
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
                            <button className="btn btn-outline-primary btn-lg">Send Message</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2>Address</h2>
                    <ul type="none" className="pl-0">
                        <li className="mt-4 font-weight-bold"><i className="text-primary fa-solid fa-location-dot"></i> Registered Office : Proxi Shield Pvt Ltd. <br />   Gat No. 1282 , Ganga club , Haveli , Pune, (Near Panchashil Tower),Kharadi. <br /> Opp. Dhole Patil Engi. College </li>
                        <li className="mt-4 font-weight-bold"><i className=" text-primary fa-solid fa-envelope"></i> <EmailLink email="proxishieldpune@gmail.com" /></li>
                        <li className="mt-4 font-weight-bold"><i className="text-primary fa-solid fa-phone"></i>+91 88050 81326</li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}
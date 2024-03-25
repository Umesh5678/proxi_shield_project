import React from "react";
import './Style.css';
import { Link } from "react-router-dom";
export default function Comapny(){
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
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="c1">Company</h2>
                        <h3 className="c2">About us</h3>
                        <p>
At Proxi Shield, we are dedicated to setting new benchmarks of excellence and reliability within the global construction chemical industry. Our philosophy revolves around the understanding that delivering exceptional products and services goes beyond mere offerings. We believe in crafting solutions that not only meet but exceed industry expectations.</p>
                        <p>Driven by innovation, we continuously elevate our product and service standards to cater to the evolving needs of our clientele. Collaborating closely with our customers, we pinpoint their specific requirements, whether it's pioneering product advancements, heightened operational efficiency, or specialized application insights. Every engagement with our customers is a progressive stride towards achieving excellence together.</p>
                        <p>Our commitment is fortified by enduring partnerships with architects, contractors, specifiers, and other industry stakeholders, who provide top-tier products and unparalleled technical guidance. We take pride in our comprehensive product portfolio, which encompasses a diverse range including admixtures, grouts & anchors, repair mortars, adhesives, waterproofing solutions, and more.</p>

                        
                        <p>Manufactured across multiple locations including Hyderabad, Bhiwandi, Kolkata, and Vapi, our products embody the fusion of cutting-edge technology and expertise sourced from various global partners. Leveraging the pinnacle of innovation, we ensure that our offerings resonate both with the Indian and global markets, providing a distinctive amalgamation of technological prowess and localized expertise. At Proxi Shield, we stand as a beacon of innovation, integrity, and excellence, dedicated to shaping the future of construction chemicals worldwide.</p>
                        
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
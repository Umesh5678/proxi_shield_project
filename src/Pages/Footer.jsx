import React from "react";
import './Style.css';
export default function Footer(){
    return(
        <>
        <section className="bg-dark">
        <div className="container-fluid bg-dark p-5 text-white">
            <div className="row">
               <div className="col-md-4">
                    <img src="https://mykarment.com/wp-content/uploads/2018/05/myk-logo.png" alt=""/>
                    
               </div>
               <div className="col-md-2">
                    <h2>Contact Info</h2>
                    <p className="mt-4"><i className="text-primary fa-solid fa-location-dot"></i> Registered OfficeMYK Arment Private Limited(Formerly Known as, MYK Schomburg India Pvt. Ltd.)8-2-703/A, 3rd Floor, Leela Gopal Towers, Rd No: 12, Banjara Hills Hyderabad – 500 034</p>
                    <h6 className="mt-1">Phone:+91 8950 678 2340</h6>
                    <h6 className="mt-1">Email:abc@gamil.com</h6>
                    <h6 className="mt-1">CIN-U24114TG2006PTC0501</h6>
                    
               </div>
               <div className="col-md-2">
                <h2>Quick Links</h2>
                <h6 className="mt-4">Home</h6>
                <h6 className="mt-4">Comapny</h6>
                <h6 className="mt-4">Product</h6>
                <h6 className="mt-4">supports</h6>
                <h6 className="mt-4">Contact Us</h6>
                <h6 className="mt-4">Media & Gallary</h6>

               </div>
              
               <div className="col-md-4">
                <h2 className="ml-5">Follow Us</h2>
                <ul>
                    
                    <li className="d-inline-block ml-2 mt-3 text-white"><i className="fa-brands fa-whatsapp"></i></li>
                    <li className="d-inline-block ml-4 mt-3 text-white"><i className="fa fa-facebook mr-2"></i></li>
                    <li className="d-inline-block ml-4 mt-3 text-white"><i className="fa fa-twitter mr-2"></i></li>
                    <li className="d-inline-block ml-4 mt-3 text-white"><i className="fa-brands fa-instagram"></i></li>
                    <li className="d-inline-block ml-4 mt-3 text-white"><i className="fa fa-youtube mr-2"></i></li>
                </ul>
               </div>
            </div>
            
        </div>
        </section>
        <section className="bg-secondary">
            <div className="container-fluid">
            <div className="row no-gutters">
            
            <div className="col-md-6 mt-3">
           <center> <p className="text-white" >Copyright @ 2024 mky araman private limited. All Rights Reserved.</p></center>
            <p className="text-white " style={{marginLeft:"140px"}}>Develop by <a href="#">mkv</a></p>
            </div>
            <div className="col-md-6">
                
            </div>
            
            </div>
            </div>
        </section>
        {/* <section className="bg-dark">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                    <p className=" text-muted" >Copyright @ 2021 Swasthya Hospital. All Rights Reserved.</p>
                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>
        </section> */}
        </>
    )
}
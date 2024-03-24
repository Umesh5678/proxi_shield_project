import React from "react";
import './Style.css';
import { NavLink } from "react-router-dom";


export default function Navbar(){
    return(        <>
        <div className="container_fluid color_format_back ">
            <div className="row">
                <div className="col-md-6">
                    
                    <center><img src="https://mykarment.com/wp-content/uploads/2018/05/myk-logo.png" width="200"  className=""/></center>
                </div>
                <div className="col-md-6 d-none d-md-block">
                <ul>
                        <li className="d-inline-block ml-2 mt-2 text-white"><i className="fa-solid fa-envelope mr-2"></i>proxyshield@gmail.com</li>
                        <li className="d-inline-block ml-2 mt-2 text-white"><i className="fa-solid fa-phone mr-2"></i>Call: 0290 898 2340</li>
                        <li className="d-inline-block ml-4 mt-2 text-white">Marathi | English</li>
                        <li className="d-inline-block ml-4 mt-2 text-white"><i className="fa fa-facebook mr-2"></i></li>
                        <li className="d-inline-block ml-4 mt-2 text-white"><i className="fa fa-twitter mr-2"></i></li>
                        <li className="d-inline-block ml-4 mt-2 text-white"><i className="fa fa-youtube mr-2"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-12 bg-dark ">
            <nav className="navbar navbar-expand-lg navbar-light ">
                
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-3 ">
                          <li className="nav-item">
                          <NavLink className="nav-link text-light" to='/'>HOME</NavLink>
                                
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link text-white ml-5" href="#">COMPANY</a> */}
                                <NavLink className="nav-link ml-5" to='/Company'>COMPANY</NavLink>
                            </li>
                           
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle text-white ml-5" to='/application' id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PRODUCTS</NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {/* <NavLink className="dropdown-item" href="/Waterproofing">Waterproofing</NavLink>
                                <NavLink className="dropdown-item" href="#">Flooring & Coating</NavLink>
                                <NavLink className="dropdown-item" href="#">Repair & Restoration</NavLink>
                                <NavLink className="dropdown-item" href="#">Grouts & Anchors</NavLink>
                                <NavLink className="dropdown-item" href="#">Building & Joint Sealants</NavLink>
                                <NavLink className="dropdown-item" href="#">Concrete Admixture</NavLink> */}

                                

                                <a></a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* <a className="nav-link dropdown-toggle text-white ml-5" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                APPLICATION
                                </a> */}
                                <NavLink className="nav-link dropdown-toggle text-white ml-5" to='/application' id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">APPLICATION</NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* <a className="nav-link dropdown-toggle text-white ml-5" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               REFERENCE PROJECT
                                </a> */}
                                <NavLink className="nav-link dropdown-toggle text-white ml-5" to='/reference project' id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">REFERENCE PROJECT</NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* <a className="nav-link dropdown-toggle text-white ml-5" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                CONTACT
                                </a> */}
                                <NavLink className="nav-link" to='/Contact'>CONTACT</NavLink>
                               
                            </li>
                            <li className="nav-item dropdown">
                                {/* <a className="nav-link dropdown-toggle text-white ml-5" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SUPPORT
                                </a> */}
                                <NavLink className="nav-link dropdown-toggle text-white ml-5" to='/Salesresponesive' id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SUPPORT</NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {/* <a className="dropdown-item" href="#">Sales Responesive</a> */}
                                <NavLink className="dropdown-item text-black" to='/Salesresponesive'>Sales Responesive</NavLink>
                                
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white ml-5" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                MEDIA & GALLARY
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {/* <a className="dropdown-item" href="#">Events</a> */}
                                <NavLink className="dropdown-item" to='/Events'>Events</NavLink>
                                {/* <a className="dropdown-item" href="#">Video libaray</a> */}
                                <NavLink className="dropdown-item" to='/Videolibaray'>Video Libaray</NavLink>
                                
                                </div>
                            </li>
                        </ul>
                    </div>
            </nav>
            
        </div>
        </>
    )
}







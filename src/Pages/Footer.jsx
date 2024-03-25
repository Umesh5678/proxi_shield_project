import React from "react";
import './Style.css';
import { Link } from "react-router-dom";
import logo from './Images/PROXI SHIELD LOGO FINAL.png';

export default function Footer(){
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    return(
        <>
        <section style={{backgroundColor: 'rgb(52 192 230 / 99%)'}}>
        <div className="container-fluid  p-5 " style={{color:"black"}}>
            <div className="row">
               <div className="col-md-3">
                    <img src={logo} width={300} alt=""/>
                    
               </div>
               <div className="col-md-3 pl-5">
                <h2>Quick Links</h2>
                <Link to={`/`} style={{color:'black'}} onClick={scrollToTop}><h6 className="mt-4">Home</h6></Link>
                <Link to={`/Company`} style={{color:'black'}} onClick={scrollToTop}><h6 className="mt-4">Comapny</h6></Link>
                <Link to={`/Product`} style={{color:'black'}} onClick={scrollToTop}><h6 className="mt-4">Product</h6></Link>
                <Link to={`/Support`} style={{color:'black'}} onClick={scrollToTop}><h6 className="mt-4">supports</h6></Link>
                <Link to={`/Contact`} style={{color:'black'}} onClick={scrollToTop}><h6 className="mt-4">Contact Us</h6></Link>
                <Link to={`/Event`} style={{color:'black'}} onClick={scrollToTop}><h6 className="mt-4">Media & Gallary</h6></Link>

               </div>
               <div className="col-md-3">
                    <h2>Contact Info</h2>
                    <p className="mt-4"><i className="text-primary fa-solid fa-location-dot"></i> Registered Office : Proxi Shield Pvt Ltd. <br /> Gat No. 1282 , Ganga club , Haveli , Pune, (Near Panchashil Tower),Kharadi. <br /> Opp. Dhole Patil Engi. College </p>
                    <h6 className="mt-2">Phone:+91 88050 81326</h6>
                    <h6 className="mt-2">Email: <a href="mailto:proxishieldpune@gmail.com"></a>proxishieldpune@gmail.com</h6>
                    {/* <h6 className="mt-1">CIN-U24114TG2006PTC0501</h6> */}
                    
               </div>
               
              
               <div className="col-md-3">
                <h2 className="ml-5">Follow Us</h2>
                <ul className="fa-icons-bar"> 
                    <li className="d-inline-block ml-2 mt-3 text-dark"><i className="fa-brands fa-whatsapp "  ></i></li>
                    <li className="d-inline-block ml-4 mt-3 text-dark"><i className="fa fa-facebook mr-2"></i></li>
                    <li className="d-inline-block ml-4 mt-3 text-dark"><i className="fa fa-twitter mr-2"></i></li>
                    <li className="d-inline-block ml-4 mt-3 text-dark"><i className="fa-brands fa-instagram"></i></li>
                    <li className="d-inline-block ml-4 mt-3 text-dark"><i className="fa fa-youtube mr-2"></i></li>
                </ul>
               </div>
            </div>
            
        </div>
        </section>
        <section style={{backgroundColor:'#175e0a'}}>
            <div className="container-fluid">
            <div className="row ">
            
            <div className="col-md-12 mt-3 text-center">
           <center> <p className="text-white" >Copyright @ 2024 Proxy Shield private limited. All Rights Reserved.</p></center>
            <p className="text-primary " >Develop by <b>Anvi Soft</b> </p>
            </div>
            
            
            </div>
            </div>
        </section>
        
        </>
    )
}
import React, { useEffect, useState } from "react";
import Index from "./Index.jsx";
import Company from "./Company.jsx";
import Product from "./Product.jsx";
import Contact from "./Contact.jsx";
// import Saleresponsive from "./SaleResponsive.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import Event from "./Event.jsx";
import Videolib from "./Videolib.jsx";
import Waterproofing from "./Waterproofing.jsx";
import Flooring from "./Flooring.jsx";
import Repair from "./Repair.jsx";
import Admixture from "./Admixture.jsx";
import Grouts from "./Grouts.jsx";
import Building from "./Building.jsx";
import Nav from "./Nav.jsx";
import Technicaldatasheets from "./Technicaldatasheets.jsx";
import Saleresponsive from "./Saleresponsive.jsx";



export default function Main(){
    const [loading,setLoading]= useState(false)
    useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
    setLoading(false)
    },5000)

},[])
    return(
        <>
            {
                loading?
                <div className='lod1'><DotLoader color={"#30CACF"} loading={loading}  size={100}/></div>
                :
                <Router>
            
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Index></Index>}></Route>
                <Route path="/Company" element={<Company></Company>}></Route>
                <Route path="/Product" element={<Product></Product>}></Route>
                <Route path="/Contact" element={<Contact></Contact>}></Route>
                <Route path="/Waterproofing" element={<Waterproofing></Waterproofing>}></Route>
                <Route path="/Flooring" element={<Flooring></Flooring>}></Route>
                <Route path="/Repair" element={<Repair></Repair>}></Route>
                <Route path="/Building" element={<Building></Building>}></Route>
                <Route path="/Admixture" element={<Admixture></Admixture>}></Route>
                <Route path="/Grouts" element={<Grouts></Grouts>}></Route>
                <Route path="/Technicaldatasheets" element={<Technicaldatasheets></Technicaldatasheets>}></Route>
                <Route path="/Saleresponsive" element={<Saleresponsive></Saleresponsive>}></Route>
                <Route path="/Event" element={<Event></Event>}></Route>
                <Route path="/Videolib" element={<Videolib></Videolib>}></Route>
            </Routes>
            <Footer></Footer>       
        </Router>
            }
        
        {/* <Nav></Nav> */}
        {/* <Navbar></Navbar> */}
        {/* <Event></Event> */}
        {/* <Videolib></Videolib> */}
        {/* <Waterproofing></Waterproofing> */}
        {/* <Flooring></Flooring> */}
        {/* <Repair></Repair> */}
        {/* <Admixture></Admixture> */}
        {/* <Grouts></Grouts> */}
        {/* <Building></Building> */}
        </>
    )
}
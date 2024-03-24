import React from "react";

export default function Product(){
    return(
        <>
        <section>
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
        <div className="container">
        <h2 className="c1">Products</h2>
        </div>
        </section>
        </>
    )
}
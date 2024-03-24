import React from "react";

export default function Videolib(){
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
            <div className="container mt-5">
                <div className="row">
                    <div className="com-md-4">
                    <video width="320" height="240" controls>
                        <source src="movie.mp4" type="video/mp4"/>
                        <source src="movie.ogg" type="video/ogg"/>

                        </video>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
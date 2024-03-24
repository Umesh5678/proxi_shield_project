import React, { useState } from "react";
import Menu from "./menu";

 const Event =() =>{
    const[items, setItems]=useState(Menu)

    const filterItem=(categItem)=>{
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updatedItems);
    }
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
                <div className="d-flex justify-content-around"> 
                        <button className="btn btn-warning" onClick={()=> filterItem('Applicators Meet')}>Applicators Meet</button>
                        <button className="btn btn-warning" onClick={()=> filterItem('Contrcators Meet')}>Contrcators Meet</button>
                        <button className="btn btn-warning" onClick={()=> filterItem('Dealers Meet')}>Dealers Meet</button>
                        <button className="btn btn-warning" onClick={()=> filterItem('Engineers Meet')}>Engineers Meet</button>
                        <button className="btn btn-warning" onClick={()=> filterItem('Exhibition')}>Exhibition</button>
                        <button className="btn btn-warning" onClick={()=> setItems(Menu)}>All</button>

                </div>
            </div>

           
            <div className="container mt-5 mb-5">
                <div className="row">

                    {
                        items.map((elem)=>{
                            const { id, image,}=elem;
                            return(
                                <div className="hover01  col-md-3">
                                    <figure><img src={image} alt="menupic" width="100%"  className="k1 img-fluid"/></figure>
                                </div>
                            )
                        })
                    }

                    
                
                </div>
            </div>
        </section>
        </>
    )
}
export default Event;
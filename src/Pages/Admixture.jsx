import React from "react";
import {ConcreteAdmixtureProducts} from './menu';
import { Link } from "react-router-dom";

function Admixture(){
    return(
        <>
        <section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-5 bg-light">
                 
                 <ul>
                    <li className=" d-inline-block ml-3"><Link to={'/'}>Home</Link></li>
                    <li className=" d-inline-block ml-3"><i className="fa-solid fa-chevron-right"></i></li>
                    <li className=" d-inline-block ml-3">Concrete Admixture</li>
                 </ul>
                </div>
            </div>
            </div>
            <div className="container">
          <h1 className="c1">Concrete Admixture</h1>
          <div className="row">
            <div className="col-12 categories">
              <h5>Catergries</h5>
              <button type="button" className="btn btn-outline-info">Crystalline</button>
              <button type="button" className="btn btn-outline-info">Acrylic</button>
              <button type="button" className="btn btn-outline-info">External Coatings</button>
              <button type="button" className="btn btn-outline-info">Membrane</button>
              <button type="button" className="btn btn-outline-info">Cementatious</button>
              <button type="button" className="btn btn-outline-info">Poly Urea</button>
              <button type="button" className="btn btn-outline-info">Integral Waterproofing</button>
              <button type="button" className="btn btn-outline-info">Primers</button>
              <button type="button" className="btn btn-outline-info">Liquid Applied Polyurthine Membrane</button>
              <button type="button" className="btn btn-outline-info">Retail Range</button>
             
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <div className="container mt-5 ">
          <h4 className="c1">Products</h4>
          <div className="row ">
            {ConcreteAdmixtureProducts.map((prod) => {
              return (
                <div className="col-md-4 mb-5">
                  <div className="card border-warning">
                    <img src={prod.image} className="card-img-top" alt="Description of the " />
                    <div className="card-body">
                      <h5 className="card-title">{prod.title}</h5>
                      <p className="card-text">{prod.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      {prod.product_list.map((prod_list) => {
                        return (
                          <li className="list-group-item">{prod_list.name}</li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
         
        </div>
        </section>
        </>
    )
}
export default Admixture;
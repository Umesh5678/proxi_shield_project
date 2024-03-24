import React, { useEffect, useState } from "react";
import { Data } from "./menu";
import './Style.css';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";
import workerImg from './Images/workers.png';


const Index=()=>{
    const[items, setItems]=useState(Data);
    const filterItem = (categItem) => {
        const UpdatedItems = Data.filter((curElem) => {
                return curElem.category === categItem;
        });
        setItems(UpdatedItems);
    }
    const [counterStart, setCounterStart]=useState(false);


    const text =
    "The client constructed Cement plant at Boyireddi palli in Andhra Pradesh. In South India they are the Pioneer’s in cement manufacturing industry In this plant they have 5 cement silo, four bins are for cement storage and one for raw mill The client constructed Cement plant at Boyireddi palli in Andhra Pradesh. In South India they are the Pioneer’s in cement manufacturing industry In this plant they have 5 cement silo, four bins are for cement storage and one for raw mill";
  const [showFullString, setShowFullString] = useState(false);

  const truncatedText = showFullString ? text : text.slice(0, 300);
   
    return(
        <>
           
            <section>

                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-12 p-0">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img className="d-block w-100" src="https://www.baumerk.com/storage/app/media/blog/crystalline-waterproofing/workers-applying-concrete.jpg" height="550" alt="First slide"/>
                                    </div>
                                    <div className="carousel-item">
                                    <img className="d-block w-100" src="https://www.baumerk.com/storage/app/media/blog/crystalline-waterproofing/workers-applying-concrete.jpg" height="550" alt="Second slide"/>
                                    </div>
                                    <div className="carousel-item">
                                    <img className="d-block w-100" src="https://www.baumerk.com/storage/app/media/blog/crystalline-waterproofing/workers-applying-concrete.jpg" height="550" alt="Third slide"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <section>
                    <div className="k2 container">
                        <div className="row">
                            
                                <div className=" col-md-6 success-buttons">
                                    <button className="btn btn-secondary ml-4">ARCHITECTS</button>
                                    <button className="btn btn-secondary ml-4">CONTRACTORS</button>
                                    <button className="btn btn-secondary ml-4">HOME OWNERS</button>
                                </div>
                                <div className="col-md-6">

                                </div>
                                <div className="col-md-3   mt-5">
                                        <img src={workerImg} className="img-fluid worker_image"/>
                                </div>
                                <div className="col-md-9  mt-5">
                                    <p>At MYK Arment we <b>Set Standards of Excellence & Trust in the Global Construction Chemical Industry.</b> The cornerstone of our business is formulated around the belief that the industry expects much more than just the product / service offered. Hence, our products & services are engineered to:</p>
                                    <ul>
                                        <li>Provide Improved material performance</li>
                                        <li>Demonstrate greater reliability & durability</li>
                                        <li>Be cost-effective & optimal</li>
                                        <li>Contribute to the environmental sustainability efforts.</li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <p>We constantly strive to raise the bar on the above parameters through innovation on our product & service offerings by working closely with our customers to identify what they need most—whether it’s innovative product development, greater efficiency or application expertise. Together with the customer, we want to make sure that every interaction is a step in our journey towards excellence.</p>
                                    <p>Our service is backed by our strong relationships with architects, contractors, specifiers, building materials suppliers and concrete producers who offer high quality products and industry leading technical support.</p>
                                    <p>Our Product range includes admixtures, grouts & anchors, repair mortars, bonding agents, adhesives, flooring coatings, curing and sealing compounds, dry shake hardeners, joint fillers, sealants, densifiers, waterproofing, repair and other products.</p>
                                </div>
                                <div className="col-md-12">
              <div className="row">
                <div className="p-4 col-md-3 mt-4">
                  <div className="k4">
                  <p>
                    <b>Leadership</b> with Integrity
                  </p>
                  </div>
                  
                </div>
                <div className="p-4  col-md-3 mt-4">
                  <div className="k5">
                  <p>
                    Innovative
                    <b>
                      <br />
                      Engineering
                    </b>{" "}
                  </p>
                  </div>
                  
                </div>
                <div className="p-4 col-md-3 mt-4">
                  <div className="k4">
                  <p>
                    <b>Focus</b>On Our Clients
                  </p>
                  </div>
                  
                </div>
                <div className="p-4  col-md-3 mt-4">
                  <div className="k5">
                  <p>
                    High Quality <b>Professionals</b>
                  </p>
                  </div>
                  
                </div>
              </div>
            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light">
        <div className="container">
          <p className="k6">
            <b>INDUSTRIAL </b>MARKET
          </p>
          <div className="row">
            <div className="col-md-12">
              <ul className="k7 " id="primary">
                <li
                  className="k8 d-inline-block ml-2"
                  onClick={() => setItems(Data)}
                >
                  ALL
                  <hr />
                </li>
                
                <li
                  className="k8 d-inline-block ml-4"
                  onClick={() => filterItem("Waterproofing-System")}
                >
                  Waterproofing-System
                  <hr />
                </li>
                <li
                  className="k8 d-inline-block ml-4"
                  onClick={() => filterItem("Flooring-Coatings")}
                >
                  Flooring-Coatings
                  <hr />
                </li>
                <li
                  className="k8 d-inline-block ml-4"
                  onClick={() => filterItem("Repair-And-Restoration")}
                >
                  Repair-And-Restoration
                  <hr />
                </li>
                <li
                  className="k8 d-inline-block ml-4"
                  onClick={() => filterItem("Grouts-Anchors")}
                >
                  Grouts-Anchors
                  <hr />
                </li>
                <li
                  className="k8 d-inline-block ml-4"
                  onClick={() => filterItem("Buildings-Joint-Sealants")}
                >
                  Buildings-Joint-Sealants
                  <hr />
                </li>
                <li
                  className="k8 d-inline-block ml-4"
                  onClick={() => filterItem("Concrete-Admixture")}
                >
                  Concrete-Admixture
                  <hr />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {items.map((elem) => {
              const { id, image, Name } = elem;
              return (
                <>
                  <div className=" col-md-4 mt-5 " key={elem.key}>
                    <div className="wrapper">
                      <div className="images">
                        <img
                          src={image}
                          alt="mypic"
                          className="im1"
                          width="100%"
                        />
                        <div className="content">
                          <a href="#" className="k0">
                            <i className="fa-solid fa-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="k9">{Name}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
                <section>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-3">
                                
                                <div className="l1 ml-5 rounded-circle ">
                                <img src="https://mykarment.com/wp-content/uploads/2015/08/icon1.png" className="l2"/>
                                </div>
                                <p className="l3 ml-5"><b>Trust</b></p>
                                <p>We earn credibility by encouraging open communication and taking responsibility for our actions. If we are honest with our customers, they will trust us and be honest with us.</p>

                            </div>
                            <div className="col-md-3">
                                
                                <div className="l0 ml-5 rounded-circle ">
                                <img src="https://mykarment.com/wp-content/uploads/2015/08/icon2.png" className="l2" />
                                </div>
                                <p className="l3"><b>Integrity & Ethics</b></p>
                                <p>We strive to do the right thing by conducting ourselves with integrity at all times. We deliver on our promises, remain fair and ethical in every situation and treat our colleagues and customers with respect.</p>
                            </div>
                            <div className="col-md-3">
                                
                                <div className="l1 ml-5 rounded-circle ">
                                    <img src="https://mykarment.com/wp-content/uploads/2015/08/icon3.png" className="l2" />
                                </div>
                                <p className="l3"><b>Innovation</b></p>
                                <p>We consistently find new ways to solve problems, share knowledge and encourage others to challenge our thinking.</p>
                            </div>
                            <div className="col-md-3">
                                
                                <div className="l0 ml-5 rounded-circle ">
                                    <img src="https://mykarment.com/wp-content/uploads/2015/08/icon4.png" className="l2" />
                                </div>
                                <p className="l3"><b>Passion & Commitment</b></p>
                                <p>We show pride in our brand and our company and inspires others to do the same. We are always willing to go the extra mile for customers and employees.</p>
                            </div>
                            
                        </div>
                        <center><button className="btn btn-primary">More about </button></center>
                    </div>
                </section>
                <section className="bg-light bg1 mt-5">
                    <div className=" bg2 container-fluid">
                        <div className="row">
                            <div className="col-4 mt-5">
                            <ScrollTrigger onEnter={()=>setCounterStart(true)} onExit={()=>setCounterStart(false)}>
                                <div className="progress-box-layout2 ">
                                    <h1 className="value">
                                        {counterStart && <CountUp alert={0} end={1000} duration={2} delay={0}/>} +
                                        <p className="h4">Clients</p>
                                    </h1>
                                </div>
                            </ScrollTrigger>
                            </div>
                            <div className="col-4 mt-5">
                            <ScrollTrigger onEnter={()=>setCounterStart(true)} onExit={()=>setCounterStart(false)}>
                                <div className="progress-box-layout2 ">
                                    <h1 className="value">
                                        {counterStart && <CountUp alert={0} end={1000} duration={2} delay={0}/>} +
                                        <p className="h4">Clients</p>
                                    </h1>
                                </div>
                            </ScrollTrigger>
                            </div>
                            <div className="col-4 mt-5">
                            <ScrollTrigger onEnter={()=>setCounterStart(true)} onExit={()=>setCounterStart(false)}>
                                <div className="progress-box-layout2 ">
                                    <h1 className="value">
                                        {counterStart && <CountUp alert={0} end={1000} duration={2} delay={0}/>} +
                                        <p className="h4">Clients</p>
                                    </h1>
                                </div>
                            </ScrollTrigger>
                            </div>
                
                        </div>
                    </div>
                </section>
                <section className="bg-light">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-6 mt-5 show-more-section">
              <h4 className="l4 ">CASE STUDIES</h4>
              <h1 className="l4">Cement Plant</h1>

              <p>
                {truncatedText}
                {!showFullString && text.length > 180 && (
                  <Link onClick={() => setShowFullString(true)}>Show More</Link>
                )}
              </p>

              <br />
              <br />
              
            </div>
            <div className="col-md-6">
              <img
                src="https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/2015/09/07/pppppppic.jpg?itok=L0WKrqYu"
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export default Index;
import React, { useState } from "react";
import { Data } from "./menu";
import "./Style.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";
import workerImg from "./Images/workers.png";
import TrustImg from "./Images/trust.jpg";
import Integrity from "./Images/integrety.jpg";
import Innovation from "./Images/innovation.jpg";
import handshake from "./Images/handshake.png";
import slider1 from "./Images/background_images/bg-1.jpg";
import slider2 from "./Images/background_images/bg-2.jpg";
import slider3 from "./Images/background_images/bg-3.jpg";
import cementIndustryImg from "./Images/cement_Industry.jpg";

const Index = () => {
  const [items, setItems] = useState(Data);
  const filterItem = (categItem) => {
    const UpdatedItems = Data.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(UpdatedItems);
  };
  const [counterStart, setCounterStart] = useState(false);

  const text = `At Proxi Shield, we pride ourselves on our commitment to excellence in the construction industry. Situated in the heart of Andhra Pradesh, our state-of-the-art cement plant stands tall as a testament to our pioneering spirit in the manufacturing sector of South India.With innovation at our core, we've established a facility in Boyireddi Palli that boasts five cutting-edge cement silos.
    
    Within these structures, four bins are meticulously designed for the storage of our premium-grade cement products, while the fifth serves as a crucial component in our raw mill operations.Proxi Shield's dedication to quality, efficiency, and sustainability drives every aspect of our operations. 
    
    Our plant represents not just a facility, but a symbol of our unwavering commitment to delivering excellence to our customers, partners, and the community at large.Join us in shaping the future of the construction industry, where Proxi Shield stands as a beacon of innovation and integrity.`;
  const [showFullString, setShowFullString] = useState(false);

  const truncatedText = showFullString ? text : text.slice(0, 300);

  return (
    <>
      <section>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 p-0">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={slider1}
                      height="550"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={slider2}
                      height="550"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={slider3}
                      height="550"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
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
            {/* <div className=" col-md-6 success-buttons">
              {/* <button className="btn btn-secondary ml-4">ARCHITECTS</button>
                                    <button className="btn btn-secondary ml-4">CONTRACTORS</button>
                                    <button className="btn btn-secondary ml-4">HOME OWNERS</button> */}
            {/* </div>
            <div className="col-md-6"></div>  */}

            <div className="col-md-9  mt-5">
              <p>
                At <b>Proxy Shield</b>, we are dedicated to setting new
                benchmarks in the realm of protective solutions for the
                construction industry. Our ethos revolves around understanding
                that the modern construction landscape demands more than just
                products or services—it demands innovation, reliability, and
                sustainability. Hence, our products & services are engineered
                to:
              </p>
              <ul>
                <li>Provide Improved material performance</li>
                <li>Demonstrate greater reliability & durability</li>
                <li>Be cost-effective & optimal</li>
                <li>Contribute to the environmental sustainability efforts.</li>
              </ul>
            </div>
            <div className="col-md-3   mt-5">
              <img src={workerImg} className="img-fluid worker_image" alt="desc" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                At <b>Proxy Shield</b>, we continuously push the boundaries of
                excellence through relentless innovation and collaboration with
                our clients. By closely engaging with architects, contractors,
                and industry experts, we tailor our offerings to address their
                specific needs and challenges.
              </p>
              <p>
                Backed by strong partnerships with leading suppliers and
                technical experts, we ensure that our clients receive
                unparalleled support and guidance throughout their projects.
              </p>
              <p>
                Our comprehensive product range encompasses a wide array of
                protective solutions, including coatings, sealants,
                waterproofing systems, and more. Each product is meticulously
                developed to meet the diverse requirements of modern
                construction projects.
              </p>
              {/* <p>At Proxi Shield, we don't just deliver solutions—we deliver peace of mind, knowing that every project is fortified by our commitment to excellence and innovation. Join us on our journey towards a safer, more sustainable future in construction.</p> */}
            </div>
            </div>
            <div className="row">
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
            {items.map((elem, index) => {
              const { image, Name } = elem;
              return (
                
                  <div className=" col-md-4 mt-5  industrial_market_image " key={index}>
                    <div className="card" >
                      <img className="card-img-top" src={image} alt="Card cap" />
                      <div className="card-body">
                        <h5 className="card-title">{Name}</h5>
                      </div>
                    </div>
                  </div>

              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5 ">
          <p className="k6">
            <b>WHAT MAKES </b> US DIFFERENT
          </p>
          <br />
          <br />
          <div className="row">
            <div className="col-md-3 mt-5">
              <div className=" l1   ">
                <img src={TrustImg} width={130} height={130} className="l2" alt="som" />
              </div>
              <p className="l3 ">
                <b>Trust</b>
              </p>
              <p>
                At Proxi Shield, trust is the bedrock of our relationships. We
                prioritize open communication and accountability, ensuring
                transparency in every interaction. By upholding honesty and
                taking responsibility for our actions, we cultivate a culture of
                trust with our clients.
              </p>
            </div>
            <div className="col-md-3 mt-5">
              <div className="l0  ">
                <img src={Integrity} width={130} height={130} className="l2" alt="som" />
              </div>
              <p className="l3">
                <b>Integrity & Ethics</b>
              </p>
              <p>
                At Proxi Shield, we uphold the highest standards of integrity
                and ethics. Our commitment is to always act with honesty,
                fairness, and respect in every interaction. We prioritize
                delivering on promises and treating both colleagues and
                customers with integrity.
              </p>
            </div>
            <div className="col-md-3 mt-5">
              <div className="l1   ">
                <img src={Innovation} width={130} height={130} className="l2" alt="som" />
              </div>
              <p className="l3">
                <b>Innovation</b>
              </p>
              <p>
                At Proxi Shield, we're pioneers in problem-solving, avid sharers
                of wisdom, and advocates for pushing boundaries. Our commitment
                to innovation drives us to discover fresh solutions, foster a
                culture of curiosity, and inspire others to rethink conventional
                wisdom.
              </p>
            </div>
            <div className="col-md-3 mt-5">
              <div className="l0   ">
                <img src={handshake} width={130} height={130} className="l2" alt="som" />
              </div>
              <p className="l3">
                <b>Passion & Commitment</b>
              </p>
              <p>
                At Proxi Shield, we embody unwavering dedication to our mission,
                fostering a culture where our brand and team are celebrated. Our
                passion fuels exceptional service, ensuring both customers and
                employees experience the utmost care and commitment at every
                turn.
              </p>
            </div>
          </div>
          <center>
            <button className="btn btn-outline-primary more_about_btn">
              <Link to={"/Company"}>More about</Link>{" "}
            </button>
          </center>
        </div>
      </section>
      <section className="bg-light bg1 mt-5">
        <div className=" bg2 container-fluid">
          <div className="row">
            <div className="col-md-4 mt-5">
              <ScrollTrigger
                onEnter={() => setCounterStart(true)}
                onExit={() => setCounterStart(false)}
              >
                <div className="progress-box-layout2 ">
                  <h1 className="value">
                    {counterStart && (
                      <CountUp alert={0} end={1000} duration={2} delay={0} />
                    )}{" "}
                    +<p className="h4">Clients</p>
                  </h1>
                </div>
              </ScrollTrigger>
            </div>
            <div className="col-md-4 mt-5">
              <ScrollTrigger
                onEnter={() => setCounterStart(true)}
                onExit={() => setCounterStart(false)}
              >
                <div className="progress-box-layout2 ">
                  <h1 className="value">
                    {counterStart && (
                      <CountUp alert={0} end={1000} duration={2} delay={0} />
                    )}{" "}
                    +<p className="h4">Projects</p>
                  </h1>
                </div>
              </ScrollTrigger>
            </div>
            <div className="col-md-4 mt-5">
              <ScrollTrigger
                onEnter={() => setCounterStart(true)}
                onExit={() => setCounterStart(false)}
              >
                <div className="progress-box-layout2 ">
                  <h1 className="value">
                    {counterStart && (
                      <CountUp alert={0} end={1000} duration={2} delay={0} />
                    )}{" "}
                    +<p className="h4">Sites Ongoing</p>
                  </h1>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light mt-5">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-6">
              <img src={cementIndustryImg} width="100%" alt="som" />
            </div>
            <div className="col-md-6 mt-5 show-more-section">
              <h4 className="l4 ">CASE STUDIES</h4>
              <h1 className="l4">Our Industry</h1>

              <p>
                {truncatedText}
                {!showFullString && text.length > 180 && (
                  <Link onClick={() => setShowFullString(true)}>Show More</Link>
                )}
              </p>

              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Index;

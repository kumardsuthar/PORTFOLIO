import React from "react";
import "../home.css";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../media/profile.jpeg";
import gfont from "../media/gfonts.png";
import sign from "../media/sign.png";
import work from "../media/mywork.png";
import service from "../media/support.png";

const Main = () => {
  return (
    <div>
      <h1>
        <div id="home">
          <div className="container">
            <div className="row ">
              <div className=" col-lg-6">
                <div className="inner-div profile-div">
                  <div>
                    <img src={logo} alt="" />
                  </div>
                  <div className="name">
                    <h4>i am a web developer</h4>
                    <h2>Dilip Suthar</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                    <div className="more">
                      <Link to="/about">
                        
                        <span>
                          <i class="fa fa-angle-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-6">
                <div className="row  ">
                  <div className=" col-12 ">
                    <div className="inner-div slider-text">
                      <p class="marquee">
                        <span>
                          This is text - This is text - This is text - This is
                          text - This is text - This is text - This is text -
                          This is text - This is text - This is text - This is
                          text - This is text -&nbsp;
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className=" col-md-6">
                    <div className="inner-div abpro work">
                      <img src={sign} alt="signature" className=" " />
                      <h4>MORE ABOUT ME</h4>
                      <h2>Credentials</h2>
                      <div className="more">
                        <Link to="/about">
                          
                          <span>
                            <i class="fa fa-angle-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-6">
                    <div className="inner-div abpro project">
                      <img src={work} alt="project" className=" " />
                      <h4>SHOWCASE</h4>
                      <h2>Project</h2>
                      <div className="more">
                        <Link to="/project">
                          
                          <span>
                            <i class="fa fa-angle-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 ">
                <div className="inner-div blog">
                  <img src={gfont} alt="gfonticon" className=" " />
                  <h4>Blog</h4>
                  <h2>GFONT</h2>
                  <div className="more">
                    <Link>
                     
                      <span>
                        <i class="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="inner-div abpro services">
                  <div className="ser-img">
                    <div>
                      <img src={service} alt="" />
                    </div>
                    <div>
                      <img src={service} alt="" />
                    </div>
                    <div>
                      <img src={service} alt="" />
                    </div>
                    <div>
                      <img src={service} alt="" />
                    </div>
                  </div>

                  <div>
                    <h4>SPECIALIZATION</h4>
                    <h2>Services Offering</h2>
                  </div>
                  <div className="more">
                    <Link to="/services">
                    
                      <span>
                        <i class="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 ">
                <div className="inner-div abpro socialmedia">
                  <div className="social">
                    <div>
                      <i class="fab fa-whatsapp"></i>
                    </div>
                    <div>
                      <i className="fab fa-instagram"></i>
                    </div>
                  </div>
                  <div>
                    <h4>STAY WITH ME</h4>
                    <h2>Profiles</h2>
                  </div>
                  <div className="more">
                    <Link to="/contact">
                    
                      <span>
                        <i class="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="inner-div abpro workex">
                  <div className="workex-in">
                    <div>
                      <h3>02</h3>
                      <h5>YEARS</h5>
                      <h5>EXPERIENCE</h5>
                    </div>
                  </div>
                  <div className="workex-in">
                    <div>
                      <h3>02</h3>
                      <h5>YEARS</h5>
                      <h5>EXPERIENCE</h5>
                    </div>
                  </div>
                  <div className="workex-in">
                    <div>
                      <h3>02</h3>
                      <h5>YEARS</h5>
                      <h5>EXPERIENCE</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="inner-div abpro letworksec">
                  <div>
                    <h4>Let's</h4>
                    <h4>
                      work <span>together.</span>
                    </h4>
                  </div>
                  <div className="more">
                    <Link to="/contact">
                   
                      <span>
                        <i class="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Main;

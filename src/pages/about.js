import React from "react";

import "../Css/about.css";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../media/profile.jpeg";

import work from "../media/mywork.png";
import Scroll from "../component/Scroll";
const About = () => {
  return (
    <div id="services">
      <div className="container">
      <p className="web-page-heading">About</p>
        <div className="row">
          <div className="col-md-4">
            <div className="ab-inner-div ab-profile">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-8 about-sec">
            <h4>SELF-SUMMARY</h4>
            <div className="ab-inner-div about-con">
              <div>
                <i class="fa fa-id-card"></i>
                <h3>Dilip Suthar</h3>
                <p>
                  I am a San francisco-based product designer with a focus on
                  web design, illustration, a visual development. I have a
                  diverse range of experience having worked across various
                  fields and industries.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="ab-inner-div">
              <h4>EXPERIENCE</h4>
              <p>2007 - 2017</p>
              <h4>Framer Designer & Developer</h4>
              <h5> Bluebase Designs </h5>
              <p> 2017-2023 </p>

              <h4>Front-End Developer</h4>
              <h5>BigXtech</h5>
              <div className="ab-icon">
                <i class="fab fa-phoenix-framework"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ab-inner-div">
              <h4>EDUCATION</h4>
              <p>2018-2020</p>
              <h4> Secondary School </h4>
              <h5>Goverment Senior Secondary School Sumerpur</h5>
              <p>2021-2025</p>
              <h4>Computer Science & Engineering</h4>
              <h5>CLG Institute Of Engineering And Technology.</h5>
              <div className="ab-icon">
                <i class="fas fa-school"></i>
                <i class="fas fa-user-graduate"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="inner-div ab-inner-div-project skill-t-div">
              <Scroll />
            </div>
          </div>
          <div className="col-md-3">
            <div className="inner-div ab-inner-div-project wid-div">
              <div className="wid-sec">
                <h4>What I Do</h4>
                <div>
                  <span>
                    <i class="fas fa-caret-right"></i> <h5>Web Design</h5>
                  </span>
                </div>
                <div>
                  <span>
                    <i class="fas fa-caret-right"></i> <h5>Web Design</h5>
                  </span>
                </div>

                <div>
                  <span>
                    <i class="fas fa-caret-right"></i> <h5>Web Design</h5>
                  </span>
                </div>

                <div>
                  <span>
                    <i class="fas fa-caret-right"></i> <h5>Web Design</h5>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inner-div ab-inner-div-project wid-div"></div>
          </div>
          <div className="col-md-3">
            <div className="inner-div ab-inner-div project">
              <img src={work} alt="project" className="img-fluid" />
              <h4>SHOWCASE</h4>
              <h2>Project</h2>
              <div className="more">
                <Link>
                  {" "}
                  <span>
                    <i class="fa fa-angle-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="inner-div abpro letworksec">
              <div>
                <h4>Let's</h4>
                <h4>
                  work <span>together.</span>
                </h4>
              </div>
              <div className="more">
                <Link>
                  {" "}
                  <span>
                    <i class="fa fa-angle-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="ab-inner-div abpro socialmedia">
              <div className="social">
                <div>
                  <i class="fab fa-whatsapp"></i>
                </div>
                <div>
                  <i class="fab fa-instagram"></i>
                </div>
              </div>
              <div>
                <h4>STAY WITH ME</h4>
                <h2>Profiles</h2>
              </div>
              <div className="more">
                <Link>
                  {" "}
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
  );
};

export default About;

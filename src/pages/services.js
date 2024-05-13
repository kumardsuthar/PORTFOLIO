import React from "react";
import Main from ".";
import '../Css/project.css';
import { Link } from 'react-router-dom';
import skills01 from '../media/skills01.png'
import skills02 from '../media/skiils02.png'
import skills03 from '../media/skills03.png'
import skills04 from '../media/skills04.png'
import skills05 from '../media/pngwing.com.png'
import skills06 from '../media/skills06.png'
import skills07 from '../media/skills07.png'

import skills08 from '../media/skills08.png'
import skills09 from '../media/skills09.png'
import skills10 from '../media/skills10.png'


import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../media/profile.jpeg'
import '../Css/services.css'
const Service = () => {
    return (
       <div id="ser-Main">
        <p className="web-page-heading">Service</p>
          <div className="row">
            <div className="col-md-4">
                <div className="ser-inner-div ser-pro-div">
                <div className="pro-profile-div pro-div">
                           <div>
                             <img src={logo} alt="profile" />
                            
                           </div>
                           <div>
                              <h4>Dilip Suthar</h4>
                              <p>Web Developer</p>
                           </div>
                           <div className="social-media">
                           <i class="fab fa-whatsapp"></i>
                           <i class="fab fa-instagram"></i>
                           <i class="fab fa-linkedin-in"></i>
                           <i class="fab fa-telegram-plane"></i>
                           </div>

                           <div className="ab-con-details">
                             <div className="ab-details-list">
                                <div>
                                <i class="fas fa-phone"></i>
                                </div>
                                <div>
                                    <p>Phone</p>
                                    <Link><h5>+91 7297834350</h5></Link>
                                </div>
                             </div>
                             <div className="ab-details-list">
                                <div>
                                <i class="fas fa-mail-bulk"></i>
                                </div>
                                <div>
                                    <p>Email</p>
                                    <Link><h5>dilipsuthar9829@gmail.com</h5></Link>
                                </div>
                             </div>

                             <div className="ab-details-list">
                                <div>
                                <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <p>Location</p>
                                    <Link><h5>Sumerpur</h5></Link>
                                </div>
                             </div>

                             <div className="ab-details-list">
                                <div>
                                <i class="fas fa-calendar-alt"></i>
                                </div>
                                <div>
                                    <p>Birthday</p>
                                    <Link><h5>Jan 2,2003</h5></Link>
                                </div>
                             </div>
                           </div>

                         
                           <div>
                           <button>Download CV</button>
                           </div>

                         

                        </div>
                </div>
            </div>
            <div className="col-md-8 ">
                <div className="ser-inner-div p-5">
                    <h4 className="ser-head">My Specializations</h4>
                    <div className="profile-list">
                        <h4>Website Design</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus distinctio consequuntur illo. Assumenda vitae provident mollitia delectus? Eius, voluptates ipsum.</p>

                        <h5>Project 6+</h5>
                    </div>
                    <div className="profile-list">
                        <h4>Website Design</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus distinctio consequuntur illo. Assumenda vitae provident mollitia delectus? Eius, voluptates ipsum.</p>

                        <h5>Project 6+</h5>
                    </div>

                    <div className="profile-list">
                        <h4>Website Design</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus distinctio consequuntur illo. Assumenda vitae provident mollitia delectus? Eius, voluptates ipsum.</p>

                        <h5>Project 6+</h5>
                    </div>

                    <div className="profile-list">
                        <h4>Website Design</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus distinctio consequuntur illo. Assumenda vitae provident mollitia delectus? Eius, voluptates ipsum.</p>

                        <h5>Project 6+</h5>
                    </div>
                    <h4 className="ser-head">My Advantages</h4>
                    <div className="skills">
                        <div className="skills-list">
                            <div className="skill-inner">
                            <img src={skills01} alt="" className="skills-img"/>
                            <p  >95%</p   >
                            </div>
                            <h4>HTML</h4>
                        </div>
                        <div className="skills-list">
                            <div className="skill-inner">
                            <img src={skills02} alt="" className="skills-img"/>
                            <p  >95%</p   >
                            </div>
                            <h4>CSS</h4>
                        </div>
                        <div className="skills-list">
                            <div className="skill-inner">
                            <img src={skills03} alt="" className="skills-img"/>
                            <p  >95%</p   >
                            </div>
                            <h4>Bootstrap</h4>
                        </div>
                        <div className="skills-list">
                            <div className="skill-inner">
                            <img src={skills04} alt="" className="skills-img"/>
                            <p  >95%</p   >
                            </div>
                            <h4>Tailwind Css</h4>
                        </div>
                        <div className="skills-list">
                            <div className="skill-inner">
                            <img src={skills05} alt="" className="skills-img"/>
                            <p>95%</p>
                            </div>
                            <h4>Java Script</h4>
                        </div>
                        <div className="skills-list">
                            <div className="skill-inner">
                            <img src={skills06} alt="" className="skills-img"/>
                            <p>95%</p>
                            </div>
                            <h4>JQuery</h4>
                        </div>
                        <div className="skills-list">
                            <div className="skill-inner">
                            <img src={skills07} alt="" className="skills-img"/>
                            <p>95%</p>
                            </div>
                            <h4>React JS</h4>
                        </div>
                        <div className="skills-list">
                            <div className="skill-inner">
                            <img src={skills08} alt="" className="skills-img"/>
                            <p>95%</p>
                            </div>
                            <h4>PHP</h4>
                        </div>
                        <div className="skills-list">
                            <div className="skill-inner">
                            <img src={skills09} alt="" className="skills-img"/>
                            <p>95%</p>
                            </div>
                            <h4>MySql</h4>
                        </div>
                        <div className="skills-list">
                            <div className="skill-inner">
                            <img src={skills10} alt="" className="skills-img"/>
                            <p>95%</p>
                            </div>
                            <h4>AppWrite</h4>
                        </div>
                    </div>
                </div>
            </div>
          </div>
       </div>
    );
};
 
export default Service;
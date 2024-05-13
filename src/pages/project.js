import React from "react";

import '../Css/project.css';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../media/profile.jpeg'

import pro01 from '../media/pro-01.webp'

const Project = () =>{
    return(
         <div className="container">
            <p className="web-page-heading">Project</p>
             <div id="project-main-sec">
                <div className="row">
                     <div className="col-md-4">
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
                     <div className="col-md-8">
                        <div className="project-div pro-div">
                        <div className="project-list">
                                <div className="pro-img-div">
                                
                                 <img src={pro01} alt="" />

                                </div>
                                <div className="pro-con-div">
                                    <p>Type: UX, UI, UXW, 3D</p>
                                    <h4>Bronco PSD, Figma & XD Design</h4>
                                    <Link to="/about">
                                    <div className="visit-site">
                                        <span>Visit Site <i className="fas fa-external-link-alt"></i></span>
                                    </div>
                                    </Link>

                
                                </div>
                            </div>
                            <div className="project-list">
                                <div className="pro-img-div">
                               
                            
                                </div>
                                <div className="pro-con-div">
                                    <p>Type: UX, UI, UXW, 3D</p>
                                    <h4>Bronco PSD, Figma & XD Design</h4>
                                    <Link to="/about">
                                    <div className="visit-site">
                                        <span>Visit Site <i className="fas fa-external-link-alt"></i></span>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                           
                            
                            
                          
                        </div>

                        <div className="project-div pro-div">
                        <div className="project-list">
                                <div className="pro-img-div">
                                
                                

                                </div>
                                <div className="pro-con-div">
                                    <p>Type: UX, UI, UXW, 3D</p>
                                    <h4>Bronco PSD, Figma & XD Design</h4>
                                    <Link to="/about">
                                    <div className="visit-site">
                                        <span>Visit Site <i className="fas fa-external-link-alt"></i></span>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="project-list">
                                <div className="pro-img-div">
                          

                                </div>
                                <div className="pro-con-div">
                                    <p>Type: UX, UI, UXW, 3D</p>
                                    <h4>Bronco PSD, Figma & XD Design</h4>
                                    <Link to="/about">
                                    <div className="visit-site">
                                        <span>Visit Site <i className="fas fa-external-link-alt"></i></span>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                           
                            
                            
                          
                        </div>


                        <div className="project-div pro-div">
                        <div className="project-list">
                                <div className="pro-img-div">
                             
                              

                                </div>
                                <div className="pro-con-div">
                                    <p>Type: UX, UI, UXW, 3D</p>
                                    <h4>Bronco PSD, Figma & XD Design</h4>
                                    <Link to="/about">
                                    <div className="visit-site">
                                        <span>Visit Site <i className="fas fa-external-link-alt"></i></span>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="project-list">
                                <div className="pro-img-div">


                                </div>
                                <div className="pro-con-div">
                                    <p>Type: UX, UI, UXW, 3D</p>
                                    <h4>Bronco PSD, Figma & XD Design</h4>
                                    <Link to="/about">
                                    <div className="visit-site">
                                        <span>Visit Site <i className="fas fa-external-link-alt"></i></span>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                           
                            
                            
                          
                        </div>

                        <div className="project-div pro-div">
                        <div className="project-list">
                                <div className="pro-img-div">
                           

                                </div>
                                <div className="pro-con-div">
                                    <p>Type: UX, UI, UXW, 3D</p>
                                    <h4>Bronco PSD, Figma & XD Design</h4>
                                    <Link to="/about">
                                    <div className="visit-site">
                                        <span>Visit Site <i className="fas fa-external-link-alt"></i></span>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="project-list">
                                <div className="pro-img-div">
                               
                             
                                </div>
                                <div className="pro-con-div">
                                    <p>Type: UX, UI, UXW, 3D</p>
                                    <h4>Bronco PSD, Figma & XD Design</h4>
                                    <Link to="/about">
                                    <div className="visit-site">
                                        <span>Visit Site <i className="fas fa-external-link-alt"></i></span>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                           
                            
                            
                          
                        </div>
                     </div>
                </div>
             </div>
         </div>
    )
}

export default Project;
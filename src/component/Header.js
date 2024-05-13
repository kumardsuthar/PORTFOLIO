import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router';
function Home() {
  const [hide, setHide] = useState("bars");
  const hidediv = {
    height: "0px",
    padding: "0px",
    margin: "0px",
  };
  const seediv = {
    height: "260px",
    padding: "20px",
    margin: "10px",
  };

  function seedata() {
    setHide("times");
    console.log("hdhdhdhdhdhdhd");
  }
  function hidedata() {
    setHide("bars");
    console.log("jdjjddjdjdjdjdj");
  }
  return (
    //  <>
    //  <Link to="/about">About</Link>
    //  <Link to="/services">Sser</Link>
    //  </>
    <>
      <div id="header">
        <div className="logo">
          <Link to="/">
            <h4>DK</h4>
          </Link>
        </div>
        <div className="link">
          <Link to="/about">
            <span>About</span>
          </Link>
          <Link to="/services">
            <span>Service</span>
          </Link>
          <Link to="/project">
            <span>Project</span>
          </Link>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </div>

        <div>
          <button className="con-btn">Let's Talk</button>
          <i
            class={hide=== "bars" ? "fas fa-bars" : "fas fa-times"}
            id="bars"
            onClick={hide === "bars" ? seedata : hidedata}
          ></i>
        </div>
      </div>
      <div className="mob-link" style={hide === "bars" ? hidediv : seediv}>
        <Link to="/about" onClick={hidedata}>
          <span>About</span>
        </Link>
        <Link to="/services" onClick={hidedata}>
          <span>Service</span>
        </Link>
        <Link to="/project" onClick={hidedata}>
          <span>Project</span>
        </Link>
        <Link to="/contact" onClick={hidedata}>
          <span>Contact</span>
        </Link>
        <div className="social-media">
          <i class="fab fa-whatsapp"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-telegram-plane"></i>
        </div>
      </div>
    </>
  );
}

export default Home;

import React from 'react'

import { Link } from 'react-router-dom';
import '../Css/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer()
{
    return(
       <div id="footer" className='text-center p-4 m-5'>
          <div className="footer-link m-5">
          <div className='link'>
         <Link to="/about"><span>About</span></Link>
         <Link to="/services"><span>Service</span></Link>
         <Link to="/project"><span>Project</span></Link>
         <Link to="/contact"><span>Contact</span></Link>
         </div>
          </div>
       </div>
    );
}

export default Footer;
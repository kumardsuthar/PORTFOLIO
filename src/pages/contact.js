import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/contact.css'
const Contact = () => 
{
    return(
        <div id='con-main' className='container'>
            <p className="web-page-heading">Contact</p>
        <div className="row">
            <div className="col-md-4">
                <div className="con-info">
                    <div className="con-info-list">
                        <div>
                        <i class="far fa-envelope-open"></i>
                        </div>
                        <div>
                            <h4>MAIL US</h4>
                            <p>dilipsuthar9829@gmail.com</p>
                            <p>suthardeepak833@gmail.com</p>
                        </div>
                    </div>
                    <div className="con-info-list">
                        <div>
                        <i class="fas fa-phone-square"></i>
                        </div>
                        <div>
                            <h4>CONTACT US</h4>
                            <p>+91 7297834350</p>
                            <p>+91 8058980322</p>
                        </div>
                    </div>
                    <div className="con-info-list">
                        <div>
                        <i class="fas fa-search-location"></i>
                        </div>
                        <div>
                            <h4>LOCATION</h4>
                            <p>Gayatri colony sumerpur</p>
                            
                        </div>
                    </div>
                    <div className="social-media">
                           <i class="fab fa-whatsapp"></i>
                           <i class="fab fa-instagram"></i>
                           <i class="fab fa-linkedin-in"></i>
                           <i class="fab fa-telegram-plane"></i>
                           </div>

                </div>
            </div>

            <div className="col-md-8">
                 <div className="con-form">
                 <form>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1"/>
</div>

<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>

<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>


<button type="submit" class="btn btn-primary">Send Message</button>
</form>
                 </div>
            </div>
        </div>
    </div>
    )
}

export default Contact;
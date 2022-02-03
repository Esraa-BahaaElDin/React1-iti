import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope , faPhoneAlt ,faCopyright} from '@fortawesome/free-solid-svg-icons';
import {faFacebook , faTwitter ,faLinkedin} from '@fortawesome/fontawesome-free-brands';

import "./footer.css";


class Footer extends React.Component {
  render() {
    
    return (
      <div id="footer" className="my-3 py-3 ">
        <div className="container">
        <h3 className="ps-5">Get in Touch</h3>
        <div className="row justify-content-around">
          <div className="col-3">
          <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><span className="ps-2">esraa_bahaa@gmail.com</span></p>
          <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon><span className="ps-2">100000000000</span></p>
          </div>
          <div className="col-3">
          <button type="button" class="btn btn-dark">Contact Me</button>

          </div>
          <div className="col-3">
          <FontAwesomeIcon icon={faLinkedin} className="mx-2"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faFacebook} className="mx-2"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTwitter} className="mx-2"></FontAwesomeIcon>
          <p>Copyright <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2019</p>
          </div>
        </div>
        </div>


      </div>
    );
  }
}

export default Footer;

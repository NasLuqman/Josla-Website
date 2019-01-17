import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid footer">
        <div className="container">
            <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-4 fspace">
                <img className="img-responsive" src="image/logo1.png"/>
            </div>
                <div className="col-lg-2 col-md-2 col-sm-4 fspace">
                    <h4>About Us</h4>
                    <li><a href="#">Term</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Blog</a></li>
                </div>


                  <div className="col-lg-2 col-md-2 col-sm-4 fspace">
                        <h4>Services</h4>
                        <li><a href="#">Kira</a></li>
                        <li><a href="#">Jostrak</a></li>

                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-4 fspace">
                        <h4>Information</h4>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">FAQ</a></li>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-4 fspace">
                        <h4>Contact</h4>
                        <li><i className="fa fa-phone"></i> <span>&nbsp;</span>+2348135742037</li>
                        <li><i className="fa fa-envelope-square"></i><span>&nbsp;</span>corporate@josla.com.ng</li>
                        <li><i className="fa fa-map-marker"></i> <span>&nbsp;</span>Lagos</li>
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-4 smedia fspace">
                  <h4>Stay in touch</h4>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                         <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  </div>
            </div>

            <hr/>
            <footer> &copy;  Josla 2019 All Right Reserved.</footer>

          </div>
    </div>
    );
  }
}

export default Footer;

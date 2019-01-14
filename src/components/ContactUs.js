import React, { Component } from 'react';
import './ContactUs.css';

class ContactUs extends Component {
  render() {
    return (
<section className="contact-area" id="contact">
    <div className="contact-form-area section-padding gray-bg">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className="area-title text-center">
                        <h3>GET IN TOUCH</h3>
                        <p>Need any help jusct send a message via our email address</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                    <div className="contact-form">
                        <form action="process.php" id="contact-form" method="post">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div className="form-group" id="name-field">
                                        <div className="form-input">
                                            <input type="text" className="form-control" id="form-name" name="form-name" placeholder="Name.." required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div className="form-group" id="email-field">
                                        <div className="form-input">
                                            <input type="email" className="form-control" id="form-email" name="form-email" placeholder="Email.." required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div className="form-group" id="phone-field">
                                        <div className="form-input">
                                            <input type="text" className="form-control" id="form-phone" name="form-phone" placeholder="Subject.." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div className="form-group" id="message-field">
                                        <div className="form-input">
                                            <textarea className="form-control" rows="6" id="form-message" name="form-message" placeholder="Your Message Here..." required></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <button type="submit">Send</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                    <div className="contact-image">
                        <div className="contact-address">
                            <h4>Address</h4>
                            <p>Phone: <a href="callto:+234 (0) 808 748 8793‬">+234 (0) 808 748 8793‬</a></p>
                            <p>Email: <a href="mailto:people@josla.com.ng">people@josla.com.ng</a></p>
                            <address>
                                Office  :  6th Floor (OA&A Partnership) Fortune Towers, 27/29 Adeyemo Alakija Street, Victoria Island.
                            </address>
                        </div>
                        <div className="social-bookmark">
                            <h4>Follow Us </h4>
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

);
}
}
export default ContactUs;

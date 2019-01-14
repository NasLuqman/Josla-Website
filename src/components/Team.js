import React, { Component } from 'react';
import './Team.css';

class Team extends Component {
  render() {
    return (
      <div className="container-fluid our-team">
      <div className="container">
        <div className="col-12">
          <h2 className="heading">Our Team</h2>
          <div className="heading-underline"></div>
        </div>
      	<div className="row">
      		<div className="col-md-4">
      			<div id="myCarousel" className="carousel slide" data-ride="carousel">


      				<ol className="carousel-indicators">
      					<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      					<li data-target="#myCarousel" data-slide-to="1"></li>
      					<li data-target="#myCarousel" data-slide-to="2"></li>
      				</ol>


      				<div className="carousel-inner">
      					<div className="item carousel-item active">
      						<div className="img-box"><img src="image/developer.jpeg" alt="developer"/></div>
      						<p className="testimonial"><b>Omoijuanfo Caleb</b>, System Engineer</p>
                  <p className="overview">
                  <div className="social-bookmark1">
                      <ul>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-github"></i></a></li>

                      </ul>
                  </div></p>

      					</div>
      					<div className="item carousel-item">
      						<div className="img-box"><img src="image/developer.jpeg" alt="developer"/></div>
                  <p className="testimonial"><b>Nasisudeen Luqman</b>, Software developer</p>
                  <p className="overview">
                  <div className="social-bookmark1">
                      <ul>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-github"></i></a></li>

                      </ul>
                  </div></p>
      					</div>

      					<div className="item carousel-item">
      						<div className="img-box"><img src="image/developer.jpeg" alt="developer"/></div>
                  <p className="testimonial"><b>Anike Fisher</b>, Font-End developer</p>
                  <p className="overview">
                  <div className="social-bookmark1">
                      <ul>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-github"></i></a></li>

                      </ul>
                  </div></p>
      					</div>
      				</div>


      			</div>
      		</div>




			<div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                    <div className="service-two-content wow fadeIn">
                        <div className="row mt-0 md-0">
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 no-padding pr-0 pd-0">
                                <div className="single-service-two border">
                                    <div className="service-icon-two"><i className="fa fa-leanpub"></i></div>
                                    <h4>Blog 1</h4>
                                    <p>Introduction paragraph 1</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 no-padding pl-0 pd-0">
                                <div className="single-service-two border-top border-bottom border-right">
                                    <div className="service-icon-two"><i className="fa fa-leanpub"></i></div>
                                    <h4>Blog 2</h4>
                                    <p>Introduction paragraph 1</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 no-padding pr-0 pt-0">
                                <div className="single-service-two border-left border-right border-bottom">
                                    <div className="service-icon-two"><i className="fa fa-leanpub"></i></div>
                                    <h4>Blog 3</h4>
                                    <p>Introduction paragraph 1</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 no-padding pl-0 pt-0">
                                <div className="single-service-two border-right border-bottom">
                                    <div className="service-icon-two"><i className="fa fa-leanpub"></i></div>
                                    <h4>Blog 4</h4>
                                    <p>Introduction paragraph 1</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 no-padding pr-0 pt-0 mt-0">
                                <div className="single-service-two border-left border-right border-bottom">
                                    <div className="service-icon-two"><i className="fa fa-leanpub"></i></div>
                                    <h4>Blog 5</h4>
                                    <p>Introduction paragraph 1</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 no-padding pl-0 pt-0 mt-0">
                                <div className="single-service-two border-right border-bottom">
                                    <div className="service-icon-two"><i className="fa fa-leanpub"></i></div>
                                    <h4>Blog 6</h4>
                                    <p>Introduction paragraph 1.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





      	</div>
      </div>
      </div>
    );
  }
}

export default Team;

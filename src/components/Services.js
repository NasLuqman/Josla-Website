import React, { Component } from 'react';
import './Services.css';

class Services extends Component {
  render() {
    return (
      <div>
          <div className="col-12 narrow">
              <h2 className="heading">Our Services</h2>
              <div className="heading-underline"></div>

              <p>We are well known for our driven mechanisms, we deliver <strong>SMART</strong> and intelligent services.
      		     we propose unique services to help the average customer leverage today's technology to gain near future advantages.
      	       </p>
        </div>

      <div className="container pd-4 pl-5 pr-5">
        <div className="row cardall">
            <div className="col-md-4">
                  <div className="card upper-card">
                       <div className="div-image">
                         <img src="image/service1.png" className="card-img-top" alt="service"/>
                        </div>
                        <div className="card-body txt1">
                          <p> AI-driven application to manage finance</p>
                          <button type="button" className="btn btn-light">Learn More</button>
                        </div>
                   </div>

            </div>

            <div className="col-md-4">
                  <div className="card upper-card">
                       <div className="div-image">
                         <img src="image/service2.png" className="card-img-top" alt="service"/>
                        </div>
                        <div className="card-body txt2">
                          <p>IoT based solution to monitor assets.</p>
                          <button type="button" className="btn btn-light">Learn More</button>
                        </div>
                   </div>

            </div>

            <div className="col-md-4">
                  <div className="card upper-card">
                       <div className="div-image">
                         <img src="image/service1.png" className="card-img-top" alt="service"/>
                        </div>
                        <div className="card-body txt3">
                          <p> AI-driven application to manage finance</p>
                          <button type="button" className="btn btn-light">Learn More</button>
                        </div>
                   </div>

            </div>
        </div>
      </div>

      </div>
    );
  }
}

export default Services;

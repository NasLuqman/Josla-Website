import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Maincontent.css'
import home from './image/bgimage.jpg'

class Maincontent extends Component {
  render() {
    return (
      <div>
<div className="banner" style={{backgroundImage:'url("'+home+'")', backgroundRepeat:'no-repeat'}}>
<div className="header-text">
<h2>innovate &nbsp; | compute  &nbsp; | enginner </h2>
<p>Our Vission is to find an intersection between digital innovation, cloud computing <br className="hidden-xs" />
	and service engineering to deliver cognitive experiences.
</p>
<Button className="btn">Learn More</Button>
</div>
</div>

{/* Our Services section */}

<Grid className="our-service">
  <Row>
    <h2>Services</h2>
    <Col xs={12} md={12}>
    <p>We are well known for our driven mechanisms, we deliver <strong>SMART</strong> and intelligent services. <br/>
		we propose unique services to help the average customer leverage today's technology to gain near future advantages.
	</p>
    </Col>
  </Row>
</Grid>

</div>
    );
  }
}

export default Maincontent;

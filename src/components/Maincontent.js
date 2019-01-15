import React, { Component } from 'react';

import home from './image/bgimage.jpg'
import './Maincontent.css';

class Maincontent extends Component {
  render() {
    return(
	<div>
      <div className="landing">
		<div className="home-wrap">
			<div className="home-inner" style={{backgroundImage:'url("'+home+'")'}}>

			</div>
		</div>
	  </div>
	  <div className="caption text-center">
			<h1>Innovate &nbsp; | Compute  &nbsp; | Engineer </h1>
			<p>Our vision is to find an intersection between digital innovation, cloud computing <br className="hidden-xs" />
				and service engineering to deliver cognitive experiences.</p>
        <button className="btn btn-outline-light btn-lg">Learn More</button>

	  </div>
	</div>
    );
  }
}

export default Maincontent;

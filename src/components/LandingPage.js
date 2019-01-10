import React, { Component } from 'react';
import NavBar from './NavBar'
import Maincontent from './Maincontent'

class LandingPage extends Component {
  render() {
    return (
      <div>
    <NavBar />
    <Maincontent />
    </div>
    );
  }
}

export default LandingPage;

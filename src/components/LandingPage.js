import React, { Component } from 'react';
import NavBar from './NavBar'
import Maincontent from './Maincontent'
import Services from './Services'
import Whyjosla from './Whyjosla'

import Blog from './Blog'
import OurTeam from './OurTeam'
import ContactUs from './ContactUs'
import Footer from './Footer'
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
    <NavBar className="landingpage-container" />
    <Maincontent />
    <Services />

    <Blog />
    <OurTeam />
    <ContactUs />

        <Footer />

    </div>
    );
  }
}

export default LandingPage;

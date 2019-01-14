import React, { Component } from 'react';
import NavBar from './NavBar'
import Maincontent from './Maincontent'
import Services from './Services'
import Whyjosla from './Whyjosla'
import Team from './Team'
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
    <Team />
    <ContactUs />

        <Footer />

    </div>
    );
  }
}

export default LandingPage;

import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (

      <Navbar default fixedTop collapseOnSelect className="main-nav">
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home"><Image src="image/josla-icon-90.png" height="40px" weight="40px"/></a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
  <Nav pullRight>
    <NavItem eventKey={1} href="#">
      About
    </NavItem>
    <NavItem eventKey={2} href="#">
      Services
    </NavItem>
    <NavItem eventKey={2} href="#">
      Products
    </NavItem>
    <NavItem eventKey={2} href="#">
      Team
    </NavItem>
    <NavItem eventKey={2} href="#">
      Blog
    </NavItem>
    <NavItem eventKey={2} href="#">
      Contact Us
    </NavItem>
  </Nav>
</Navbar.Collapse>
</Navbar>
    );
  }
}

export default NavBar;

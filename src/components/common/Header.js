import React, { Component, Fragment } from "react";
import { Container, Row, Navbar, Nav , Col, Dropdown, NavDropdown } from 'react-bootstrap'; 
import {getAuth} from "../../helpers/constants";


class Header extends Component {


  logout = () => {
    localStorage.removeItem('userAuth');
    window.location.reload(false);
  }

  render(){
    return(
        <Container fluid className="bg-light">
          <Row>
            <Col xs="2" md="4" lg="3">
               <a href="/" className="logo-link"><img src={require("../../img/logo-unit.svg")} className="Logo-unit"/></a>
            </Col>
            <Col xs="10" md="8" lg="9" className="nav-toggle-pos">    
              <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto float-right">
                    <Nav.Link className="menu" href="/products-list">Products</Nav.Link>
                    <Nav.Link className="menu" href="#">Enquiry</Nav.Link>
                    <Nav.Link className="menu" href="#">Certificates</Nav.Link>
                    <Nav.Link className="menu" href="/about-us">About Bedmutha</Nav.Link>
                    <Nav.Link className="menu" href="#">Investor</Nav.Link>
                    <Nav.Link className="menu" href="#">Media</Nav.Link>
                    <Nav.Link href="/contact-us" className="contact-us">Contact Us</Nav.Link>
                    {
                      (getAuth && getAuth.loggedIn) ?
                      <Fragment>
                      <Nav.Link className="menu profile-menu-mob" href="/profile/profile_info">Profile</Nav.Link>
                      <Nav.Link  href="#" onClick={() => this.logout()} className="menu profile-menu-mob">Logout</Nav.Link>
                      <NavDropdown title="My Account" className="profile-menu">
                        <NavDropdown.Item href="/profile/profile_info" className="dropdown-link">Profile</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-link" onClick={() => this.logout()}>Logout</NavDropdown.Item>
                      </NavDropdown>
                      </Fragment>
                       :
                     <Nav.Link href="/sign-up" className="login-link login-link-lg">Login / Sign up</Nav.Link>              
                    }
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
        );
  }
}

export default Header


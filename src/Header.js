import React from 'react';
import logo from './RUSTLogoVector.svg';
import './Header.css'

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

const Header = () => (
  <header>
    <Navbar fixed="top" color="goodblue" dark expand="xs" className="border-bottom border-gray bg-goodblue" style={{ height: 80 }}>

      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">

        <Col className="d-flex justify-content-xs-start justify-content-lg-start">
          <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
            <img src={logo} alt="logo" className="position-relative img-fluid" />
          </NavbarBrand>
        </Col>


          <Col className="d-none d-lg-flex justify-content-end">
            <Nav className="mrx-auto" navbar>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="#home" >Home</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="#contact">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="font-weight-bold" href = "https://www.thebluealliance.com/team/2225">The Blue Alliance</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="font-weight-bold" href = "#WhoAreWe">Who are we?</NavLink>
              </NavItem>

            </Nav>
          </Col>

        </Row>
      </Container>

    </Navbar>
  </header>
);

export default Header;

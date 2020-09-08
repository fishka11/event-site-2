import React from 'react';

import './Navigation.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { withRouter } from 'react-router-dom';

const Navigation = ({ menuItems, currentEvent, eventFullName, location }) => {
  return (
    <header className="navigation">
      <Navbar fixed="top" collapseOnSelect expand="xl" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">
            <img
              src={`assets/brand-${currentEvent}.png`}
              width="61"
              height="40"
              alt={`Logo - ${eventFullName}`}
            />
            <span className="sr-only">(current)</span>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav activeKey={location.pathname} className="mr-auto"> */}
            <Nav className="mr-auto">
              {menuItems
                .filter((item) => !!item.visibleInMenu)
                .map((item) => (
                  <Nav.Link
                    key={item.id}
                    href={`/${item.path}`}
                    className={` ${
                      location.pathname === `/${item.path}/` ? 'active' : ''
                    }`}
                  >
                    {item.displayName}
                  </Nav.Link>
                ))}
            </Nav>
            <Button size="sm" href="rejestracja">
              Zarejestruj się
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default withRouter(Navigation);

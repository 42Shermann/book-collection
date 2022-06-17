import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { logo } from '../../assets';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
  <Navbar bg="light" variant="light">
    <Container>
      <Link to={'/'}>
        <Navbar.Brand>
        <img
          src={logo}
          width="50%"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          />
          </Navbar.Brand>
      </Link>
      <Nav className="me-auto">
        <Link to={'/'} style={{ textDecoration:'none' }}>
          <Nav.Link>Home</Nav.Link>
        </Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

function Header() {
    return(
        <header>
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">React+Wordpress</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/pages">Pages</Nav.Link>
          <Nav.Link href="/post">Posts</Nav.Link>
        </Nav>
      </Navbar>
      </header>
      );
}

export default Header;
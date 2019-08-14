import React from 'react';
import { Container } from 'reactstrap';
import './Header.css';

const Header = () => (
  <Container fluid>
    <header className="header">
      <h2 className="text-center">
        Markdown Editor
      </h2>
    </header>
  </Container>
);

export default Header;

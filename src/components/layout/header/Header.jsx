import React from 'react';
import { Container } from 'reactstrap';
import './Header.css';

const Header = () => (
  <Container fluid className="header-container bg-dark">
    <header className="header">
      <h2 className="text-center header-title">
        Markdown Editor
      </h2>
    </header>
  </Container>
);

export default Header;

import React from 'react';
import { Container, Row } from 'reactstrap';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

const Main = () => (
  <Container fluid>
    <Row>
      <Editor />
      <Preview />
    </Row>
  </Container>
);

export default Main;

import React from 'react';
import { Container, Row } from 'reactstrap';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

export default class MainContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      editorText: '',
    };
  }

  updateEditorText = (editorText) => {
    this.setState({
      editorText,
    });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Editor updateEditorText={this.updateEditorText} />
          <Preview editorText={this.state.editorText} />
        </Row>
      </Container>
    );
  }
}

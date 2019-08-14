import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../CodeBlock';

const Preview = (props) => (
  <Col xs="12" md="6">
    <ReactMarkdown
      source={props.editorText}
      renderers={{ code: CodeBlock }}
    />
  </Col>
);

export default Preview;

Preview.propTypes = {
  editorText: PropTypes.string.isRequired,
};

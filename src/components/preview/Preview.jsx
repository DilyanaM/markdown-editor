import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../CodeBlock';
import './Preview.css';

const Preview = (props) => (
  <Col xs="12" md="6">
    <div className="preview-container">
      <div className="preview">
        <ReactMarkdown
          source={props.editorText}
          renderers={{ code: CodeBlock }}
        />
      </div>
    </div>
  </Col>
);

export default Preview;

Preview.propTypes = {
  editorText: PropTypes.string.isRequired,
};

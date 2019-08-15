import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import './Editor.css';

export default class Editor extends React.Component {
  update = (event) => {
    this.props.updateEditorText(event.target.value);
  }

  render() {
    return (
      <Col xs="12" md="6">
        <textarea
          className="form-control editor"
          onChange={this.update}
        />
      </Col>
    );
  }
}

Editor.propTypes = {
  updateEditorText: PropTypes.func.isRequired,
};

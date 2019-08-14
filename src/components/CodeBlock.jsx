import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default class CodeBlock extends PureComponent {
  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={prism}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

CodeBlock.defaultProps = {
  language: null,
  value: '',
};

CodeBlock.propTypes = {
  value: PropTypes.string,
  language: PropTypes.string,
};

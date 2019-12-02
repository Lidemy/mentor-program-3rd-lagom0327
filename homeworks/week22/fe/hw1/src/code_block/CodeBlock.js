import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { jsx, javascript, css } from 'react-syntax-highlighter/dist/esm/languages/prism';

class CodeBlock extends PureComponent {
  static propTypes = {
    value: Proptypes.string.isRequired,
    language: Proptypes.string,
  };

  static defaultProps = {
    language: null,
  };

  componentWillMount() {
    // 注册要高亮的语法，
    // 注意：如果不设置打包后供第三方使用是不起作用的
    SyntaxHighlighter.registerLanguage('jsx', jsx);
    SyntaxHighlighter.registerLanguage('css', css);
    SyntaxHighlighter.registerLanguage('javascript', javascript);
  }

  render() {
    const { language, value } = this.props;
    return (
      <figure className="highlight">
        <SyntaxHighlighter language={language} style={prism}>
          {value}
        </SyntaxHighlighter>
      </figure>
    );
  }
}

export default CodeBlock;
// from https://segmentfault.com/a/1190000020294373

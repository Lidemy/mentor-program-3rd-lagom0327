import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './reset.css';
import './index.css';


class Square extends PureComponent {
  static defaultProps = {
    value: null,
  }

  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    value: PropTypes.number,
    onClick: PropTypes.func.isRequired,
  }

  handleClick = () => {
    const { x, y, onClick } = this.props;
    onClick(x, y);
  }

  render() {
    console.log('square');
    const { value } = this.props;
    let stoneColor = '';
    if (value) {
      stoneColor = value === 1 ? 'black' : 'white';
    }
    return (
      <button
        type="button"
        className="square"
        onClick={this.handleClick}
      >
        <span className={`stone ${stoneColor}`} />
      </button>
    );
  }
}

export default Square;

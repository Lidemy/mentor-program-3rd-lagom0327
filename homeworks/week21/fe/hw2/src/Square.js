import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './reset.css';
import './index.css';


class Square extends PureComponent {
  static defaultProps = {
    value: null,
  }

  static propTypes = {
    value: PropTypes.number,
    onClick: PropTypes.func.isRequired,
  }


  render() {
    // console.log('squares');
    const { value, onClick } = this.props;
    let stoneColor = '';
    if (value) {
      stoneColor = value === 1 ? 'black' : 'white';
    }
    return (
      <button
        type="button"
        className="square"
        onClick={onClick}
      >
        <span className={`stone ${stoneColor}`} />
      </button>
    );
  }
}

export default Square;

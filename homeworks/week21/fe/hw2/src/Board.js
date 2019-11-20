import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import './reset.css';
import './index.css';

class Board extends PureComponent {
  static defaultProps = {
    // squares: [null],
  }

  static propTypes = {
    squares: PropTypes.arrayOf(PropTypes.oneOfType(
      [null, PropTypes.string],
    )).isRequired,
    onClick: PropTypes.func.isRequired,
  }

  renderSquare(x, y) {
    const { squares, onClick } = this.props;
    return (
      <Square
        key={y}
        value={squares[x][y]}
        onClick={() => onClick(x, y)}
      />
    );
  }

  render() {
    const { squares } = this.props;
    console.log('board');
    return (
      <section>
        {
          squares.map((row, x) => (
            (
              // eslint-disable-next-line react/no-array-index-key
              <div key={x} className="board-row">
                {row.map((col, y) => this.renderSquare(x, y))}
              </div>
            )
          ))
        }
      </section>
    );
  }
}

export default Board;

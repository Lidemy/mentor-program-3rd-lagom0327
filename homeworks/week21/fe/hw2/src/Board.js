import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import './reset.css';
import './index.css';

class Board extends PureComponent {
  static defaultProps = {
    // ex : 2*2 的棋盤
    squares: [[null, null], [null, null]],
  }

  static propTypes = {
    squares: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number]))),
    onClick: PropTypes.func.isRequired,
  }


  renderSquare(x, y) {
    const { squares, onClick } = this.props;
    return (
      <Square
        key={`${x}-${y}`}
        x={x}
        y={y}
        value={squares[x][y]}
        onClick={onClick}
      />
    );
  }

  render() {
    console.log('board');
    const { squares } = this.props;
    return (
      <section>
        {
          squares.map((row, y) => (
            (
              // 要用甚麼當 key ?
              // eslint-disable-next-line react/no-array-index-key
              <div key={y} className="board-row">
                {row.map((col, x) => this.renderSquare(x, y))}
              </div>
            )
          ))
        }
      </section>
    );
  }
}

export default Board;

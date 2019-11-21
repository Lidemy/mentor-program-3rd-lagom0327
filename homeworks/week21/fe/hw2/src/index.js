import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';

import Board from './Board';

const calculateWinner = (squares, x, y, player) => {
  const num = 5;
  const calcuNum = (dx, dy) => {
    let i;
    for (i = 1; i < num; i++) {
      if (!squares[x + dx * i] || !squares[x + dx * i][y + dy * i]
        || player !== squares[x + dx * i][y + dy * i]) return i - 1;
    }
    return i;
  };

  const checkDirec = (first, second) => {
    const firstN = calcuNum(first.x, first.y);
    const secondN = calcuNum(second.x, second.y);
    return (secondN === num || firstN === num
      || (secondN + firstN) >= num - 1)
      ? player : null;
  };

  const directions = [
    // 檢查水平連續相同的棋子數目
    { fist: { x: -1, y: 0 }, second: { x: 1, y: 0 } },
    // 檢查垂直連續相同的棋子數目
    { fist: { x: 0, y: 1 }, second: { x: 0, y: -1 } },
    // 檢查 m = -1 連續相同的棋子數目
    { fist: { x: -1, y: -1 }, second: { x: 1, y: 1 } },
    // 檢查 m = -1 連續相同的棋子數目
    { fist: { x: -1, y: 1 }, second: { x: 1, y: -1 } },
  ];

  const isWinner = directions.find(direction => checkDirec(direction.fist, direction.second));

  if (isWinner) return player;
  return null;
};


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(19).fill().map(() => Array(19).fill(null)),
      }],
      stepNumber: 0,
      oneIsNext: true,
      winner: null,
    };
  }

  handleClick(x, y) {
    const { oneIsNext, stepNumber, winner } = this.state;
    let { history } = this.state;
    history = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = JSON.parse(JSON.stringify(current.squares.slice()));
    if (winner || squares[x][y]) {
      return;
    }

    squares[x][y] = oneIsNext ? 1 : 2;
    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      oneIsNext: !oneIsNext,
      winner: calculateWinner(squares, x, y, squares[x][y]),
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      oneIsNext: (step % 2) === 0,
      winner: null,
    });
  }

  render() {
    const {
      history, stepNumber, oneIsNext, winner,
    } = this.state;
    const current = history[stepNumber];

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move # ${move}` : 'Go to game start';
      return (
        // eslint-disable-next-line react/no-array-index-key
        <li key={move}>
          <button
            type="button"
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });


    let status;
    if (winner) {
      status = `Winner : ${winner === 1 ? 'Black' : 'White'}`;
    } else {
      status = `Next player : ${(oneIsNext ? 'Black' : 'White')}`;
    }

    return (
      <div className="game">
        <div className="player">{status}</div>
        <div className="game-wrapper">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(x, y) => this.handleClick(x, y)}
            />
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);

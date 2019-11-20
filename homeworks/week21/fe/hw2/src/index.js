import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';

import Board from './Board';

function calculateWinner(squares, x, y) {
  const lines = [
    /*     [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    [[0,0], [1,1], [2,2]],
    [[2,0], [1,1], [0,2]], */
  ];
  console.log(x, y);
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a[0]][a[1]]
      && squares[a[0]][a[1]] === squares[b[0]][b[1]]
      && squares[a[0]][a[1]] === squares[c[0]][c[1]]) return squares[a[0]][a[1]];
  }
  return null;
}


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(19).fill().map(() => Array(19).fill(null)),
      }],
      stepNumber: 0,
      oneIsNext: true,
    };
  }

  handleClick(x, y) {
    const { oneIsNext, stepNumber } = this.state;
    let { history } = this.state;
    history = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = JSON.parse(JSON.stringify(current.squares.slice()));
    if (calculateWinner(squares, x, y) || squares[x][y]) {
      return;
    }

    squares[x][y] = oneIsNext ? 1 : 2;

    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      oneIsNext: !oneIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      oneIsNext: (step % 2) === 0,
    });
  }

  render() {
    const { history, stepNumber, oneIsNext } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

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
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${(oneIsNext ? 'Black' : 'White')}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(x, y) => this.handleClick(x, y)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.objectOf(
      PropTypes.oneOfType(
        [PropTypes.number, PropTypes.bool, PropTypes.string],
      ),
    ).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired,
  }

  delete = () => {
    const { todo, deleteTodo } = this.props;
    deleteTodo(todo.id);
  }

  mark = () => {
    const { todo, markTodo } = this.props;
    markTodo(todo.id);
  }

  render() {
    const { todo } = this.props;
    return (
      <li className="col-12 todo__item">
        <label htmlFor={todo.id}>
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.isCompleted}
            onChange={this.mark}
          />
          <p>{todo.content}</p>
          <i className="fas fa-square checkmark" />
          <i className="fas fa-check-square checkmark--checked" />
        </label>
        <button
          type="button"
          className="todo__item__delete_btn"
          onClick={this.delete}
        >
          <i className="fas fa-times" />
        </button>
      </li>
    );
  }
}

export default TodoItem;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoInput extends PureComponent {
  static defaultProps = {
    todoText: '',
  }

  static propTypes = {
    todoText: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    handleKeyDown: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
  }

  render() {
    const {
      todoText, handleChange, handleKeyDown, addTodo,
    } = this.props;
    return (
      <section className="todo__input">
        <input
          className="todo__input__content"
          type="text"
          placeholder="What needs to be done ?"
          value={todoText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className="icon todo__input__button"
          onClick={addTodo}
        >
          <i className="fas fa-plus-square" />
        </button>
      </section>
    );
  }
}

export default TodoInput;

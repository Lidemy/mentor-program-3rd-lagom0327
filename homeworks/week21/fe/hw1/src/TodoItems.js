import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoItems extends PureComponent {
  static defaultProps = {
    todos: [{
      id: 1,
      isCompleted: false,
      content: 'I am default!',
    }],
  }

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    deleteTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired,
  }

  render() {
    const { todos, deleteTodo, markTodo } = this.props;
    console.log('todos');
    return (
      <ul className="row todo__items">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            markTodo={markTodo}
          />
        ))}
      </ul>
    );
  }
}

export default TodoItems;

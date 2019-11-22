import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
// import './App.css';

class Post extends PureComponent {
  static propTypes ={
    title: Proptypes.string.isRequired,
    body: Proptypes.string.isRequired,
    value: Proptypes.number.isRequired,
    handleClickOnPost: Proptypes.func.isRequired,
  }

  render() {
    const {
      title, body, value, handleClickOnPost,
    } = this.props;
    return (
      <li className="post">
        <h1 className="post__title">{title}</h1>
        <p className="post__text">{body}</p>
        <button
          type="button"
          className="post__button button"
          value={value}
          onClick={handleClickOnPost}
        >
          View details
        </button>
      </li>
    );
  }
}

export default Post;

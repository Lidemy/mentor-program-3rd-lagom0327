import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';
import './Post.css';
import repository from '../../repository';

class Post extends PureComponent {
  static propTypes ={
    title: Proptypes.string.isRequired,
    body: Proptypes.string.isRequired,
    value: Proptypes.number.isRequired,
    history: Proptypes.objectOf(Proptypes.oneOfType([
      Proptypes.number, Proptypes.string, Proptypes.func, Proptypes.object,
    ])).isRequired,
  }

  render() {
    const {
      title, body, value,
    } = this.props;
    const { history } = this.props;
    return (
      <li className="post">
        <h1 className="post__title">{title}</h1>
        <p className="post__text">{body}</p>
        <button
          type="button"
          className="post__button button"
          onClick={() => { history.push(`/${repository}/post/${value}`); }}
        >
          View details
        </button>
      </li>
    );
  }
}

export default withRouter(Post);

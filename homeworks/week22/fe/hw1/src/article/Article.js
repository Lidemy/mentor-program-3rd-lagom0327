import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Article.css';

class Article extends Component {
  static propTypes = {
    match: Proptypes.shape({
      isExact: Proptypes.bool.isRequired,
      params: Proptypes.shape({ postId: Proptypes.string.isRequired }),
      path: Proptypes.string.isRequired,
      url: Proptypes.string.isRequired,
    }).isRequired,
    // handleClickOnArticle: Proptypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const { match: { params: { postId } } } = this.props;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          data,
        });
      });
  }

  render() {
    const { data } = this.state;
    const { title, userId, body } = data;
    return (
      <section className="article wrapper">
        {!title && <h1 className="waiting">Waiting...</h1>}
        <header className="article__info">
          <h1 className="article__title">
            {!title && 'Title:'}
            {title}
          </h1>
          <address className="article__author">
            Author:
            {` ${userId}`}
          </address>
        </header>
        <p className="article__text">{body}</p>
        <Link
          type="button"
          className="article__button button"
          to="/post"
        >
          Return
        </Link>
      </section>
    );
  }
}

export default Article;

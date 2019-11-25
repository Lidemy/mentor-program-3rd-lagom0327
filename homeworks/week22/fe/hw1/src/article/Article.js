import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Article.css';
import Loading from '../loading';

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
      data: {
        author: '',
        boyd: '',
        createdAt: 1573649501347,
        title: '',
      },
    };
  }

  componentDidMount() {
    const { match: { params: { postId } } } = this.props;
    fetch(`https://qootest.com/posts/${postId}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          data,
        });
      });
  }

  render() {
    const { data } = this.state;
    const {
      title, author, body, createdAt,
    } = data;
    if (!title) return <Loading />;
    const date = new Date(createdAt);
    return (

      <section className="article wrapper">
        <h1 className="article__title">
          {title}
        </h1>
        <header className="article__info">
          <address className="article__author">
            Author:
            {` ${author}`}
          </address>
          <time className="article__time">{date.toDateString()}</time>
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

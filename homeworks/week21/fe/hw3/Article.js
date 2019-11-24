import React, { Component } from 'react';
import Proptypes from 'prop-types';
// import './App.css';
class Article extends Component {
  static propTypes = {
    id: Proptypes.number.isRequired,
    handleClickOnArticle: Proptypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const { id } = this.props;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
    const { handleClickOnArticle } = this.props;
    return (
      <section className="article">
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
        <button
          type="button"
          className="article__button button"
          onClick={handleClickOnArticle}
        >
            Return
        </button>
      </section>
    );
  }
}

export default Article;

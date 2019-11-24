import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

class Article extends Component {
  static propTypes = {
    // id: Proptypes.number.isRequired,
    // handleClickOnArticle: Proptypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    console.log('props', this.props.match.params.postId)
    const  id  = this.props.match.params.postId;
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
            to="/post">
            Return
          </Link>
      </section>
    );
  }
}

export default Article;

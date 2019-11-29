import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../loading';
import CodeBlock from '../code_block';
import './Article.css';
import repository from '../repository';

class Article extends Component {
  static propTypes = {
    match: Proptypes.shape({
      isExact: Proptypes.bool.isRequired,
      params: Proptypes.shape({ postId: Proptypes.string.isRequired }),
      path: Proptypes.string.isRequired,
      url: Proptypes.string.isRequired,
    }).isRequired,
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
    axios.get(`https://qootest.com/posts/${postId}`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch(error => console.log('error', error));
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
        <div className="article__text">
          <div>
            <ReactMarkdown
              source={body}
              escapeHtml={false}
              renderers={{
                code: CodeBlock,
              }}
            />
          </div>
        </div>
        <Link
          type="button"
          className="article__button button"
          to={`/${repository}/post`}
        >
          Return
        </Link>
      </section>
    );
  }
}

export default Article;

import React, { Component } from 'react';
import axios from 'axios';
import './AddPost.css';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleonSubmit = () => {
    const { title, body, author } = this.state;
    if (!title || !body || !author) return alert('empty');
    axios.post('https://qootest.com/posts', {
      title,
      body,
      author,
    }).then(() => {
      alert('成功');
      this.setState({
        title: '',
        body: '',
        author: '',
      });
    }).catch(() => alert('失敗'));
    return null;
  }

  render() {
    const { title, body, author } = this.state;
    return (
      <section className="addPost">
        <form>
          <input
            className="addPost__title"
            type="text"
            value={title}
            name="title"
            onChange={this.handleInputChange}
            placeholder="title"
          />
          <input
            className="addPost__author"
            type="text"
            value={author}
            name="author"
            onChange={this.handleInputChange}
            placeholder="author"
          />
          <textarea
            className="addPost__body"
            value={body}
            name="body"
            onChange={this.handleInputChange}
            placeholder="content"
          />
          <input
            className="addPost__submit"
            type="button"
            onClick={this.handleonSubmit}
            value="Submit"
          />
        </form>
      </section>
    );
  }
}

export default AddPost;

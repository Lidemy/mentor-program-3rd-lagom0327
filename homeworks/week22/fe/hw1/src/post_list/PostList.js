import React, { Component } from 'react';
import axios from 'axios';
import './Posts.css';
import Post from './post';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <ul className="posts wrapper">
        {
          posts.map(post => (
            <Post
              title={post.title}
              body={post.body}
              value={post.id}
              key={post.id}
            />
          ))
        }
      </ul>
    );
  }
}

export default PostList;

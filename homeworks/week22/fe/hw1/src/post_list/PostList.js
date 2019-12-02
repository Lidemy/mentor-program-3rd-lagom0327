import React, { Component } from 'react';
import axios from 'axios';
import './Posts.css';
import Post from './post';
import Loading from '../loading';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://qootest.com/posts?_sort=id&_order=desc&&_limit=200&_page=1')
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      });
  }

  render() {
    const { posts } = this.state;
    if (!posts[0]) return <Loading />;
    const newPosts = posts.filter(post => post.title);
    return (
      <ul className="posts wrapper">
        {
          newPosts.map(post => (
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

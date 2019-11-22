import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Post from './Post';

class Posts extends Component {
  static propTypes = {
    handleClickOnPost: Proptypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((posts) => {
        this.setState({
          posts,
        });
      });
  }

  render() {
    const { posts } = this.state;
    const { handleClickOnPost } = this.props;
    return (
      <ul className="posts">
        {
          posts.map(post => (
            <Post
              title={post.title}
              body={post.body}
              value={post.id}
              key={post.id}
              handleClickOnPost={handleClickOnPost}
            />
          ))
        }
      </ul>
    );
  }
}

export default Posts;

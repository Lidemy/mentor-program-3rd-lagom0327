import React, { Component } from 'react';
import axios from 'axios';
import './Posts.css';
import Post from './post';
// import axios from 'axios';
// import 'Posts.css';

class PostList extends Component {
  static propTypes = {
    // handleClickOnPost: Proptypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data,
        })
      })
  }

  render() {
    const { posts } = this.state;
    // const { handleClickOnPost } = this.props;
    return (
      <ul className="posts wrapper">
        {
          posts.map(post => (
            <Post
              title={post.title}
              body={post.body}
              value={post.id}
              key={post.id}
              // handleClickOnPost={handleClickOnPost}
            />
          ))
        }
      </ul>
    );
  }
}

export default PostList;

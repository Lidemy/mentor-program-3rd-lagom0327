/* eslint-disable max-len */
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Article from './article';
import PostList from './post_list';
import Nav from './nav';
import About from './about';

const Header = () => (
  <header className="header">
    <div className="wrapper">
      <h1 className="header__title">Hello, World</h1>
      <p className="header__text">This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
      <div className="header__button button">Learn more</div>
    </div>
  </header>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Nav/>
            <Route exact path="/" component={Header} />
            <Route path="/about" component={About} />
            <Route exact path="/post" component={PostList} />
            <Route path="/post/:postId" component={Article} />
        </Router>
        <div id="line" />
        <section className=" wrapper">
        </section>
        <footer className="wrapper">
          © Company 2019
        </footer>
      </div>
    );
  }
}

export default App;

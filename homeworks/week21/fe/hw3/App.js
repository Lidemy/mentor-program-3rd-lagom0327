/* eslint-disable max-len */
import React, { Component } from 'react';
import Article from './Article';
import Posts from './Posts';
import Nav from './Nav';

const Header = () => (
  <header className="header">
    <div className="wrapper">
      <h1 className="header__title">Hello, World</h1>
      <p className="header__text">This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
      <div className="header__button button">Learn more</div>
    </div>
  </header>
);

const About = () => (
  <article className="about">
    I am about page. I am about page. I  I am about page.I am about page. I am
    about page. am about page. I am about page. I am about page. I am about page. I am about page. I am about page. I am about page.
  </article>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: null,
      isAbout: false,
    };
  }

  handleClickOnPost = (e) => {
    const id = e.target.value;
    this.setState({
      postId: id,
    });
  };

  handleClickOnArticle = () => {
    this.setState({
      postId: null,
    });
  }

  handleClickonAbout = () => {
    this.setState({
      postId: null,
      isAbout: true,
    });
  }

  handleClickOnHome = () => {
    this.setState({
      postId: null,
      isAbout: false,
    });
  }

  render() {
    const { postId, isAbout } = this.state;
    return (
      <div className="App">
        <Nav
          handleClickonAbout={this.handleClickonAbout}
          handleClickOnHome={this.handleClickOnHome}
          isAbout={isAbout}
        />
        <Header />
        <section className=" wrapper">
          {
            !postId && !isAbout
            && <Posts handleClickOnPost={this.handleClickOnPost} />
          }
          {
            postId
            && <Article id={Number(postId)} handleClickOnArticle={this.handleClickOnArticle} />
          }
          {
            !postId && isAbout
            && <About />
          }
          <div id="line" />
        </section>
        <footer className="wrapper">
          © Company 2019
        </footer>
      </div>
    );
  }
}

export default App;

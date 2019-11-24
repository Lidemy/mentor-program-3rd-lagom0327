/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component,PureComponent } from 'react';
import { Link, Route } from 'react-router-dom';
import './Nav.css';

class Item extends Component {
  render() {
    const { children, to, exact } = this.props;
    return (
      <Route 
        path={to}
        exact={exact}
        children={({ match }) => (
          <li className={`nav__button ${match ? "nav__buttom-checked" : ""}`}>
            <Link to={to}>{children}</Link>
          </li>
        )}
        />
    );
  }
}


class Nav extends PureComponent {
  render() {
    return (
      <nav>
        <ul>
          <Item exact={true} to='/' >Home</Item>
          <Item to='/post' >PostList</Item>
          <Item to='/about' >About</Item>
        </ul>
      </nav>
    );
  }
}

export default Nav;

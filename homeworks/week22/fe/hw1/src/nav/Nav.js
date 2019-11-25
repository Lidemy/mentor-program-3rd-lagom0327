/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Nav.css';
import NavItem from './nav_item';

const Nav = () => (
  <nav>
    <ul>
      <NavItem exact to="/">Home</NavItem>
      <NavItem exact={false} to="/post">PostList</NavItem>
      <NavItem exact={false} to="/about">About</NavItem>
      <NavItem exact={false} to="/addpost">AddPost</NavItem>
    </ul>
  </nav>
);


export default Nav;

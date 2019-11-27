/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Nav.css';
import NavItem from './nav_item';
import repository from '../repository';


const Nav = () => (
  <nav>
    <ul>
      <NavItem exact to={`/${repository}`}>Home</NavItem>
      <NavItem exact={false} to={`/${repository}/post`}>PostList</NavItem>
      <NavItem exact={false} to={`/${repository}/about`}>About</NavItem>
      <NavItem exact={false} to={`/${repository}/addpost`}>AddPost</NavItem>
    </ul>
  </nav>
);


export default Nav;

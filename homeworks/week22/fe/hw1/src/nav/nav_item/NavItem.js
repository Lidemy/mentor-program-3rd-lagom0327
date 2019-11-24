import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import './NavItem.css';

class NavItem extends PureComponent {
  static propTypes ={
    children: Proptypes.string.isRequired,
    to: Proptypes.string.isRequired,
    exact: Proptypes.bool,
  }

  static defaultProps = {
    exact: false,
  }

  render() {
    const { children, to, exact } = this.props;
    return (
      <Route
        path={to}
        exact={exact}
      >
        {({ match }) => (
          <li className={`nav__button ${match ? 'nav__buttom-checked' : ''}`}>
            <Link to={to}>{children}</Link>
          </li>
        )}
      </Route>
    );
  }
}

export default NavItem;

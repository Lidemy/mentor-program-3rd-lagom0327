/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';

class Nav extends PureComponent {
  static defaultProps = {
    isAbout: false,
  }

  static propTypes = {
    handleClickonAbout: Proptypes.func.isRequired,
    handleClickOnHome: Proptypes.func.isRequired,
    isAbout: Proptypes.bool,
  }

  render() {
    const { handleClickonAbout, handleClickOnHome, isAbout } = this.props;
    return (
      <nav>
        <ul>
          <li className="nav__button" id="bar">Blog</li>
          <li className={`nav__button ${isAbout ? '' : 'nav__buttom-checked'}`} onClick={handleClickOnHome}>Home</li>
          <li className={`nav__button ${!isAbout ? '' : 'nav__buttom-checked'}`} onClick={handleClickonAbout}>About</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;

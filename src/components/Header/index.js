import React from 'react';
import Link from 'gatsby-link';
import Menu from '../Menu';
import Search from '../Search';

const Header = (props) => (
  <header className="header">
    <Menu />
    <Link to="/" className="header__logo-link">
      <img src={props.image.url} className="header__logo" />
    </Link>
    <Search />
  </header>
);

export default Header;

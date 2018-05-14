import React, {PureComponent as Component} from 'react';
import Nav from './Nav';
import '../../styles/header.scss';

function Header() {
  return (
    <div className="header">
      <div className="site-heading">
        <h1>My awesome website</h1>
      </div>
      <div className="header-rule"></div>
      <Nav />
    </div>
  );
}

export default Header;

import React from 'react';
import {
  Link
} from 'react-router-dom';

function Header() {
  return (
<header>
  <nav className="navbar fixed-top navbar-light bg-light shadow">
  <div className="navbar-brand">
    <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
    <Link to="/"> Alex Ívar Ívarsson</Link>
  </div>
  </nav>
</header>
  );
}

export default Header;

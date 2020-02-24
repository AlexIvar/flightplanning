import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';
/*import { render } from "react-dom";*/
/*import Navbar from 'react-bootstrap/Navbar'*/
import $ from "jquery";
class Header extends Component {
  componentDidMount() {
    $("#menu-toggle").click(function(e) {
     e.preventDefault();
     $("#wrapper").toggleClass("toggled");
   });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button className="btn btn-dark" id="menu-toggle">Toggle Menu</button>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                   <Link to="/" className="nav-link"> Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Link</Link>
                </li>
                <li className="nav-item dropdown">
                   <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <Link to="/" className="dropdown-item">Action</Link>
                    <Link to="/" className="dropdown-item">Another action</Link>
                    <div className="dropdown-divider"></div>
                    <Link to="/" className="dropdown-item">Something else here</Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
    );
  }
}

export default Header;

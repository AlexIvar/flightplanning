import React, { Component } from "react";
import { render } from "react-dom";
import {
  Link
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
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
                  <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item">Action</a>
                    <a className="dropdown-item">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
    );
  }
}

export default Header;

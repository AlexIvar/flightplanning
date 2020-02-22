import React from 'react';
import {
  Link
} from 'react-router-dom';

function Sidenavbar() {
  return (
    <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
      <nav className="bd-links collapse">
        <div className="bd-toc-item">
          <div className="bd-toc-link"><i className="fa fa-code"></i><Link to="/"> Home</Link></div>
        </div>
        <div className="bd-toc-item">
          <div className="bd-toc-link"><i className="fa fa-code"></i><Link to="/Products"> My projects</Link></div>
        </div>
        <div className="bd-toc-item">
          <div className="bd-toc-link"><i className="fa fa-code"></i><Link to="/FlightPlanning"> Flight planning</Link></div>
        </div>
      </nav>
    </div>
  );
}

export default Sidenavbar;

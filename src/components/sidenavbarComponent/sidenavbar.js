import React from 'react';
import {
  Link
} from 'react-router-dom';

function Sidenavbar() {
  return (
  /*  <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
      <nav className="bd-links collapse">
        <div className="bd-toc-item">
          <div className="bd-toc-link"><i className="fa fa-code"></i><Link to="/"> Home</Link></div>
        </div>
        <div className="bd-toc-item">
          <div className="bd-toc-link"><i className="fa fa-code"></i><Link to="/FlightPlanning"> Mass and balance</Link></div>
        </div>
      </nav>
    </div>*/

    <div className="bg-light border-right" id="sidebar-wrapper">
     <div className="sidebar-heading">Flight planning </div>
     <div className="list-group list-group-flush">
       <Link to="/" className="list-group-item list-group-item-action bg-light"> Home</Link>
       <Link to="/FlightPlanning" className="list-group-item list-group-item-action bg-light"> Mass and balance</Link>
     </div>
 </div>
  );
}

export default Sidenavbar;

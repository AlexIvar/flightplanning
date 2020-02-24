import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './components/headerComponent/header';
/*import Footer from './components/footerComponent/footer';*/
import Sidenavbar from './components/sidenavbarComponent/sidenavbar';
import Homepage from './components/pages/homePage';
import FlightPlanning from './components/pages/flightplanning';



function App() {
  return (
   <Router>
    <div className="App">
      <div className="d-flex" id="wrapper">
        <Sidenavbar />
          <div id="page-content-wrapper">
            <Header />
              <main role="main" className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
                <Route exact path='/' component={Homepage} />
                <Route exact path='/FlightPlanning' component={FlightPlanning} />
              </main>
          </div>
       </div>
     </div>
    </Router>



    /*<Footer />*/

/*  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });*/
);
}

export default App;

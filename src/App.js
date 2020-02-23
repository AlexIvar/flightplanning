import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Sidenavbar from './components/sidenavbarComponent/sidenavbar';
import Homepage from './components/pages/homePage';
import FlightPlanning from './components/pages/flightplanning';
import "./Assets/css/default.min.css";

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
      <div className="row flex-xl-nowrap">
       <Sidenavbar />
         <main role="main" className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
           <Route exact path='/' component={Homepage} />
           <Route exact path='/FlightPlanning' component={FlightPlanning} />
         </main>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

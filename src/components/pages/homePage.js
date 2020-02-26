import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import $ from "jquery";

function Homepage() {
  return (
    <div className="container-fluid">
     {/*  <div className="jumbotron jumbotron-fluid" id="welcomeJumbo">
        <div className="container">
          <h1 className="display-4">Flight planning</h1>
            <p className="lead" id="welcomeJumboLead">
              _____________________________________________

            </p>
        </div>
      </div>*/}
      <h3>W<code>eather</code>-A<code>ircraft</code>-N<code>otams</code>-T<code>hreats</code></h3>
      <br/>
      <h4>*I<code>llness</code></h4><br/>
      <h4>*M<code>edication</code></h4><br/><br/>
      <h4>*S<code>tress</code></h4><br/>
      <h4>*A<code>lchohol</code></h4><br/>
      <h4>*F<code>atigue</code></h4><br/>
      <h4>*E<code>motion</code></h4><br/>
    </div>
  );
}

export default Homepage;

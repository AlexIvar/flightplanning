import React, { Component } from "react";
import Apitest from './apitest';
import './flightplanning.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import $ from "jquery";
import print from 'print-js'

class FlightPlanning extends Component {
  componentDidMount() {
    $( "#btn" ).click(function() {
      print('printarea', 'html')
    });
  }
  render() {
    return (
      <Container fluid>
        <h1>Mass and balance</h1>

          {/* Here we will have a image of the mass and balance sheet */}
          <Row>
            <Col>
            <Form id="massform">
                {/*Aircraft*/}
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
               </Form.Group>

               {/*Front seat 1*/}
               <Form.Group controlId="formGroupEmail">
                 <Form.Control type="frontseat1" placeholder="Front seat 1" />
               </Form.Group>

               {/*Front seat 2*/}
               <Form.Group controlId="exampleForm.ControlSelect1">
                 <Form.Control as="select">
                   <option>1</option>
                   <option>2</option>
                   <option>3</option>
                   <option>4</option>
                   <option>5</option>
                 </Form.Control>
              </Form.Group>

                {/*Back seats*/}
                <Form.Group controlId="formGroupPassword">
                  <Form.Control type="backseats" placeholder="Back seats" />
                </Form.Group>

                {/*Standard baggae*/}
                <Form.Group controlId="formGroupPassword">
                  <Form.Control type="stdbaggage" placeholder="Standard baggage" />
                </Form.Group>

                {/*Fuel*/}
                <Form.Group controlId="formGroupPassword">
                  <Form.Control type="fuel" placeholder="Fuel" />
                </Form.Group>

                {/*Fuek burn*/}
                <Form.Group controlId="formGroupPassword">
                  <Form.Control type="fuel burn" placeholder="Fuel burn" />
                </Form.Group>

                <Button id="btn" variant="success" size="md" block>
                  Submit
                </Button>

            </Form>
            </Col>
          </Row>
          <br />
          <Row>
            <Col><img id="printarea" className="responsive" src="/mass.png" /></Col>
          </Row>

        </Container>
    );
  }
}

export default FlightPlanning;

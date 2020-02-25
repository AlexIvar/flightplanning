import React, { Component } from "react";
/*import Apitest from './apitest';*/
import './flightplanning.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import $ from "jquery";
import print from 'print-js'

class Performance extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas
    const canvas2 = this.refs.canvas2
    const ctx = canvas.getContext("2d")
    const ctx2 = canvas2.getContext("2d")
    /*const image1 = "/mass.png";//this.refs.image*/
    canvas.height = canvas.width * 1.5;
    canvas2.height = canvas.width * 1.5;

    var base_image = new Image();
    base_image.src = '/performance_TOF_1100_kg_2.jpg';

    var base_image2 = new Image();
    base_image2.src = '/performance_LD_1100_kg_3.jpg';

    base_image2.onload = function(){

      console.log("widht: " + this.naturalWidth)
      console.log("height: " + this.naturalHeight)

     // Use the intrinsic size of image in CSS pixels for the canvas element
     canvas2.width = this.naturalWidth;
     canvas2.height = this.naturalHeight;

     // Will draw the image as 300x227, ignoring the custom size of 60x45
     // given in the constructor
     ctx2.drawImage(this, 0, 0);

     // To use the custom size we'll have to specify the scale parameters
     // using the element's width and height properties - lets draw one
     // on top in the corner:
     ctx2.drawImage(this, 0, 0, this.width, this.height);

     console.log(" WIDTH: " + this.width)
     console.log(" HEIGHT: " + this.height)


     ctx2.font = "30px Permanent Marker";
   }

    base_image.onload = function(){

      console.log("widht: " + this.naturalWidth)
      console.log("height: " + this.naturalHeight)

     // Use the intrinsic size of image in CSS pixels for the canvas element
     canvas.width = this.naturalWidth;
     canvas.height = this.naturalHeight;

     // Will draw the image as 300x227, ignoring the custom size of 60x45
     // given in the constructor
     ctx.drawImage(this, 0, 0);

     // To use the custom size we'll have to specify the scale parameters
     // using the element's width and height properties - lets draw one
     // on top in the corner:
     ctx.drawImage(this, 0, 0, this.width, this.height);

     console.log(" WIDTH: " + this.width)
     console.log(" HEIGHT: " + this.height)




     /*Document ready*/
     $(document).ready(function(){
       ctx.font = "30px Permanent Marker";

          /*code here*/
     });

    }


    $( "#btn" ).click(function() {
      print('printarea', 'html')
    });


  }
  render() {
    return (
      <Container fluid>
        <h1>Performance</h1>

          {/* Here we will have a image of the mass and balance sheet */}
          <Row>
            <Col>
            <Form id="massform">

               {/*TORA*/}
               <Form.Group as={Row} controlId="frontseat1">
               <Form.Label column sm="2" id="mlabel">
                <b>TORA</b>
               </Form.Label>
               <Col sm="10">
                 <Form.Control type="tora" placeholder="TORA" type="text" />
               </Col>
               </Form.Group>

               {/*TODA*/}
               <Form.Group as={Row} controlId="frontseat1">
               <Form.Label column sm="2" id="mlabel">
                <b>TODA</b>
               </Form.Label>
               <Col sm="10">
                 <Form.Control type="toda" placeholder="TODA" type="text" />
               </Col>
               </Form.Group>

               {/*ASDA*/}
               <Form.Group as={Row} controlId="frontseat1">
               <Form.Label column sm="2" id="mlabel">
                <b>ASDA</b>
               </Form.Label>
               <Col sm="10">
                 <Form.Control type="asda" placeholder="ASDA" type="text" />
               </Col>
               </Form.Group>

            </Form>
            </Col>
          </Row>

          <br />
          <Button id="btn" variant="primary" size="md" block>
            Print
          </Button>
          <br />

          <div className="pagebreak"> </div>
          <Row>
            <Col>
            <div id="printarea">
             <canvas className="result" id="mycanvas" ref="canvas" />
             <canvas className ="result" id="mycanvas2" ref="canvas2" />
            </div>
            </Col>
          </Row>

          <div className="pagebreak"> </div>
        </Container>

    );
  }
}

export default Performance;

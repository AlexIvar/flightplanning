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
       ctx.font = "35px Permanent Marker";
       ctx2.font = "35px Permanent Marker";

       var toravalue;
       var todavalue;
       var asdavalue;
       var lda1value;
       var lda2value;
          /*code here*/
          $("#tora").change(function(){
            ctx.fillStyle = '#9bc0c5';
            ctx.fillRect(680, 1125, '120', '38');
            ctx.fillStyle = '#000';
            toravalue = document.getElementById("tora").value;

            ctx.fillText(toravalue, 680, 1155);
          });

           $("#toda").change(function(){
             ctx.fillStyle = '#9bc0c5';
             ctx.fillRect(680, 1190, '120', '38');
             ctx.fillStyle = '#000';
             todavalue = document.getElementById("toda").value;

             ctx.fillText(todavalue, 680, 1220);
           });

           $("#asda").change(function(){
             ctx.fillStyle = '#91baba';
             ctx.fillRect(680, 1250, '120', '38');
             ctx.fillStyle = '#000';
             asdavalue = document.getElementById("asda").value;

             ctx.fillText(asdavalue, 680, 1285);
           });

           $("#lda1").change(function(){
             ctx2.fillStyle = '#afc6ce';
             ctx2.fillRect(520, 1175, '80', '30');
             ctx2.fillStyle = '#000';
             lda1value = document.getElementById("lda1").value;
             ctx2.fillText(lda1value, 520, 1205);
           });

           $("#lda2").change(function(){
             ctx2.fillStyle = '#afc6ce';
             ctx2.fillRect(520, 1255, '80', '30');
             ctx2.fillStyle = '#000';
             lda2value = document.getElementById("lda2").value;
             ctx2.fillText(lda2value, 520, 1285);
           });


      });

    }


    $( "#btn" ).click(function() {
      print('printarea', 'html')
    });

    /*Rounds a number to the nearest hundered*/
    function roundToNearestHundered(number){
      return Math.round(number/100) * 100;
    }

    /*Returns headwind*/
    function calculateHeadwind(windspeed, winddirection, runwayhdg){
      return Math.abs(windspeed * Math.cos((winddirection - runwayhdg) * Math.Pi / 180));
    }

    /*Return crosswind*/
    function calculateCrosswind(windspeed, winddirection, runwayhdg){
      return Math.abs(windspeed * Math.sin((winddirection - runwayhdg) * Math.Pi / 180));
    }

    /*Final correction for headwind*/
    function correctTodrForWind(todr, headwind){
      return todr * (100 - (headwind * (10/12))) / 100;
    }

    /*Increase takeoff distance over a 50ft obsticle by 30 m.*/
    function takeoffDistanceOver50ftObsticle(todr){
      return todr + 30;
    }

    /*If runway is wet multiply LDR by 1.15*/
    function runwayWetCorrection(ldr){
      return ldr * 1.15;
    }

  }
  render() {
    return (
      <Container fluid>

        <h1>Performance</h1>
         <p>Take of and landing (1100 kg)</p>

          <code>Still in development...</code>
          {/* Here we will have a image of the mass and balance sheet */}
          <Form id="">

            <Form.Row>
              <Col>
                {/*TORA*/}
                <Form.Group controlId="tora">
                <Form.Label id="mlabel">
                 <b>TORA</b>
                </Form.Label>
                  <Form.Control type="tora" placeholder="TORA" type="number" defaultValue="1672"/>
                </Form.Group>
              </Col>
              <Col>
                {/*TODA*/}
                <Form.Group controlId="toda">
                <Form.Label id="mlabel">
                 <b>TODA</b>
                </Form.Label>
                <Form.Control type="toda" placeholder="TODA" type="number" defaultValue="1799"/>
                  </Form.Group>
              </Col>
              <Col>
                {/*ASDA*/}
                <Form.Group controlId="asda">
                <Form.Label id="mlabel">
                 <b>ASDA</b>
                </Form.Label>
                <Form.Control type="asda" placeholder="ASDA" type="number" defaultValue="1672" />
                  </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
            <Col>
                {/*Elevation*/}
                <Form.Group controlId="elevation">
                <Form.Label id="mlabel">
                 <b>Elevation</b>
                </Form.Label>
                    <Form.Control type="elevation" placeholder="Elevation" type="number" defaultValue="360"/>
                </Form.Group>
              </Col>
              <Col>
                {/*HPA*/}
                <Form.Group controlId="qnh">
                <Form.Label id="mlabel">
                <b>QNH</b>
                </Form.Label>
                  <Form.Control type="qnh" placeholder="QNH" type="number" />
                </Form.Group>
              </Col>
              <Col>
                {/*Temperature*/}
                <Form.Group controlId="temperature">
                <Form.Label id="mlabel">
                <b>Temperature</b>
                </Form.Label>
                  <Form.Control type="qnh" placeholder="Temperature" type="number" />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
                  <Form.Group as={Col} md="6" controlId="winddirection">
                    <Form.Label id="mlabel"><b>Wind direcetion</b></Form.Label>
                    <Form.Control type="number" placeholder="Wind direction" required />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="windspeed">
                    <Form.Label id="mlabel"><b>Wind speed</b></Form.Label>
                    <Form.Control type="number" placeholder="State" required />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="runway">
                    <Form.Label id="mlabel"><b>Runway</b></Form.Label>
                    <Form.Control type="text" placeholder="runway" defaultValue="21" required />
                  </Form.Group>
            </Form.Row>

                <Form.Row>
                <Col>
                    {/*LDA most favorable runway*/}
                    <Form.Group controlId="lda1">
                    <Form.Label id="mlabel">
                     <b>LDA most favorable</b>
                    </Form.Label>
                        <Form.Control type="lda1" placeholder="LDA most favorable" defaultValue="1672" type="number" />
                    </Form.Group>
                  </Col>
                  <Col>
                    {/*LDA most likely runway*/}
                    <Form.Group controlId="lda2">
                    <Form.Label id="mlabel">
                    <b>LDA most likely</b>
                    </Form.Label>
                      <Form.Control type="lda2" placeholder="LDA most likely" defaultValue="1672" type="number" />
                    </Form.Group>
                  </Col>
                </Form.Row>

          </Form>


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

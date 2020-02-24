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

class FlightPlanning extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas
    const canvas2 = this.refs.canvas2
    const ctx = canvas.getContext("2d")
    const ctx2 = canvas2.getContext("2d")
    /*const image1 = "/mass.png";//this.refs.image*/
    canvas.height = canvas.width * 1.5;
    canvas2.height = canvas.width * 1.5;

    var base_image = new Image();
    base_image.src = '/mass1.png';

    var base_image2 = new Image();
    base_image2.src = '/mass3.jpg';

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


     ctx.font = "30px Permanent Marker";

     /*Document ready*/
     $(document).ready(function(){
       var aplane;
       var mass;
       var moment;
       var mtom;
       var aircraftnumber;
       var frontseat1value;
       var frontseat2value;
       var frontseatvalue;
       var frontseatmomentvalue;
       var backseatsvalue;
       var backseatmomentvalue;
       var stdbaggagevalue;
       var stdbaggagevaluemoment;
       var baggagetubemassvalue;
       var baggagetubemomentvalue;
       var shortbaggagemassvalue;
       var shortbaggagemomentvalue;
       var forwardbaggagemassvalue;
       var forwardbaggagemomentvalue;
       var aftbaggagemassvalue;
       var aftbaggagemomentvalue;
       var zerofuelmassvalue;
       var zerofuelmassmomentvalue;
       /*var zerofuelmassleverarmvalue;*/
       /*var zerofuelmassleverarmvalue2;*/
       var fuelmassvalue;
       var fuelmomentvalue;
       var takeoffmassleverarmvalue;
      /* var takeoffmassleverarmvalue2;*/
       var takeoffmassvalue;
       var takeoffmassmomentvalue;
       var fuelburnmassvalue;
       var fuelburnmomentvalue;
       var landingmassleverarmvalue;
       /*var landingmassleverarmvalue2;*/
       var landingmassvalue;
       var landingmassmomentvalue;


       var aircraftlist = [
       { value: 'A', mass: '954', moment: 2362, mtom: 1310 },
       { value: 'B', mass: '948', moment: 2345, mtom: 1310 },
       { value: 'C', mass: '958', moment: 2377, mtom: 1310 },
       { value: 'D', mass: '954', moment: 2365, mtom: 1310 },
       { value: 'E', mass: '962', moment: 2393, mtom: 1280 },
       { value: 'G', mass: '955', moment: 2367, mtom: 1280 },
       { value: 'H', mass: '958', moment: 2378, mtom: 1310 },
       { value: 'J', mass: '959', moment: 2378, mtom: 1310 },
       { value: 'K', mass: '955', moment: 2368, mtom: 1280 },
       { value: 'M', mass: '963', moment: 2379, mtom: 1310 },
       { value: 'N', mass: '959', moment: 2379, mtom: 1310 },
       { value: 'O', mass: '957', moment: 2371, mtom: 1310 },
       { value: 'P', mass: '958', moment: 2393, mtom: 1310 },
       { value: 'R', mass: '958', moment: 2390, mtom: 1310 },
       { value: 'T', mass: '950', moment: 2377, mtom: 1310 }
    ];

       $("#aircraft").change(function(){

         /*mtom text*/
         ctx.clearRect(700, 10, '180', '38');
         /*aircraft number text*/
         ctx.clearRect(100, 10, '120', '38');

         /*empty leverarm*/
         ctx.clearRect(305, 153, '120', '38');
         /*empty mass*/
         ctx.clearRect(500, 153, '120', '38');
         /*empty moment*/
         ctx.clearRect(680, 153, '120', '38');

         aplane = aircraftlist.find(x => x.value === document.getElementById("exampleForm.aircraft").value);
         mass = aplane.mass;
         moment = aplane.moment;
         mtom = aplane.mtom;
         aircraftnumber = 'G-CTS' + aplane.value;

         /*mtom text*/
         ctx.fillText("MTOM: " + mtom, 700, 40);
         /*aircraftnumber text*/
         ctx.fillText(aircraftnumber, 100, 40);

         /*empty leverarm*/
         ctx.fillText(checkvalue(roundToTwoTwo(moment/mass)), 338, 180);
         /*empty mass*/
         ctx.fillText(checkvalue(mass), 513, 180);
         /*empty moment*/
         ctx.fillText(checkvalue(moment), 688, 180);

         updateZerofuelMass();

       });

       $("#frontseat1").change(function(){

         /*front seats mass*/
         ctx.clearRect(500, 195, '120', '38');
         /*front seat moment*/
         ctx.clearRect(680, 195, '120', '38');

         frontseat1value = document.getElementById("frontseat1").value;
         frontseat2value = document.getElementById("exampleForm.frontseat2").value;

         frontseatvalue = roundToTwo(+frontseat1value + +frontseat2value);
         frontseatmomentvalue = roundToTwo(frontseatvalue * 2.3);
         /*front seats mass*/
         ctx.fillText(checkvalue(frontseatvalue), 513, 228);
         /*front seat moment*/
         ctx.fillText(checkvalue(frontseatmomentvalue), 688, 228);

         updateZerofuelMass();
       });

       $("#frontseat2").change(function(){

         /*front seats mass*/
         ctx.clearRect(500, 195, '120', '38');
         /*front seat moment*/
         ctx.clearRect(680, 195, '120', '38');

         frontseat2value = document.getElementById("exampleForm.frontseat2").value;
         frontseat1value = document.getElementById("frontseat1").value;

         frontseatvalue = roundToTwo(+frontseat1value + +frontseat2value);
         frontseatmomentvalue = roundToTwo(frontseatvalue * 2.3);
         /*front seats mass*/
         ctx.fillText(checkvalue(frontseatvalue), 513, 228);
         /*front seat moment*/
         ctx.fillText(checkvalue(frontseatmomentvalue), 688, 228);

         updateZerofuelMass();
       });

       /*detect rear seat change*/
       $("#backseats").change(function(){

         /*rear seats mass*/
         ctx.clearRect(500, 239, '120', '38');
         /*rear seats moment*/
         ctx.clearRect(680, 239, '120', '38');

         backseatsvalue = document.getElementById("backseats").value;
         backseatmomentvalue = roundToTwo((backseatsvalue * 3.25));
         /*rear seats mass*/
         ctx.fillText(checkvalue(backseatsvalue), 513, 270);
         /*rear seats moment*/
         ctx.fillText(checkvalue(backseatmomentvalue), 688, 270);

         updateZerofuelMass();
       });

       /*Detect standard baggage change*/
       $("#stdbaggage").change(function(){

         /*standard baggage mass*/
         ctx.clearRect(500, 281, '120', '38');
         /*standard baggage moment*/
         ctx.clearRect(680, 281, '120', '38');

         stdbaggagevalue = document.getElementById("stdbaggage").value;
         stdbaggagevaluemoment = roundToTwo((stdbaggagevalue * 3.65));

         /*standard baggage mass*/
         ctx.fillText(checkvalue(stdbaggagevalue), 513, 318);
         /*standard baggage moment*/
         ctx.fillText(checkvalue(stdbaggagevaluemoment), 688, 318);

         updateZerofuelMass();
       });

       $("#baggagetube").change(function(){
         /*baggage tube mass*/
         ctx.clearRect(500, 331, '120', '38');
         /*baggage tube mass moment*/
         ctx.clearRect(680, 331, '120', '38');

         baggagetubemassvalue = document.getElementById("baggagetube").value;
         baggagetubemomentvalue = roundToTwo((baggagetubemassvalue * 3.65));

         /*standard baggage mass*/
         ctx.fillText(checkvalue(baggagetubemassvalue), 513, 363);
         /*standard baggage moment*/
         ctx.fillText(checkvalue(baggagetubemomentvalue), 688, 363);

         updateZerofuelMass();

       });

       $("#shortbaggae").change(function(){

         /*short baggage mass*/
         ctx.clearRect(500, 413, '120', '38');
         /*short bagggage mass moment*/
         ctx.clearRect(680, 413, '120', '38');

         shortbaggagemassvalue = document.getElementById("shortbaggae").value;
         shortbaggagemomentvalue = roundToTwo((shortbaggagemassvalue * 3.65));

         /*short baggage mass*/
         ctx.fillText(checkvalue(shortbaggagemassvalue), 513, 445);
         /*short baggage moment*/
         ctx.fillText(checkvalue(shortbaggagemomentvalue), 688, 445);

         updateZerofuelMass();
       });

       $("#fwdbaggage").change(function(){

         /*fwd baggage mass*/
         ctx.clearRect(500, 513, '120', '38');
         /*fwd bagggage mass moment*/
         ctx.clearRect(680, 513, '120', '38');

         forwardbaggagemassvalue = document.getElementById("fwdbaggage").value;
         forwardbaggagemomentvalue = roundToTwo((forwardbaggagemassvalue * 3.65));

         /*fwd baggage mass*/
         ctx.fillText(checkvalue(forwardbaggagemassvalue), 513, 546);
         /*fwd baggage moment*/
         ctx.fillText(checkvalue(forwardbaggagemomentvalue), 688, 546);

         updateZerofuelMass();

       });

      $("#aftbaggage").change(function(){

        /*aft baggage mass*/
        ctx.clearRect(500, 613, '120', '38');
        /*aft bagggage mass moment*/
        ctx.clearRect(680, 613, '120', '38');

        aftbaggagemassvalue = document.getElementById("aftbaggage").value;
        aftbaggagemomentvalue = roundToTwo((aftbaggagemassvalue * 3.65));

        /*aft baggage mass*/
        ctx.fillText(checkvalue(aftbaggagemassvalue), 513, 648);
        /*aft baggage moment*/
        ctx.fillText(checkvalue(aftbaggagemomentvalue), 688, 648);

        updateZerofuelMass();

      });

        //function that updates zerofuel massa values
          function updateZerofuelMass(){

            /*zero fuel mass leverarm*/
            ctx.clearRect(305, 700, '120', '50');
            /*zero fuel mass mass*/
            ctx.clearRect(500, 700, '120', '50');
            /*zero fuel mass moment*/
            ctx.clearRect(680, 700, '120', '50');
            /*zero fuel mass lverarm 2*/
            ctx.clearRect(504, 1005, '118', '34');

            mass = (mass === undefined ? '0' : mass);
            frontseatvalue = (frontseatvalue === undefined ? 0 : frontseatvalue);
            backseatsvalue = (backseatsvalue === undefined ? 0 : backseatsvalue);
            stdbaggagevalue = (stdbaggagevalue === undefined ? 0 : stdbaggagevalue);
            baggagetubemassvalue = (baggagetubemassvalue === undefined ? 0 : baggagetubemassvalue);
            shortbaggagemassvalue = (shortbaggagemassvalue === undefined ? 0 : shortbaggagemassvalue);
            forwardbaggagemassvalue = (forwardbaggagemassvalue === undefined ? 0 : forwardbaggagemassvalue);
            aftbaggagemassvalue = (aftbaggagemassvalue === undefined ? 0 : aftbaggagemassvalue);
            moment = (moment === undefined ? 0 : moment);

            frontseatmomentvalue = (frontseatmomentvalue === undefined ? 0 : frontseatmomentvalue);
            backseatmomentvalue = (backseatmomentvalue === undefined ? 0 : backseatmomentvalue);
            stdbaggagevaluemoment = (stdbaggagevaluemoment === undefined ? 0 : stdbaggagevaluemoment);
            baggagetubemomentvalue = (baggagetubemomentvalue === undefined ? 0 : baggagetubemomentvalue);
            shortbaggagemomentvalue = (shortbaggagemomentvalue === undefined ? 0 : shortbaggagemomentvalue);
            forwardbaggagemomentvalue = (forwardbaggagemomentvalue === undefined ? 0 : forwardbaggagemomentvalue);
            aftbaggagemomentvalue = (aftbaggagemomentvalue === undefined ? 0 : aftbaggagemomentvalue);


            zerofuelmassvalue = roundToTwo( +mass + +frontseatvalue + +backseatsvalue + +stdbaggagevalue + +baggagetubemassvalue + +shortbaggagemassvalue + +forwardbaggagemassvalue + +aftbaggagemassvalue);
            zerofuelmassmomentvalue = roundToTwo(+moment + +frontseatmomentvalue + +backseatmomentvalue + +stdbaggagevaluemoment + +baggagetubemomentvalue + +shortbaggagemomentvalue + +forwardbaggagemomentvalue + +aftbaggagemomentvalue);
            /*zerofuelmassleverarmvalue = roundToTwo(zerofuelmassmomentvalue / zerofuelmassvalue);*/

           /*zero fuel mass leverarm*/
           ctx.fillText(checkvalue(roundToTwo(zerofuelmassmomentvalue / zerofuelmassvalue)) , 338, 733);
           /*zero fuel mass mass*/
           ctx.fillText(checkvalue(zerofuelmassvalue), 513, 733);
           /*zero fuel mass moment*/
           ctx.fillText(checkvalue(zerofuelmassmomentvalue), 688, 733);
           /*zero fuel mass leverarm 2*/
           ctx.fillText(checkvalue(roundToThree(zerofuelmassmomentvalue / zerofuelmassvalue)), 504, 1039);

           updateTakeoffMass();
        }



         $("#fuel").change(function(){

           /*fuel mass*/
           ctx.clearRect(500, 760, '120', '38');
           /*fuel moment*/
           ctx.clearRect(680, 760, '120', '38');

           fuelmassvalue = roundToTwo(document.getElementById("fuel").value * 3.03);
           fuelmomentvalue = roundToTwo(fuelmassvalue * 2.63);
           /*fuel mass*/
           ctx.fillText(checkvalue(fuelmassvalue), 513, 788);
           /*fuel moment*/
           ctx.fillText(checkvalue(fuelmomentvalue), 688, 788);

           updateTakeoffMass();

         });

         /*Update take off mass*/
         function updateTakeoffMass(){

           /*take of mass leverarm*/
           ctx.clearRect(305, 813, '120', '55');
           /*take of mass mass*/
           ctx.clearRect(500, 813, '120', '55');
           /*take of mass moment*/
           ctx.clearRect(680, 813, '120', '55');
           /*take of mass leverarm 2*/
           ctx.clearRect(504, 1045, '119', '24');

           zerofuelmassvalue = (zerofuelmassvalue === undefined ? 0 : zerofuelmassvalue);
           fuelmassvalue = (fuelmassvalue === undefined ? 0 : fuelmassvalue);
           zerofuelmassmomentvalue = (zerofuelmassmomentvalue === undefined ? 0 : zerofuelmassmomentvalue);
           fuelmomentvalue = (fuelmomentvalue === undefined ? 0 : fuelmomentvalue);

           takeoffmassvalue = roundToTwo(zerofuelmassvalue + +fuelmassvalue);
           takeoffmassmomentvalue = roundToTwo(+zerofuelmassmomentvalue + +fuelmomentvalue);
           takeoffmassleverarmvalue = roundToTwo(takeoffmassmomentvalue / takeoffmassvalue);

           /*take of mass leverarm*/
           ctx.fillText(checkvalue(takeoffmassleverarmvalue), 338, 850);
           /*take of mass mass*/
           ctx.fillText(checkvalue(takeoffmassvalue), 513, 850);
           /*take of mass moment*/
           ctx.fillText(checkvalue(takeoffmassmomentvalue), 688, 850);
           /*take of mass leverarm 2*/
           ctx.fillText(checkvalue(roundToThree(takeoffmassmomentvalue / takeoffmassvalue)), 504, 1067);

           updatelandingmass();

         }



         $("#fuelburn").change(function(){

           /*fuel burn mass*/
           ctx.clearRect(500, 878, '129', '38');
           /*fuel burn moment*/
           ctx.clearRect(680, 878, '129', '38');

           fuelburnmassvalue = roundToTwo((document.getElementById("fuelburn").value * 3.03));
           fuelburnmomentvalue = roundToTwo(fuelburnmassvalue * 2.63);

           /*fuel burn mass*/
           ctx.fillText(checkvalue(fuelburnmassvalue), 513, 909);
           /*fuel burn moment*/
           ctx.fillText(checkvalue(fuelburnmomentvalue), 688, 909);

           updatelandingmass();

         });

         /*update landing mass*/
         function updatelandingmass(){

           /*landing mass leverarm*/
           ctx.clearRect(305, 935, '128', '50');
           /*landing mass mass*/
           ctx.clearRect(500, 935, '128', '50');
           /*landing mass moment*/
           ctx.clearRect(680, 935, '128', '50');
           /*landing mass leverarm 2*/
           ctx.clearRect(504, 1073, '119', '24');

           takeoffmassvalue = (takeoffmassvalue === undefined ? 0 : takeoffmassvalue);
           fuelburnmassvalue = (fuelburnmassvalue === undefined ? 0 : fuelburnmassvalue);
           takeoffmassmomentvalue = (takeoffmassmomentvalue === undefined ? 0 : takeoffmassmomentvalue);
           fuelburnmomentvalue = (fuelburnmomentvalue === undefined ? 0 : fuelburnmomentvalue);

           landingmassvalue = roundToTwo(takeoffmassvalue - fuelburnmassvalue);
           landingmassmomentvalue = roundToTwo(takeoffmassmomentvalue - fuelburnmomentvalue);
           landingmassleverarmvalue = roundToTwo(landingmassmomentvalue / landingmassvalue);


           /*landing mass leverarm*/
           ctx.fillText(checkvalue(landingmassleverarmvalue), 338, 975);
           /*landing mass mass*/
           ctx.fillText(checkvalue(landingmassvalue), 513, 975);
           /*landing mass moment*/
           ctx.fillText(checkvalue(landingmassmomentvalue), 688, 975);
           /*landing mass levararm 2*/
           ctx.fillText(checkvalue(roundToThree(landingmassmomentvalue / landingmassvalue)), 504, 1095);
         }

     });

    }


    $( "#btn" ).click(function() {
      print('printarea', 'html')
    });

    $( "#btn2" ).click(function() {
       print('printarea2', 'html')
    });

    function roundToTwo(num) {
      return +(Math.round(num + "e+1")  + "e-1");
    }
    function roundToTwoTwo(num) {
      return +(Math.round(num + "e+2")  + "e-2");
    }
    function roundToThree(num) {
    return +(Math.round(num + "e+3")  + "e-3");
    }
    function checkvalue(check){
      if(check === undefined || check === '0' || check === 0){
        return '-';
      }else{
        return check;
      }
}
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
                <Form.Group as={Row} controlId="exampleForm.aircraft" id="aircraft">
                <Form.Label column sm="2" id="mlabel">
                 <b>Aircraft</b>
               </Form.Label>
               <Col sm="10">
                  <Form.Control as="select">
                  <option value="-1">Aircraft</option>
                  <option value="A">G-CTSA</option>
                  <option value="B">G-CTSB</option>
                  <option value="C">G-CTSC</option>
                  <option value="D">G-CTSD</option>
                  <option value="E">G-CTSE</option>
                  <option value="G">G-CTSG</option>
                  <option value="H">G-CTSH</option>
                  <option value="J">G-CTSJ</option>
                  <option value="K">G-CTSK</option>
                  <option value="M">G-CTSM</option>
                  <option value="N">G-CTSN</option>
                  <option value="O">G-CTSO</option>
                  <option value="P">G-CTSP</option>
                  <option value="R">G-CTSR</option>
                  <option value="T">G-CTST</option>
                  </Form.Control>
                  </Col>
               </Form.Group>

               {/*Front seat 1*/}
               <Form.Group as={Row} controlId="frontseat1">
               <Form.Label column sm="2" id="mlabel">
                <b>Front seat 1</b>
               </Form.Label>
               <Col sm="10">
                 <Form.Control type="frontseat1" placeholder="Front seat 1" type="number" />
               </Col>
               </Form.Group>

               {/*Front seat 2*/}
               <Form.Group as={Row} controlId="exampleForm.frontseat2" id="frontseat2">
                 <Form.Label column sm="2" id="mlabel">
                  <b>Front seat 2</b>
                 </Form.Label>
                 <Col sm="10">
                 <Form.Control as="select">
                 <option value="0">Empty</option>
                 <option value="80">Mohammad Jumaa Shehadeh</option>
                 <option value="59">Rachelle Fays</option>
                 <option value="75">Mike</option>
                 <option value="85">Arash Emamalizadeh</option>
                 <option value="100">Gino Sabatino</option>
                 <option value="62">Bharat Pandya</option>
                 <option value="75">Gavin Norville</option>
                 <option value="100">Mohamed Aadil Hakim</option>
                 <option value="90">Phil Bell</option>
                 <option value="92">Ian Gerrard</option>
                 <option value="68">Peter Griffiths</option>
                 <option value="75">David Hagon</option>
                 <option value="65">David Heaven</option>
                 <option value="110">David Hoy</option>
                 <option value="80">Paul Jenkins</option>
                 <option value="90">Piers Smerdon</option>
                 <option value="72">Mark Emuss</option>
                 </Form.Control>
                 </Col>
              </Form.Group>

                {/*Back seats*/}
                <Form.Group as={Row} controlId="backseats">
                  <Form.Label column sm="2" id="mlabel">
                    <b>Rear seats</b>
                  </Form.Label>
                  <Col sm="10">
                  <Form.Control type="backseats" placeholder="Rear seats" type="number" />
                  </Col>
                </Form.Group>

                {/*Standard baggae*/}
                <Form.Group as={Row} controlId="stdbaggage">
                  <Form.Label column sm="2" id="mlabel">
                   <b>Std baggage</b>
                  </Form.Label>
                  <Col sm="10">
                  <Form.Control type="stdbaggage" placeholder="Standard baggage" type="number" />
                  </Col>
                </Form.Group>

                {/*Baggage tube*/}
                <Form.Group as={Row} controlId="baggagetube">
                  <Form.Label column sm="2" id="mlabel">
                   <b>Baggage tube</b>
                  </Form.Label>
                  <Col sm="10">
                  <Form.Control type="baggagetube" placeholder="Baggage tube" type="number" />
                  </Col>
                </Form.Group>

                {/*Short baggage*/}
                <Form.Group as={Row} controlId="shortbaggae">
                  <Form.Label column sm="2" id="mlabel">
                   <b>Short baggage</b>
                  </Form.Label>
                  <Col sm="10">
                  <Form.Control type="shortbaggage" placeholder="Short baggage" type="number" />
                  </Col>
                </Form.Group>

                {/*Fwd baggage*/}
                <Form.Group as={Row} controlId="fwdbaggage">
                  <Form.Label column sm="2" id="mlabel">
                   <b>Fwd baggage</b>
                  </Form.Label>
                  <Col sm="10">
                  <Form.Control type="fwdbaggage" placeholder="Fwd baggage" type="number" />
                  </Col>
                </Form.Group>

                {/*Aft baggage*/}
                <Form.Group as={Row} controlId="aftbaggage">
                  <Form.Label column sm="2" id="mlabel">
                    <b>Aft baggage</b>
                  </Form.Label>
                  <Col sm="10">
                  <Form.Control type="aftbaggage" placeholder="Aft baggage" type="number" />
                  </Col>
                </Form.Group>

                {/*Fuel*/}
                <Form.Group as={Row} controlId="fuel">
                  <Form.Label column sm="2" id="mlabel">
                   <b>Fuel (usg)</b>
                  </Form.Label>
                  <Col sm="10">
                  <Form.Control type="fuel" placeholder="Fuel (usg)" type="number" />
                  </Col>
                </Form.Group>

                {/*Fuek burn*/}
                <Form.Group as={Row} controlId="fuelburn">
                  <Form.Label column sm="2" id="mlabel">
                   <b>Fuel burn</b>
                  </Form.Label>
                  <Col sm="10">
                  <Form.Control type="fuelsburn" placeholder="Fuel burn (usg)" type="number" />
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

          <div class="pagebreak"> </div>
          <Row>
            <Col>
            <div id="printarea">
             <canvas class="result" id="mycanvas" ref="canvas" />
             <canvas class ="result" id="mycanvas2" ref="canvas2" />
            </div>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default FlightPlanning;

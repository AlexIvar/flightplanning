import React, { Component } from "react";
/*import Apitest from './apitest';*/
import './flightplanning.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";

import $ from "jquery";
import print from 'print-js'

const popover = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Takeoff run available</Popover.Title>
  <Popover.Content>
  The length of runway declared available and suitable for the ground run of an aeroplane taking off.
  </Popover.Content>
</Popover>
);

  const helpTora = (
  <Popover id="popover-basic">
    <Popover.Title as="h3" id="infoTitle">Takeoff run available</Popover.Title>
    <Popover.Content>
    The length of runway declared available and suitable for the ground run of an aeroplane taking off.
    </Popover.Content>
  </Popover>
);

const helpToda = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Take off distance available</Popover.Title>
  <Popover.Content>
  The length of the take off run available (Takeoff Run Available (TORA)) plus the length of the clearway, where provided.
  </Popover.Content>
</Popover>
);

const helpAsda = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Accelerate Stop Distance Available</Popover.Title>
  <Popover.Content>
  The length of the takeoff run plus the length of the Stopway, where provided.
  </Popover.Content>
</Popover>
);

const helpElevation = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Elevation</Popover.Title>
  <Popover.Content>
  The elevation of the selected aerodrome.
  </Popover.Content>
</Popover>
);

const helpQNH = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">QNH</Popover.Title>
  <Popover.Content>
  The pressure set on the subscale of the altimeter so that the instrument indicates its height above sea level. The altimeter will read runway elevation when the aircraft is on the runway.
  </Popover.Content>
</Popover>
);

const helpTempature = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Temperature</Popover.Title>
  <Popover.Content>
  The tempature of the selected airfield.
  </Popover.Content>
</Popover>
);

const helpWinddirection = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Wind direction</Popover.Title>
  <Popover.Content>
  The direction of the wind on the selected airfield.
  </Popover.Content>
</Popover>
);

const helpWindspeed = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">QNH</Popover.Title>
  <Popover.Content>
    The speed of the wind on the selected airfield.
  </Popover.Content>
</Popover>
);

const helpRunway = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Runway</Popover.Title>
  <Popover.Content>
    The direction of the runway in degrees magnetic.
  </Popover.Content>
</Popover>
);

const helpLDA = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Landing distance available</Popover.Title>
  <Popover.Content>
    Landing Distance Available (LDA). The length of the runway which is declared available by the appropriate Authority and is suitable for the ground run of an aeroplane landing.
  </Popover.Content>
</Popover>
);

const helpLPressureAlt = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Pressure altidude</Popover.Title>
  <Popover.Content>
    Pressure Altitude is simply the Altitude when the altimeter is set to 29.92” Hg which is the International Atmospheric Standard or ISA.
    The pressure altidude is calculated using this formula: (((1013 - qnh) * 30) + elevation)
  </Popover.Content>
</Popover>
);

const helpLTODRtable = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Take of distance required from table</Popover.Title>
  <Popover.Content>
    The TODR value is gotten from the table from the performance sheet by putting in the pressure altidude and temperature.
  </Popover.Content>
</Popover>
);

const helpLTODRtableWind = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Take of distance required corrected by wind</Popover.Title>
  <Popover.Content>
    Formula to correct TODR by wind:  todr * (100 - (headwind * (10/12))) / 100;
  </Popover.Content>
</Popover>
);

const helpFinalTODR = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Final TODR</Popover.Title>
  <Popover.Content>
    The final TODR is the TODR value from table corrected by wind and 30m added to the value.
  </Popover.Content>
</Popover>
);

const helpHeadwind = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Headwind</Popover.Title>
  <Popover.Content>
     Formula for calculating headwind: abs(wind speed * cos((wind direction - runway hdg) * PI / 180))
  </Popover.Content>
</Popover>
);

const helpXwind = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Crosswind</Popover.Title>
  <Popover.Content>
     Formula for calculating crosswind: abs(wind speed * sin((wind direction - runway hdg) * PI / 180));
  </Popover.Content>
</Popover>
);

const helpClearway = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Clearway</Popover.Title>
  <Popover.Content>
    Formula for calculating the length of a clearway: (toda - tora)
  </Popover.Content>
</Popover>
);

const helpStopway = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Stopway</Popover.Title>
  <Popover.Content>
      Formula for calculating the length of a stopway: (asda - tora)
  </Popover.Content>
</Popover>
);

const helpTORAFactored = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">TORA factored</Popover.Title>
  <Popover.Content>
    Final TORA = (TODR + 30). This number must not exceed TORA.
  </Popover.Content>
</Popover>
);

const helpTODAFactored = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">TODA factored</Popover.Title>
  <Popover.Content>
    Final TODA = (TODR * 1.15). This number must not exceed TODA.
  </Popover.Content>
</Popover>
);

const helpASDAFactored = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">ASDA factored</Popover.Title>
  <Popover.Content>
    Final ASDA = (TODR * 1.3). This number must not exceed ASDA.
  </Popover.Content>
</Popover>
);

const helpTORAnoClearwayOrStopway = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">TORA factored</Popover.Title>
  <Popover.Content>
    TORA = (TODR * 1.25). This number must not exceed TORA.
  </Popover.Content>
</Popover>
);

const helpLDRtable = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Landing distance required from table</Popover.Title>
  <Popover.Content>
    The LDR value is gotten from the table from the performance sheet by putting in the pressure altidude and temperature.
    If the runway is wet then 1.15 is mutliplied to this number.
  </Popover.Content>
</Popover>
);

const helpLDRwind = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Landing distance corrected by wind</Popover.Title>
  <Popover.Content>
    Formula for correcting the LDR for wind: LDR * (100 - (headwind * (10/20))) / 100;
        If the runway is wet then 1.15 is mutliplied to this number.
  </Popover.Content>
</Popover>
);

const helpLDRtableFactored = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Landing distance from table factored</Popover.Title>
  <Popover.Content>
    (LDR from table * 1.43)
        If the runway is wet then 1.15 is mutliplied to this number.
  </Popover.Content>
</Popover>
);

const helpLDRwindFactored = (
<Popover id="popover-basic">
  <Popover.Title as="h3" id="infoTitle">Landing distance corrected by wind factored</Popover.Title>
  <Popover.Content>
    (LDR corrected by wind * 1.43)
        If the runway is wet then 1.15 is mutliplied to this number.
  </Popover.Content>
</Popover>
);




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


     ctx2.font = "30px Permanent Marker";

   }

    base_image.onload = function(){

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




     /*Document ready*/
     $(document).ready(function(){
       ctx.font = "35px Permanent Marker";
       ctx2.font = "35px Permanent Marker";

       /*initialize code here*/
       if(document.getElementById("tora").value !== undefined && document.getElementById("tora").value !== ''){
         ctx.fillStyle = '#9bc0c5';
         ctx.fillRect(680, 1125, '120', '38');
         ctx.fillStyle = '#000';
         toravalue = document.getElementById("tora").value;
         ctx.fillText(toravalue, 680, 1155);
       };

       if(document.getElementById("toda").value !== undefined && document.getElementById("toda").value !== ''){
         ctx.fillStyle = '#9bc0c5';
         ctx.fillRect(680, 1190, '120', '38');
         ctx.fillStyle = '#000';
         todavalue = document.getElementById("toda").value;

         ctx.fillText(todavalue, 680, 1220);
       };

       if(document.getElementById("asda").value !== undefined && document.getElementById("asda").value !== ''){
         ctx.fillStyle = '#91baba';
         ctx.fillRect(680, 1250, '120', '38');
         ctx.fillStyle = '#000';
         asdavalue = document.getElementById("asda").value;

         ctx.fillText(asdavalue, 680, 1285);
       };

       if(document.getElementById("lda1").value !== undefined && document.getElementById("lda1").value !== ''){
         ctx2.fillStyle = '#afc6ce';
         ctx2.fillRect(520, 1175, '80', '30');
         ctx2.fillStyle = '#000';
         lda1value = document.getElementById("lda1").value;
         ctx2.fillText(lda1value, 520, 1205);
       };

       if(document.getElementById("lda2").value !== undefined && document.getElementById("lda2").value !== ''){
         ctx2.fillStyle = '#afc6ce';
         ctx2.fillRect(520, 1255, '80', '30');
         ctx2.fillStyle = '#000';
         lda2value = document.getElementById("lda2").value;
         ctx2.fillText(lda2value, 520, 1285);
       };

       /********************************************************************************************************/

       $("#noClearwayAndStopway").hide();
       $("#performance1 :input").change(function() {


         console.log("the data has changed yee")
         console.log("elevation: " + document.getElementById("elevation").value)
         console.log("qnh: " + document.getElementById("qnh").value)
         console.log("pressure alt: " + pressureAlt(document.getElementById("elevation").value, document.getElementById("qnh").value));
         var press = pressureAlt(document.getElementById("elevation").value, document.getElementById("qnh").value);
         var lol = roundToNearestHundered(press);
         console.log("press rounded to nearest hundered: " + lol);
         var t = getTodr(document.getElementById("elevation").value, document.getElementById("qnh").value, document.getElementById("temperature").value);
         var h = calculateHeadwind(document.getElementById("windspeed").value, document.getElementById("winddirection").value, document.getElementById("runway").value);
         var tw = correctTodrForWind(t, h);
         var finalTodr = takeoffDistanceOver50ftObsticle(tw);
         var xwind = calculateCrosswind(document.getElementById("windspeed").value, document.getElementById("winddirection").value, document.getElementById("runway").value);
         console.log("TODR value: " + t);
         console.log("headwind: " + h);
         console.log("Crosswind: " + xwind)
         console.log("TODR corrected for wind: " + tw)
         console.log("Final TODR: " + finalTodr)
         console.log("TODA: " + getToda(finalTodr));
         console.log("ASDA: " + getAsda(finalTodr));

         var _toda = document.getElementById("toda").value;
         var _tora = document.getElementById("tora").value;
         var _asda = document.getElementById("asda").value;

         if(hasClearwayOrStopway(_toda, _tora, _asda)){
           $("#clearwayAndStopway").show();
           $("#noClearwayAndStopway").hide();
           var toda = getToda(finalTodr);
           var asda = getAsda(finalTodr);
           document.getElementById("finalTodr").value = Math.round(finalTodr);
           document.getElementById("toraFactored").value = Math.round(finalTodr);
           document.getElementById("asdaFactored").value = Math.round(asda);
           document.getElementById("todaFactored").value = Math.round(toda);

           document.getElementById("clearwayLenght").value = getClearwayLength(_toda, _tora);
           document.getElementById("stopwayLenght").value = getStopwayLength(_asda, _tora);
         }
         else{
           $("#clearwayAndStopway").hide();
           $("#noClearwayAndStopway").show();
           var f = noStopwayAndClearway(finalTodr);
           document.getElementById("todrFactored").value = Math.round(f);
         }


         document.getElementById("windCorrectionTodr").value = Math.round(tw);
         document.getElementById("pressureAltidude").value = Math.round(press);

         document.getElementById("headWind").value = Math.round(h);
         document.getElementById("crossWind").value = Math.round(xwind);
         document.getElementById("todrTable").value = t;

         var l = getLdr(document.getElementById("elevation").value, document.getElementById("qnh").value, document.getElementById("temperature").value);
         document.getElementById("ldrTable").value = l;
         var lfactor = getFactoredLdr(l);
         document.getElementById("ldrTableFactorized").value = Math.round(lfactor);
         var lw = correctLdrForWind(l, h);
         document.getElementById("windCorrectionLdr").value = Math.round(lw);
         var lwfactor = correctLdrForWind(lfactor, h);
         document.getElementById("windCorrectionLdrFactorized").value = Math.round(lwfactor);

         /*write TODR on paper*/
         if(document.getElementById("toraFactored").value !== undefined && document.getElementById("toraFactored").value !== ''){
           ctx.fillStyle = '#006e94';
           ctx.fillRect(680, 1310, '110', '38');
           ctx.fillStyle = '#000';
           asdavalue = document.getElementById("toraFactored").value;
           ctx.fillText(asdavalue, 680, 1340);
         }

         if(document.getElementById("toraFactored").value !== undefined && document.getElementById("toraFactored").value !== ''){
           ctx.fillStyle = '#006e94';
           ctx.fillRect(725, 1370, '70', '38');
           ctx.fillStyle = '#000';
           asdavalue = Math.round((document.getElementById("toraFactored").value) * 1.25);
           ctx.fillText(asdavalue, 725, 1400);
         }

         /*write TODA on paper*/
         if(document.getElementById("todaFactored").value !== undefined && document.getElementById("todaFactored").value !== ''){
           ctx.fillStyle = '#88b3b9';
           ctx.fillRect(725, 1430, '70', '38');
           ctx.fillStyle = '#000';
           asdavalue = document.getElementById("todaFactored").value;
           ctx.fillText(asdavalue, 725, 1460);
         }

         /*write asda on paper*/
         if(document.getElementById("asdaFactored").value !== undefined && document.getElementById("asdaFactored").value !== ''){
           ctx.fillStyle = '#88b3b9';
           ctx.fillRect(725, 1490, '70', '38');
           ctx.fillStyle = '#000';
           asdavalue = document.getElementById("asdaFactored").value;
           ctx.fillText(asdavalue, 725, 1525);
         }

         /*write lda factored on paper 2*/
         if(document.getElementById("ldrTableFactorized").value !== undefined && document.getElementById("ldrTableFactorized").value !== ''){
           ctx2.fillStyle = '#0a7a96';
           ctx2.fillRect(520, 1340, '80', '30');
           ctx2.fillStyle = '#000';
           lda2value = document.getElementById("ldrTableFactorized").value;
           ctx2.fillText(lda2value, 520, 1370);
         }

         /*write lda corrected by wind factored on paper 2*/
         if(document.getElementById("windCorrectionLdrFactorized").value !== undefined && document.getElementById("windCorrectionLdrFactorized").value !== ''){
           ctx2.fillStyle = '#0a7a96';
           ctx2.fillRect(520, 1415, '80', '30');
           ctx2.fillStyle = '#000';
           lda2value = document.getElementById("windCorrectionLdrFactorized").value;
           ctx2.fillText(lda2value, 520, 1445);
         }


       });

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

    function pressureAlt(elevation, qnh){
      if((elevation !== undefined && elevation !== '') && (qnh !== undefined && qnh !== '')){
        return (((1013 - qnh) * 30)+ + elevation);
      }
    }

    function getTodr(elevation, qnh, t){
      console.log(t)
      if((elevation !== undefined && elevation !== '') && (qnh !== undefined && qnh !== '') && (t !== undefined && t !== '')){
        var press = pressureAlt(elevation, qnh);
        var pressround = roundToNearestHundered(press);
        var num = pressround / 100;
        var todrnum;
        try{
          if(document.getElementById('toggle1100kg').checked){
            return todrNumber[num][t];
          }else if (document.getElementById('toggle1200kg').checked){
            return todrNumber1200kg[num][t];
          }else{
            return todrNumber1280[num][t];
          }
      }catch(a){
        return '';
      }
      }
    }

    function getLdr(elevation, qnh, t){
      if((elevation !== undefined && elevation !== '') && (qnh !== undefined && qnh !== '') && (t !== undefined && t !== '')){
        var press = pressureAlt(elevation, qnh);
        var pressround = roundToNearestHundered(press);
        var num = pressround / 100;
        var todrnum;
          if($("#wetSwitch").is(':checked')){
            try{
              if(document.getElementById('toggle1100kg').checked){
                return Math.round((ldrNumber[num][t]) * 1.15);
              }else if (document.getElementById('toggle1200kg').checked){
                return Math.round((ldrNumber1200kg[num][t]) * 1.15);
              }else{
                return Math.round((ldrNumber1280kg[num][t]) * 1.15);
              }
            //return Math.round((ldrNumber[num][t]) * 1.15);
          }catch(a){
            return '';
          }
          }else{
            try{

              if(document.getElementById('toggle1100kg').checked){
                return ldrNumber[num][t];
              }else if (document.getElementById('toggle1200kg').checked){
                return ldrNumber1200kg[num][t];
              }else{
                return ldrNumber1280kg[num][t];
              }
          }catch(a){
            return '';
          }
          }

      }
    }

    /*Rounds a number to the nearest hundered*/
    function roundToNearestHundered(number){
      if(number !== undefined && number !== ''){
        return Math.round(number/100) * 100;
      }
    }

    /*Returns headwind*/
    function calculateHeadwind(windspeed, winddirection, runwayhdg){
      if((windspeed !== undefined && windspeed !== '') && (winddirection !== undefined && windspeed !== '') && (runwayhdg !== undefined && runwayhdg !== '')){
        return Math.abs(windspeed * Math.cos((winddirection - runwayhdg) * Math.PI / 180))
      }
    }

    /*Return crosswind*/
    function calculateCrosswind(windspeed, winddirection, runwayhdg){
      if((windspeed !== undefined && windspeed !== '') && (winddirection !== undefined && windspeed !== '') && (runwayhdg !== undefined && runwayhdg !== '')){
        return Math.abs(windspeed * Math.sin((winddirection - runwayhdg) * Math.PI / 180));
      }
    }

    /*Final correction for headwind*/
    function correctTodrForWind(todr, headwind){
      if((todr !== undefined && todr !== '') && (headwind !== undefined && headwind !== '')){
        return todr * (100 - (headwind * (10/12))) / 100;
      }
    }

    /*Final correction for headwind ldr*/
    function correctLdrForWind(ldr, headwind){
      if((ldr !== undefined && ldr !== '') && (headwind !== undefined && headwind !== '')){
        return ldr * (100 - (headwind * (10/20))) / 100;
      }
    }

    /*Increase takeoff distance over a 50ft obsticle by 30 m.*/
    function takeoffDistanceOver50ftObsticle(todr){
      if(todr !== undefined && todr !== ''){
        return todr + 30;
      }
    }

    /*If runway is wet multiply LDR by 1.15*/
    function runwayWetCorrection(ldr){
      if(ldr !== undefined && ldr !== ''){
        return ldr * 1.15;
      }
    }

    /*if there is no stopway and no clearway then TODR * 1.25 < TORA*/
    function noStopwayAndClearway(todr){
      if(todr !== undefined && todr !== ''){
        return todr * 1.25;
      }
    }

    /*returns take of distance available*/
    function getToda(todr){
      if(todr !== undefined && todr !== ''){
        return todr * 1.15;
      }
    }

    /*returns accelarate stop distance available*/
    function getAsda(todr){
      if(todr !== undefined && todr !== ''){
        return todr * 1.3;
      }
    }

    /*returns true if there is a clearway or stopway available*/
    function hasClearwayOrStopway(toda, tora, asda){
      console.log("the toda length: " + toda)
      console.log("the tora length: " + tora)
      console.log("the asda length: " + asda)
      if((toda !== undefined && toda !== '') && (tora !== undefined && tora !== '') && (asda !== undefined && asda !== '')){
        return !(toda === tora && tora === asda && asda === toda);
      }
    }

    /*Return stopway length*/
    function getStopwayLength(asda, tora){
      if((asda !== undefined && asda !== '') && (tora !== undefined !== '')){
        return asda - tora;
      }
    }

    /*get clearway length*/
    function getClearwayLength(toda, tora){
      if((toda !== undefined && toda !== '') && (tora !== undefined !== '')){
        return toda - tora;
      }
    }

    function getFactoredLdr(ldr){
      if(ldr !== undefined && ldr !== ''){
        return ldr * 1.43;
      }
    }

    //up to 4000ft and 50 degrees
    var todrNumber = [
                     [430,432,434,436,438,440,442,444,446,448,450,452,454,456,458,460,462,464,466,468,470,472,474,476,478,480,482,484,486,488,490,494,498,502,506,510,514,518,522,526,530,533,536,539,542,545,548,551,554,557,560],
                     [432,434,436,438,440,442,444,446,448,450,452,454,456,458,460,463,465,467,469,471,473,475,477,479,481,484,486,488,490,492,494,498,502,506,510,514,518,522,526,530,534,537,540,543,546,549,552,555,558,561,564],
                     [434,436,438,440,442,444,446,448,450,452,454,456,458,461,463,465,467,469,472,474,476,478,480,483,485,487,489,491,494,496,498,502,506,510,514,518,522,526,530,534,538,541,544,547,550,553,556,559,562,565,568],
                     [436,438,440,442,444,446,448,450,452,454,456,458,461,463,465,467,470,472,474,477,479,481,484,486,488,490,493,495,497,500,502,506,510,514,518,522,526,530,534,538,542,545,548,551,554,557,560,563,566,569,572],
                     [438,440,442,444,446,448,450,452,454,456,458,460,463,465,468,470,472,475,477,480,482,484,487,489,492,494,496,499,501,504,506,510,514,518,522,526,530,534,538,542,546,549,552,555,558,561,564,567,570,573,576],
                     [440,442,444,446,448,450,452,454,456,458,460,463,465,467,470,472,475,477,480,482,485,487,490,492,495,497,500,502,505,508,510,514,518,522,526,530,534,538,542,546,550,553,556,559,562,565,568,571,574,577,580],
                     [442,444,446,448,450,452,454,456,458,460,462,465,467,470,472,475,478,480,483,485,488,491,493,496,498,501,504,506,509,511,514,518,522,526,530,534,538,542,546,550,554,557,560,563,566,569,572,575,578,581,584],
                     [444,446,448,450,452,454,456,458,460,462,464,467,469,472,475,477,480,483,486,488,491,494,496,499,502,504,507,510,513,515,518,522,526,530,534,538,542,546,550,554,558,561,564,567,570,573,576,579,582,585,588],
                     [446,448,450,452,454,456,458,460,462,464,466,469,472,474,477,480,483,486,488,491,494,497,500,502,505,508,511,514,516,519,522,526,530,534,538,542,546,550,554,558,562,565,568,571,574,577,580,583,586,589,592],
                     [448,450,452,454,456,458,460,462,464,466,468,471,474,477,480,482,485,488,491,494,497,500,503,506,509,511,514,517,520,523,526,530,534,538,542,546,550,554,558,562,566,569,572,575,578,581,584,587,590,593,596],
                     [450,452,454,456,458,460,462,464,466,468,470,473,476,479,482,485,488,491,494,497,500,503,506,509,512,515,518,521,524,527,530,534,538,542,546,550,554,558,562,566,570,573,576,579,582,585,588,591,594,597,600],
                     [453,455,457,459,461,463,465,467,469,471,473,476,479,482,485,488,491,494,497,500,503,506,509,512,515,518,522,525,528,531,534,538,542,546,550,554,557,561,565,569,573,576,579,583,586,589,592,595,599,602,605],
                     [456,458,460,462,464,466,468,470,472,474,476,479,482,485,488,491,494,497,500,503,506,509,512,516,519,522,525,528,532,535,538,542,546,549,553,557,561,565,568,572,576,579,583,586,590,593,596,600,603,607,610],
                     [459,461,463,465,467,469,471,473,475,477,479,482,485,488,491,494,497,500,503,506,509,512,516,519,522,525,529,532,535,539,542,546,549,553,557,561,564,568,572,575,579,583,586,590,593,597,601,604,608,611,615],
                     [462,464,466,468,470,472,474,476,478,480,482,485,488,491,494,497,500,503,506,509,512,515,519,522,526,529,532,536,539,543,546,550,553,557,560,564,568,571,575,578,582,586,590,593,597,601,605,609,612,616,620],
                     [465,467,469,471,473,475,477,479,481,483,485,488,491,494,497,500,503,506,509,512,515,518,522,525,529,532,536,539,543,547,550,554,557,561,564,568,571,575,578,582,585,589,593,597,601,605,609,613,617,621,625],
                     [468,470,472,474,476,478,480,482,484,486,488,491,494,497,500,503,506,509,512,515,518,522,525,529,532,536,540,543,547,550,554,557,561,564,568,571,574,578,581,585,588,592,596,601,605,609,613,617,622,626,630],
                     [471,473,475,477,479,481,483,485,487,489,491,494,497,500,503,506,509,512,515,518,521,525,528,532,536,539,543,547,551,554,558,561,565,568,571,575,578,581,584,588,591,595,600,604,609,613,617,622,626,631,635],
                     [474,476,478,480,482,484,486,488,490,492,494,497,500,503,506,509,512,515,518,521,524,528,532,535,539,543,547,551,554,558,562,565,568,572,575,578,581,584,588,591,594,599,603,608,612,617,622,626,631,635,640],
                     [477,479,481,483,485,487,489,491,493,495,497,500,503,506,509,512,515,518,521,524,527,531,535,539,543,547,550,554,558,562,566,569,572,575,578,582,585,588,591,594,597,602,607,611,616,621,626,631,635,640,645],
                     [480,482,484,486,488,490,492,494,496,498,500,503,506,509,512,515,518,521,524,527,530,534,538,542,546,550,554,558,562,566,570,573,576,579,582,585,588,591,594,597,600,605,610,615,620,625,630,635,640,645,650],
                     [482,484,486,488,490,493,495,497,499,501,503,506,509,512,515,518,521,524,527,530,533,537,541,545,549,554,558,562,566,570,574,577,580,583,586,590,593,596,599,602,605,610,615,620,625,630,634,639,644,649,654],
                     [484,486,488,491,493,495,497,499,502,504,506,509,512,515,518,521,524,527,530,533,536,540,544,549,553,557,561,565,570,574,578,581,584,588,591,594,597,600,604,607,610,615,620,624,629,634,639,644,648,653,658],
                     [486,488,491,493,495,498,500,502,504,507,509,512,515,518,521,524,527,530,533,536,539,543,548,552,556,561,565,569,573,578,582,585,589,592,595,599,602,605,608,612,615,620,624,629,634,639,643,648,653,657,662],
                     [488,490,493,495,498,500,502,505,507,510,512,515,518,521,524,527,530,533,536,539,542,546,551,555,560,564,568,573,577,582,586,589,593,596,600,603,606,610,613,617,620,625,629,634,638,643,648,652,657,661,666],
                     [490,493,495,498,500,503,505,508,510,513,515,518,521,524,527,530,533,536,539,542,545,550,554,559,563,568,572,577,581,586,590,594,597,601,604,608,611,615,618,622,625,630,634,639,643,648,652,657,661,666,670],
                     [492,495,497,500,502,505,508,510,513,515,518,521,524,527,530,533,536,539,542,545,548,553,557,562,566,571,576,580,585,589,594,598,601,605,608,612,616,619,623,626,630,634,639,643,648,652,656,661,665,670,674],
                     [494,497,499,502,505,508,510,513,516,518,521,524,527,530,533,536,539,542,545,548,551,556,560,565,570,575,579,584,589,593,598,602,605,609,613,617,620,624,628,631,635,639,644,648,652,657,661,665,669,674,678],
                     [496,499,502,504,507,510,513,516,518,521,524,527,530,533,536,539,542,545,548,551,554,559,564,568,573,578,583,588,592,597,602,606,610,613,617,621,625,629,632,636,640,644,648,653,657,661,665,669,674,678,682],
                     [498,501,504,507,510,513,515,518,521,524,527,530,533,536,539,542,545,548,551,554,557,562,567,572,577,582,586,591,596,601,606,610,614,618,622,626,629,633,637,641,645,649,653,657,661,666,670,674,678,682,686],
                     [500,503,506,509,512,515,518,521,524,527,530,533,536,539,542,545,548,551,554,557,560,565,570,575,580,585,590,595,600,605,610,614,618,622,626,630,634,638,642,646,650,654,658,662,666,670,674,678,682,686,690],
                     [503,506,509,512,515,518,521,524,527,530,533,536,539,542,545,549,552,555,558,561,564,569,574,579,584,589,594,599,604,609,614,618,622,626,630,635,639,643,647,651,655,659,663,667,671,676,680,684,688,692,696],
                     [506,509,512,515,518,521,524,527,530,533,536,539,542,546,549,552,555,558,562,565,568,573,578,583,588,593,598,603,608,613,618,622,626,631,635,639,643,647,652,656,660,664,668,673,677,681,685,689,694,698,702],
                     [509,512,515,518,521,524,527,530,533,536,539,542,546,549,552,556,559,562,565,569,572,577,582,587,592,597,602,607,612,617,622,626,631,635,639,644,648,652,656,661,665,669,674,678,682,687,691,695,699,704,708],
                     [512,515,518,521,524,527,530,533,536,539,542,545,549,552,556,559,562,566,569,573,576,581,586,591,596,601,606,611,616,621,626,630,635,639,644,648,652,657,661,666,670,674,679,683,688,692,696,701,705,710,714],
                     [515,518,521,524,527,530,533,536,539,542,545,549,552,556,559,563,566,570,573,577,580,585,590,595,600,605,610,615,620,625,630,635,639,644,648,653,657,662,666,671,675,680,684,689,693,698,702,707,711,716,720],
                     [518,521,524,527,530,533,536,539,542,545,548,552,555,559,562,566,570,573,577,580,584,589,594,599,604,609,614,619,624,629,634,639,643,648,652,657,662,666,671,675,680,685,689,694,698,703,708,712,717,721,726],
                     [521,524,527,530,533,536,539,542,545,548,551,555,558,562,566,570,573,577,581,584,588,593,598,603,608,613,618,623,628,633,638,643,647,652,657,662,666,671,676,680,685,690,694,699,704,709,713,718,723,727,732],
                     [524,527,530,533,536,539,542,545,548,551,554,558,562,565,569,573,577,581,584,588,592,597,602,607,612,617,622,627,632,637,642,647,652,656,661,666,671,676,680,685,690,695,700,704,709,714,719,724,728,733,738],
                     [527,530,533,536,539,542,545,548,551,554,557,561,565,569,573,577,580,584,588,592,596,601,606,611,616,621,626,631,636,641,646,651,656,661,666,671,675,680,685,690,695,700,705,710,715,720,724,729,734,739,744],
                     [530,533,536,539,542,545,548,551,554,557,560,564,568,572,576,580,584,588,592,596,600,605,610,615,620,625,630,635,640,645,650,655,660,665,670,675,680,685,690,695,700,705,710,715,720,725,730,735,740,745,750],
                     ];

      //up to 4000ft and 50 degrees
      var todrNumber1200kg = [
        [490,493,496,499,502,505,508,511,514,517,520,522,524,526,528,530,532,534,536,538,540,543,546,549,552,555,558,561,564,567,570,574,578,582,586,590,594,598,602,606,610,613,616,619,622,625,628,631,634,637,640],
        [493,496,499,502,505,508,511,514,517,520,523,525,527,529,531,533,535,537,539,541,543,546,549,552,555,559,562,565,568,571,574,578,582,586,590,594,598,602,606,610,614,617,620,623,626,630,633,636,639,642,645],
        [496,499,502,505,508,511,514,517,520,523,526,528,530,532,534,536,538,540,542,544,546,549,552,556,559,562,565,568,572,575,578,582,586,590,594,598,602,606,610,614,618,621,624,628,631,634,637,640,644,647,650],
        [499,502,505,508,511,514,517,520,523,526,529,531,533,535,537,539,541,543,545,547,549,552,556,559,562,566,569,572,575,579,582,586,590,594,598,602,606,610,614,618,622,625,629,632,635,639,642,645,648,652,655],
        [502,505,508,511,514,517,520,523,526,529,532,534,536,538,540,542,544,546,548,550,552,555,559,562,566,569,572,576,579,583,586,590,594,598,602,606,610,614,618,622,626,629,633,636,640,643,646,650,653,657,660],
        [505,508,511,514,517,520,523,526,529,532,535,537,539,541,543,545,547,549,551,553,555,559,562,566,569,573,576,580,583,587,590,594,598,602,606,610,614,618,622,626,630,634,637,641,644,648,651,655,658,662,665],
        [508,511,514,517,520,523,526,529,532,535,538,540,542,544,546,548,550,552,554,556,558,562,565,569,572,576,580,583,587,590,594,598,602,606,610,614,618,622,626,630,634,638,641,645,648,652,656,659,663,666,670],
        [511,514,517,520,523,526,529,532,535,538,541,543,545,547,549,551,553,555,557,559,561,565,568,572,576,580,583,587,591,594,598,602,606,610,614,618,622,626,630,634,638,642,645,649,653,657,660,664,668,671,675],
        [514,517,520,523,526,529,532,535,538,541,544,546,548,550,552,554,556,558,560,562,564,568,572,575,579,583,587,591,594,598,602,606,610,614,618,622,626,630,634,638,642,646,650,653,657,661,665,669,672,676,680],
        [517,520,523,526,529,532,535,538,541,544,547,549,551,553,555,557,559,561,563,565,567,571,575,579,583,587,590,594,598,602,606,610,614,618,622,626,630,634,638,642,646,650,654,658,662,666,669,673,677,681,685],
        [520,523,526,529,532,535,538,541,544,547,550,552,554,556,558,560,562,564,566,568,570,574,578,582,586,590,594,598,602,606,610,614,618,622,626,630,634,638,642,646,650,654,658,662,666,670,674,678,682,686,690],
        [523,526,529,532,535,538,541,544,547,550,553,555,557,559,561,564,566,568,570,572,574,578,582,586,590,594,598,602,606,610,614,618,622,626,630,635,639,643,647,651,655,659,663,667,671,675,679,683,687,691,695],
        [526,529,532,535,538,541,544,547,550,553,556,558,560,563,565,567,569,571,574,576,578,582,586,590,594,598,602,606,610,614,618,622,626,631,635,639,643,647,652,656,660,664,668,672,676,680,684,688,692,696,700],
        [529,532,535,538,541,544,547,550,553,556,559,561,564,566,568,571,573,575,577,580,582,586,590,594,598,602,606,610,614,618,622,626,631,635,639,644,648,652,656,661,665,669,673,677,681,685,689,693,697,701,705],
        [532,535,538,541,544,547,550,553,556,559,562,564,567,569,572,574,576,579,581,584,586,590,594,598,602,606,610,614,618,622,626,630,635,639,644,648,652,657,661,666,670,674,678,682,686,690,694,698,702,706,710],
        [535,538,541,544,547,550,553,556,559,562,565,568,570,573,575,578,580,583,585,588,590,594,598,602,606,610,614,618,622,626,630,635,639,644,648,653,657,662,666,671,675,679,683,687,691,695,699,703,707,711,715],
        [538,541,544,547,550,553,556,559,562,565,568,571,573,576,578,581,584,586,589,591,594,598,602,606,610,614,618,622,626,630,634,639,643,648,652,657,662,666,671,675,680,684,688,692,696,700,704,708,712,716,720],
        [541,544,547,550,553,556,559,562,565,568,571,574,576,579,582,585,587,590,593,595,598,602,606,610,614,618,622,626,630,634,638,643,647,652,657,662,666,671,676,680,685,689,693,697,701,705,709,713,717,721,725],
        [544,547,550,553,556,559,562,565,568,571,574,577,580,582,585,588,591,594,596,599,602,606,610,614,618,622,626,630,634,638,642,647,652,656,661,666,671,676,680,685,690,694,698,702,706,710,714,718,722,726,730],
        [547,550,553,556,559,562,565,568,571,574,577,580,583,586,589,592,594,597,600,603,606,610,614,618,622,626,630,634,638,642,646,651,656,661,666,671,675,680,685,690,695,699,703,707,711,715,719,723,727,731,735],
        [550,553,556,559,562,565,568,571,574,577,580,583,586,589,592,595,598,601,604,607,610,614,618,622,626,630,634,638,642,646,650,655,660,665,670,675,680,685,690,695,700,704,708,712,716,720,724,728,732,736,740],
        [553,556,559,562,565,568,571,574,577,580,583,586,589,592,595,599,602,605,608,611,614,618,622,626,630,635,639,643,647,651,655,660,665,670,675,680,685,690,695,700,705,709,713,717,721,726,730,734,738,742,746],
        [556,559,562,565,568,571,574,577,580,583,586,589,592,596,599,602,605,608,612,615,618,622,626,631,635,639,643,647,652,656,660,665,670,675,680,685,690,695,700,705,710,714,718,723,727,731,735,739,744,748,752],
        [559,562,565,568,571,574,577,580,583,586,589,592,596,599,602,606,609,612,615,619,622,626,631,635,639,644,648,652,656,661,665,670,675,680,685,690,695,700,705,710,715,719,724,728,732,737,741,745,749,754,758],
        [562,565,568,571,574,577,580,583,586,589,592,595,599,602,606,609,612,616,619,623,626,630,635,639,644,648,652,657,661,666,670,675,680,685,690,695,700,705,710,715,720,724,729,733,738,742,746,751,755,760,764],
        [565,568,571,574,577,580,583,586,589,592,595,599,602,606,609,613,616,620,623,627,630,635,639,644,648,653,657,662,666,671,675,680,685,690,695,700,705,710,715,720,725,730,734,739,743,748,752,757,761,766,770],
        [568,571,574,577,580,583,586,589,592,595,598,602,605,609,612,616,620,623,627,630,634,639,643,648,652,657,662,666,671,675,680,685,690,695,700,705,710,715,720,725,730,735,739,744,748,753,758,762,767,771,776],
        [571,574,577,580,583,586,589,592,595,598,601,605,608,612,616,620,623,627,631,634,638,643,647,652,657,662,666,671,676,680,685,690,695,700,705,710,715,720,725,730,735,740,744,749,754,759,763,768,773,777,782],
        [574,577,580,583,586,589,592,595,598,601,604,608,612,615,619,623,627,631,634,638,642,647,652,656,661,666,671,676,680,685,690,695,700,705,710,715,720,725,730,735,740,745,750,754,759,764,769,774,778,783,788],
        [577,580,583,586,589,592,595,598,601,604,607,611,615,619,623,627,630,634,638,642,646,651,656,661,666,671,675,680,685,690,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,774,779,784,789,794],
        [580,583,586,589,592,595,598,601,604,607,610,614,618,622,626,630,634,638,642,646,650,655,660,665,670,675,680,685,690,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,780,785,790,795,800],
        [583,586,589,592,595,598,601,604,607,610,613,617,621,626,630,634,638,642,647,651,655,660,665,670,675,680,685,690,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,781,786,791,796,801,806],
        [586,589,592,595,598,601,604,607,610,613,616,620,625,629,634,638,642,647,651,656,660,665,670,675,680,685,690,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,776,781,786,791,796,802,807,812],
        [589,592,595,598,601,604,607,610,613,616,619,624,628,633,637,642,647,651,656,660,665,670,675,680,685,690,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,776,781,786,792,797,802,807,813,818],
        [592,595,598,601,604,607,610,613,616,619,622,627,632,636,641,646,651,656,660,665,670,675,680,685,690,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,781,786,792,797,802,808,813,819,824],
        [595,598,601,604,607,610,613,616,619,622,625,630,635,640,645,650,655,660,665,670,675,680,685,690,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,781,786,792,797,803,808,814,819,825,830],
        [598,601,604,607,610,613,616,619,622,625,628,633,638,644,649,654,659,664,670,675,680,685,690,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,780,786,791,797,802,808,814,819,825,830,836],
        [601,604,607,610,613,616,619,622,625,628,631,636,642,647,653,658,663,669,674,680,685,690,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,780,785,791,796,802,808,814,819,825,831,836,842],
        [604,607,610,613,616,619,622,625,628,631,634,640,645,651,656,662,668,673,679,684,690,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,780,785,790,796,802,807,813,819,825,831,836,842,848],
        [607,610,613,616,619,622,625,628,631,634,637,643,649,654,660,666,672,678,683,689,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,780,785,790,795,801,807,813,819,825,830,836,842,848,854],
        [610,613,616,619,622,625,628,631,634,637,640,646,652,658,664,670,676,682,688,694,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,780,785,790,795,800,806,812,818,824,830,836,842,848,854,860]
      ];

      var todrNumber1280 = [
        [540,543,546,549,552,555,558,561,564,567,570,573,576,579,582,585,588,591,594,597,600,603,606,609,612,615,618,621,624,627,630,634,638,642,646,650,654,658,662,666,670,674,678,682,686,690,694,698,702,706,710],
        [544,547,550,553,556,559,561,564,567,570,573,576,579,582,585,588,591,594,597,600,603,606,609,612,615,619,622,625,628,631,634,638,642,646,650,655,659,663,667,671,675,679,683,687,691,695,699,703,707,711,715],
        [548,551,554,556,559,562,565,568,570,573,576,579,582,585,588,591,594,597,600,603,606,609,612,616,619,622,625,628,632,635,638,642,646,651,655,659,663,667,672,676,680,684,688,692,696,700,704,708,712,716,720],
        [552,555,557,560,563,566,568,571,574,576,579,582,585,588,591,594,597,600,603,606,609,612,616,619,622,626,629,632,635,639,642,646,651,655,659,664,668,672,676,681,685,689,693,697,701,705,709,713,717,721,725],
        [556,559,561,564,566,569,572,574,577,579,582,585,588,591,594,597,600,603,606,609,612,615,619,622,626,629,632,636,639,643,646,650,655,659,664,668,672,677,681,686,690,694,698,702,706,710,714,718,722,726,730],
        [560,563,565,568,570,573,575,578,580,583,585,588,591,594,597,600,603,606,609,612,615,619,622,626,629,633,636,640,643,647,650,655,659,664,668,673,677,682,686,691,695,699,703,707,711,715,719,723,727,731,735],
        [564,566,569,571,574,576,578,581,583,586,588,591,594,597,600,603,606,609,612,615,618,622,625,629,632,636,640,643,647,650,654,659,663,668,672,677,682,686,691,695,700,704,708,712,716,720,724,728,732,736,740],
        [568,570,573,575,577,580,582,584,586,589,591,594,597,600,603,606,609,612,615,618,621,625,628,632,636,640,643,647,651,654,658,663,667,672,677,682,686,691,696,700,705,709,713,717,721,725,729,733,737,741,745],
        [572,574,576,579,581,583,585,587,590,592,594,597,600,603,606,609,612,615,618,621,624,628,632,635,639,643,647,651,654,658,662,667,672,676,681,686,691,696,700,705,710,714,718,722,726,730,734,738,742,746,750],
        [576,578,580,582,584,587,589,591,593,595,597,600,603,606,609,612,615,618,621,624,627,631,635,639,643,647,650,654,658,662,666,671,676,681,686,691,695,700,705,710,715,719,723,727,731,735,739,743,747,751,755],
        [580,582,584,586,588,590,592,594,596,598,600,603,606,609,612,615,618,621,624,627,630,634,638,642,646,650,654,658,662,666,670,675,680,685,690,695,700,705,710,715,720,724,728,732,736,740,744,748,752,756,760],
        [583,585,587,589,591,594,596,598,600,602,604,607,610,613,616,619,622,625,628,631,634,638,642,646,650,655,659,663,667,671,675,680,685,690,695,700,705,710,715,720,725,729,733,737,741,746,750,754,758,762,766],
        [586,588,590,593,595,597,599,601,604,606,608,611,614,617,620,623,626,629,632,635,638,642,646,651,655,659,663,667,672,676,680,685,690,695,700,705,710,715,720,725,730,734,738,743,747,751,755,759,764,768,772],
        [589,591,594,596,598,601,603,605,607,610,612,615,618,621,624,627,630,633,636,639,642,646,651,655,659,664,668,672,676,681,685,690,695,700,705,710,715,720,725,730,735,739,744,748,752,757,761,765,769,774,778],
        [592,594,597,599,602,604,606,609,611,614,616,619,622,625,628,631,634,637,640,643,646,650,655,659,664,668,672,677,681,686,690,695,700,705,710,715,720,725,730,735,740,744,749,753,758,762,766,771,775,780,784],
        [595,598,600,603,605,608,610,613,615,618,620,623,626,629,632,635,638,641,644,647,650,655,659,664,668,673,677,682,686,691,695,700,705,710,715,720,725,730,735,740,745,750,754,759,763,768,772,777,781,786,790],
        [598,601,603,606,608,611,614,616,619,621,624,627,630,633,636,639,642,645,648,651,654,659,663,668,672,677,682,686,691,695,700,705,710,715,720,725,730,735,740,745,750,755,759,764,768,773,778,782,787,791,796],
        [601,604,606,609,612,615,617,620,623,625,628,631,634,637,640,643,646,649,652,655,658,663,667,672,677,682,686,691,696,700,705,710,715,720,725,730,735,740,745,750,755,760,764,769,774,779,783,788,793,797,802],
        [604,607,610,612,615,618,621,624,626,629,632,635,638,641,644,647,650,653,656,659,662,667,672,676,681,686,691,696,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,774,779,784,789,794,798,803,808],
        [607,610,613,616,619,622,624,627,630,633,636,639,642,645,648,651,654,657,660,663,666,671,676,681,686,691,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,780,785,790,794,799,804,809,814],
        [610,613,616,619,622,625,628,631,634,637,640,643,646,649,652,655,658,661,664,667,670,675,680,685,690,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,780,785,790,795,800,805,810,815,820],
        [613,616,619,622,625,628,631,634,637,640,643,646,649,652,655,659,662,665,668,671,674,679,684,689,694,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,780,785,790,795,801,806,811,816,821,826],
        [616,619,622,625,628,631,634,637,640,643,646,649,652,656,659,662,665,668,672,675,678,683,688,694,699,704,709,714,720,725,730,735,740,745,750,755,760,765,770,775,780,785,790,796,801,806,811,816,822,827,832],
        [619,622,625,628,631,634,637,640,643,646,649,652,656,659,662,666,669,672,675,679,682,687,693,698,703,709,714,719,724,730,735,740,745,750,755,760,765,770,775,780,785,790,796,801,806,812,817,822,827,833,838],
        [622,625,628,631,634,637,640,643,646,649,652,655,659,662,666,669,672,676,679,683,686,691,697,702,708,713,718,724,729,735,740,745,750,755,760,765,770,775,780,785,790,795,801,806,812,817,822,828,833,839,844],
        [625,628,631,634,637,640,643,646,649,652,655,659,662,666,669,673,676,680,683,687,690,696,701,707,712,718,723,729,734,740,745,750,755,760,765,770,775,780,785,790,795,801,806,812,817,823,828,834,839,845,850],
        [628,631,634,637,640,643,646,649,652,655,658,662,665,669,672,676,680,683,687,690,694,700,705,711,716,722,728,733,739,744,750,755,760,765,770,775,780,785,790,795,800,806,811,817,822,828,834,839,845,850,856],
        [631,634,637,640,643,646,649,652,655,658,661,665,668,672,676,680,683,687,691,694,698,704,709,715,721,727,732,738,744,749,755,760,765,770,775,780,785,790,795,800,805,811,816,822,828,834,839,845,851,856,862],
        [634,637,640,643,646,649,652,655,658,661,664,668,672,675,679,683,687,691,694,698,702,708,714,719,725,731,737,743,748,754,760,765,770,775,780,785,790,795,800,805,810,816,822,827,833,839,845,851,856,862,868],
        [637,640,643,646,649,652,655,658,661,664,667,671,675,679,683,687,690,694,698,702,706,712,718,724,730,736,741,747,753,759,765,770,775,780,785,790,795,800,805,810,815,821,827,833,839,845,850,856,862,868,874],
        [640,643,646,649,652,655,658,661,664,667,670,674,678,682,686,690,694,698,702,706,710,716,722,728,734,740,746,752,758,764,770,775,780,785,790,795,800,805,810,815,820,826,832,838,844,850,856,862,868,874,880],
        [644,647,650,653,656,660,663,666,669,672,675,679,683,687,691,696,700,704,708,712,716,722,728,734,740,746,752,758,764,770,776,781,786,791,796,802,807,812,817,822,827,833,839,845,851,857,863,869,875,881,887],
        [648,651,654,658,661,664,667,670,674,677,680,684,688,693,697,701,705,709,714,718,722,728,734,740,746,752,758,764,770,776,782,787,792,798,803,808,813,818,824,829,834,840,846,852,858,864,870,876,882,888,894],
        [652,655,659,662,665,669,672,675,678,682,685,689,694,698,702,707,711,715,719,724,728,734,740,746,752,758,764,770,776,782,788,793,799,804,809,815,820,825,830,836,841,847,853,859,865,871,877,883,889,895,901],
        [656,659,663,666,670,673,676,680,683,687,690,694,699,703,708,712,716,721,725,730,734,740,746,752,758,764,770,776,782,788,794,799,805,810,816,821,826,832,837,843,848,854,860,866,872,878,884,890,896,902,908],
        [660,664,667,671,674,678,681,685,688,692,695,700,704,709,713,718,722,727,731,736,740,746,752,758,764,770,776,782,788,794,800,806,811,817,822,828,833,839,844,850,855,861,867,873,879,885,891,897,903,909,915],
        [664,668,671,675,678,682,686,689,693,696,700,705,709,714,718,723,728,732,737,741,746,752,758,764,770,776,782,788,794,800,806,812,817,823,828,834,840,845,851,856,862,868,874,880,886,892,898,904,910,916,922],
        [668,672,675,679,683,687,690,694,698,701,705,710,714,719,724,729,733,738,743,747,752,758,764,770,776,782,788,794,800,806,812,818,823,829,835,841,846,852,858,863,869,875,881,887,893,899,905,911,917,923,929],
        [672,676,680,683,687,691,695,699,702,706,710,715,720,724,729,734,739,744,748,753,758,764,770,776,782,788,794,800,806,812,818,824,830,835,841,847,853,859,864,870,876,882,888,894,900,906,912,918,924,930,936],
        [676,680,684,688,692,696,699,703,707,711,715,720,725,730,735,740,744,749,754,759,764,770,776,782,788,794,800,806,812,818,824,830,836,842,848,854,859,865,871,877,883,889,895,901,907,913,919,925,931,937,943],
        [680,684,688,692,696,700,704,708,712,716,720,725,730,735,740,745,750,755,760,765,770,776,782,788,794,800,806,812,818,824,830,836,842,848,854,860,866,872,878,884,890,896,902,908,914,920,926,932,938,944,950]
      ];

      /*Up to 4000 ft and 50 degrees*/
      var ldrNumber = [
                      [590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,631,632,633,634,635,636,637,638,639,640,644,648,652,656,660,664,668,672,676,680,684,688,692,696,700,704,708,712,716,720],
                      [590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,631,632,634,635,636,637,638,640,641,642,646,650,654,658,662,665,669,673,677,681,685,689,693,697,701,705,709,713,717,721],
                      [590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,631,633,634,636,637,638,640,641,643,644,648,652,655,659,663,667,671,674,678,682,686,690,694,698,702,706,710,714,718,722],
                      [590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,633,635,636,638,640,641,643,644,646,650,653,657,661,665,668,672,676,679,683,687,691,695,699,703,707,711,715,719,723],
                      [590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,635,637,639,641,643,644,646,648,652,655,659,662,666,670,673,677,680,684,688,692,696,700,704,708,712,716,720,724],
                      [590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,654,657,661,664,668,671,675,678,682,685,689,693,697,701,705,709,713,717,721,725],
                      [590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,637,639,641,643,645,648,650,652,655,659,662,666,669,672,676,679,683,686,690,694,698,702,706,710,714,718,722,726],
                      [590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,635,637,640,642,644,647,649,652,654,657,661,664,667,671,674,677,680,684,687,691,695,699,703,707,711,715,719,723,727],
                      [590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,633,635,638,640,643,646,648,651,653,656,659,662,666,669,672,675,678,682,685,688,692,696,700,704,708,712,716,720,724,728],
                      [590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,633,636,638,641,644,647,650,652,655,658,661,664,667,670,674,677,680,683,686,689,693,697,701,705,709,713,717,721,725,729],
                      [590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,633,636,639,642,645,648,651,654,657,660,663,666,669,672,675,678,681,684,687,690,694,698,702,706,710,714,718,722,726,730],
                      [591,593,595,597,599,601,603,605,607,609,611,613,615,617,619,621,623,625,627,629,631,634,637,640,643,646,649,652,655,658,661,664,667,670,673,677,680,683,686,689,692,696,700,704,708,712,716,720,724,728,732],
                      [592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,635,638,641,644,647,650,653,656,659,662,665,668,672,675,678,681,684,688,691,694,698,702,706,710,714,718,722,726,730,734],
                      [593,595,597,599,601,603,605,607,609,611,613,615,617,619,621,623,625,627,629,631,633,636,639,642,645,648,651,654,657,660,663,666,670,673,676,680,683,686,689,693,696,700,704,708,712,716,720,724,728,732,736],
                      [594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,637,640,643,646,649,652,655,658,661,664,667,671,674,678,681,684,688,691,695,698,702,706,710,714,718,722,726,730,734,738],
                      [595,597,599,601,603,605,607,609,611,613,615,617,619,621,623,625,627,629,631,633,635,638,641,644,647,650,653,656,659,662,665,669,672,676,679,683,686,690,693,697,700,704,708,712,716,720,724,728,732,736,740],
                      [596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,639,642,645,648,651,654,657,660,663,666,670,673,677,680,684,688,691,695,698,702,706,710,714,718,722,726,730,734,738,742],
                      [597,599,601,603,605,607,609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,640,643,646,649,652,655,658,661,664,667,671,674,678,682,686,689,693,697,700,704,708,712,716,720,724,728,732,736,740,744],
                      [598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,641,644,647,650,653,656,659,662,665,668,672,676,679,683,687,691,695,698,702,706,710,714,718,722,726,730,734,738,742,746],
                      [599,601,603,605,607,609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,642,645,648,651,654,657,660,663,666,669,673,677,681,685,689,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748],
                      [600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,643,646,649,652,655,658,661,664,667,670,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750],
                      [601,603,605,607,609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,644,647,650,653,657,660,663,666,669,672,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752],
                      [602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,645,648,652,655,658,661,664,668,671,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754],
                      [603,605,607,609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,646,650,653,656,660,663,666,669,673,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756],
                      [604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,647,651,654,658,661,664,668,671,675,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758],
                      [605,607,609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,649,652,656,659,663,666,670,673,677,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760],
                      [606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,650,653,657,660,664,668,671,675,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762],
                      [607,609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,647,651,654,658,662,666,669,673,677,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764],
                      [608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,652,656,659,663,667,671,675,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762,766],
                      [609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,647,649,653,657,661,665,669,672,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764,768],
                      [610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,654,658,662,666,670,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762,766,770],
                      [611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,642,644,646,648,650,652,656,660,664,668,672,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,753,757,761,765,769,773],
                      [612,614,616,618,620,622,624,626,628,630,632,634,636,639,641,643,645,647,650,652,654,658,662,666,670,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,747,751,755,759,763,768,772,776],
                      [613,615,617,619,621,623,625,627,629,631,633,635,638,640,642,645,647,649,651,654,656,660,664,668,672,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,745,749,753,758,762,766,770,775,779],
                      [614,616,618,620,622,624,626,628,630,632,634,636,639,641,644,646,648,651,653,656,658,662,666,670,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,747,751,756,760,764,769,773,778,782],
                      [615,617,619,621,623,625,627,629,631,633,635,638,640,643,645,648,650,653,655,658,660,664,668,672,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,745,749,754,758,763,767,772,776,781,785],
                      [616,618,620,622,624,626,628,630,632,634,636,639,641,644,646,649,652,654,657,659,662,666,670,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,747,751,756,760,765,770,774,779,783,788],
                      [617,619,621,623,625,627,629,631,633,635,637,640,642,645,648,651,653,656,659,661,664,668,672,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,749,753,758,763,768,772,777,782,786,791],
                      [618,620,622,624,626,628,630,632,634,636,638,641,644,646,649,652,655,658,660,663,666,670,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,751,756,760,765,770,775,780,784,789,794],
                      [619,621,623,625,627,629,631,633,635,637,639,642,645,648,651,654,656,659,662,665,668,672,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,753,758,763,768,773,777,782,787,792,797],
                      [620,622,624,626,628,630,632,634,636,638,640,643,646,649,652,655,658,661,664,667,670,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,755,760,765,770,775,780,785,790,795,800]];

                      var ldrNumber1200kg = [
                        [600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,663,666,669,672,675,678,681,684,687,690,694,698,702,706,710,714,718,722,726,730],
                        [601,603,605,607,609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,647,649,652,654,656,658,660,662,665,668,671,674,678,681,684,687,690,693,697,701,705,709,713,717,721,725,729,733],
                        [602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,649,651,653,655,657,660,662,664,667,670,674,677,680,683,686,690,693,696,700,704,708,712,716,720,724,728,732,736],
                        [603,605,607,609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,648,650,652,655,657,659,661,664,666,669,673,676,679,683,686,689,692,696,699,703,707,711,715,719,723,727,731,735,739],
                        [604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,649,651,654,656,658,661,663,666,668,671,675,678,682,685,688,692,695,699,702,706,710,714,718,722,726,730,734,738,742],
                        [605,607,609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,648,650,653,655,658,660,663,665,668,670,674,677,681,684,688,691,695,698,702,705,709,713,717,721,725,729,733,737,741,745],
                        [606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,649,651,654,656,659,662,664,667,669,672,676,679,683,686,690,694,697,701,704,708,712,716,720,724,728,732,736,740,744,748],
                        [607,609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,647,650,652,655,658,661,663,666,669,671,674,678,681,685,689,693,696,700,704,707,711,715,719,723,727,731,735,739,743,747,751],
                        [608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,651,654,656,659,662,665,668,670,673,676,680,684,687,691,695,699,703,706,710,714,718,722,726,730,734,738,742,746,750,754],
                        [609,611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,647,649,652,655,658,661,664,666,669,672,675,678,682,686,690,694,698,701,705,709,713,717,721,725,729,733,737,741,745,749,753,757],
                        [610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,653,656,659,662,665,668,671,674,677,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760],
                        [611,613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,647,649,651,654,657,660,663,667,670,673,676,679,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762],
                        [612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,655,658,662,665,668,671,674,678,681,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764],
                        [613,615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,647,649,651,653,656,660,663,666,670,673,676,679,683,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762,766],
                        [614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,657,661,664,668,671,674,678,681,685,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764,768],
                        [615,617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,647,649,651,653,655,659,662,666,669,673,676,680,683,687,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762,766,770],
                        [616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,660,663,667,670,674,678,681,685,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764,768,772],
                        [617,619,621,623,625,627,629,631,633,635,637,639,641,643,645,647,649,651,653,655,657,661,664,668,672,676,679,683,687,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762,766,770,774],
                        [618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,662,666,669,673,677,681,685,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764,768,772,776],
                        [619,621,623,625,627,629,631,633,635,637,639,641,643,645,647,649,651,653,655,657,659,663,667,671,675,679,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762,766,770,774,778],
                        [620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,664,668,672,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764,768,772,776,780],
                        [621,623,625,627,629,631,633,635,637,639,641,643,645,647,649,652,654,656,658,660,662,666,670,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762,766,770,774,778,782],
                        [622,624,626,628,630,632,634,636,638,640,642,644,646,649,651,653,655,657,660,662,664,668,672,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764,768,772,776,780,784],
                        [623,625,627,629,631,633,635,637,639,641,643,645,648,650,652,655,657,659,661,664,666,670,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762,766,770,774,778,782,786],
                        [624,626,628,630,632,634,636,638,640,642,644,646,649,651,654,656,658,661,663,666,668,672,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764,768,772,776,780,784,788],
                        [625,627,629,631,633,635,637,639,641,643,645,648,650,653,655,658,660,663,665,668,670,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762,766,770,774,778,782,786,790],
                        [626,628,630,632,634,636,638,640,642,644,646,649,651,654,656,659,662,664,667,669,672,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764,768,772,776,780,784,788,792],
                        [627,629,631,633,635,637,639,641,643,645,647,650,652,655,658,661,663,666,669,671,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762,766,770,774,778,782,786,790,794],
                        [628,630,632,634,636,638,640,642,644,646,648,651,654,656,659,662,665,668,670,673,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764,768,772,776,780,784,788,792,796],
                        [629,631,633,635,637,639,641,643,645,647,649,652,655,658,661,664,666,669,672,675,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762,766,770,774,778,782,786,790,794,798],
                        [630,632,634,636,638,640,642,644,646,648,650,653,656,659,662,665,668,671,674,677,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764,768,772,776,780,784,788,792,796,800],
                        [632,634,636,638,640,642,644,646,648,650,652,655,658,661,664,667,670,673,676,679,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,743,747,751,755,759,763,767,771,775,779,783,787,791,795,799,803],
                        [634,636,638,640,642,644,646,648,650,652,654,657,660,663,666,669,672,675,678,681,684,688,692,696,700,704,708,712,716,720,724,728,732,737,741,745,749,753,758,762,766,770,774,778,782,786,790,794,798,802,806],
                        [636,638,640,642,644,646,648,650,652,654,656,659,662,665,668,671,674,677,680,683,686,690,694,698,702,706,710,714,718,722,726,730,735,739,743,748,752,756,760,765,769,773,777,781,785,789,793,797,801,805,809],
                        [638,640,642,644,646,648,650,652,654,656,658,661,664,667,670,673,676,679,682,685,688,692,696,700,704,708,712,716,720,724,728,732,737,741,746,750,754,759,763,768,772,776,780,784,788,792,796,800,804,808,812],
                        [640,642,644,646,648,650,652,654,656,658,660,663,666,669,672,675,678,681,684,687,690,694,698,702,706,710,714,718,722,726,730,735,739,744,748,753,757,762,766,771,775,779,783,787,791,795,799,803,807,811,815],
                        [642,644,646,648,650,652,654,656,658,660,662,665,668,671,674,677,680,683,686,689,692,696,700,704,708,712,716,720,724,728,732,737,741,746,750,755,760,764,769,773,778,782,786,790,794,798,802,806,810,814,818],
                        [644,646,648,650,652,654,656,658,660,662,664,667,670,673,676,679,682,685,688,691,694,698,702,706,710,714,718,722,726,730,734,739,743,748,753,758,762,767,772,776,781,785,789,793,797,801,805,809,813,817,821],
                        [646,648,650,652,654,656,658,660,662,664,666,669,672,675,678,681,684,687,690,693,696,700,704,708,712,716,720,724,728,732,736,741,746,750,755,760,765,770,774,779,784,788,792,796,800,804,808,812,816,820,824],
                        [648,650,652,654,656,658,660,662,664,666,668,671,674,677,680,683,686,689,692,695,698,702,706,710,714,718,722,726,730,734,738,743,748,753,758,763,767,772,777,782,787,791,795,799,803,807,811,815,819,823,827],
                        [650,652,654,656,658,660,662,664,666,668,670,673,676,679,682,685,688,691,694,697,700,704,708,712,716,720,724,728,732,736,740,745,750,755,760,765,770,775,780,785,790,794,798,802,806,810,814,818,822,826,830]
                      ];

                      var ldrNumber1280kg = [
                        [610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750],
                        [612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752],
                        [614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754],
                        [616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756],
                        [618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,678,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758],
                        [620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,678,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760],
                        [622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,678,680,682,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762],
                        [624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,678,680,682,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764],
                        [626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,678,680,682,684,686,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762,766],
                        [628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,678,680,682,684,686,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764,768],
                        [630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,678,680,682,684,686,688,690,694,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,762,766,770],
                        [631,633,635,637,639,641,643,645,647,649,651,653,655,657,659,661,663,665,667,669,671,673,675,678,680,682,684,686,689,691,693,697,701,705,709,713,716,720,724,728,732,736,740,744,748,753,757,761,765,769,773],
                        [632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,677,679,682,684,686,689,691,694,696,700,704,707,711,715,719,723,726,730,734,738,742,747,751,755,759,763,768,772,776],
                        [633,635,637,639,641,643,645,647,649,651,653,655,657,659,661,663,665,667,669,671,673,676,678,681,683,686,689,691,694,696,699,703,706,710,714,718,721,725,729,732,736,740,745,749,753,758,762,766,770,775,779],
                        [634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,677,680,682,685,688,691,694,696,699,702,706,709,713,716,720,724,727,731,734,738,742,747,751,756,760,764,769,773,778,782],
                        [635,637,639,641,643,645,647,649,651,653,655,657,659,661,663,665,667,669,671,673,675,678,681,684,687,690,693,696,699,702,705,709,712,716,719,723,726,730,733,737,740,745,749,754,758,763,767,772,776,781,785],
                        [636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,679,682,686,689,692,695,698,702,705,708,711,715,718,722,725,728,732,735,739,742,747,751,756,760,765,770,774,779,783,788],
                        [637,639,641,643,645,647,649,651,653,655,657,659,661,663,665,667,669,671,673,675,677,680,684,687,691,694,697,701,704,708,711,714,718,721,724,728,731,734,737,741,744,749,753,758,763,768,772,777,782,786,791],
                        [638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,678,682,685,689,692,696,700,703,707,710,714,717,720,724,727,730,733,736,740,743,746,751,756,760,765,770,775,780,784,789,794],
                        [639,641,643,645,647,649,651,653,655,657,659,661,663,665,667,669,671,673,675,677,679,683,687,690,694,698,702,706,709,713,717,720,723,726,729,733,736,739,742,745,748,753,758,763,768,773,777,782,787,792,797],
                        [640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,678,680,684,688,692,696,700,704,708,712,716,720,723,726,729,732,735,738,741,744,747,750,755,760,765,770,775,780,785,790,795,800],
                        [641,643,645,647,649,651,653,655,657,659,661,663,665,667,669,672,674,676,678,680,682,686,690,694,698,702,706,710,714,718,722,725,728,731,734,738,741,744,747,750,753,758,763,768,773,778,783,788,793,798,803],
                        [642,644,646,648,650,652,654,656,658,660,662,664,666,669,671,673,675,677,680,682,684,688,692,696,700,704,708,712,716,720,724,727,730,734,737,740,743,746,750,753,756,761,766,771,776,781,786,791,796,801,806],
                        [643,645,647,649,651,653,655,657,659,661,663,665,668,670,672,675,677,679,681,684,686,690,694,698,702,706,710,714,718,722,726,729,733,736,739,743,746,749,752,756,759,764,769,774,779,784,789,794,799,804,809],
                        [644,646,648,650,652,654,656,658,660,662,664,666,669,671,674,676,678,681,683,686,688,692,696,700,704,708,712,716,720,724,728,731,735,738,742,745,748,752,755,759,762,767,772,777,782,787,792,797,802,807,812],
                        [645,647,649,651,653,655,657,659,661,663,665,668,670,673,675,678,680,683,685,688,690,694,698,702,706,710,714,718,722,726,730,734,737,741,744,748,751,755,758,762,765,770,775,780,785,790,795,800,805,810,815],
                        [646,648,650,652,654,656,658,660,662,664,666,669,671,674,676,679,682,684,687,689,692,696,700,704,708,712,716,720,724,728,732,736,739,743,746,750,754,757,761,764,768,773,778,783,788,793,798,803,808,813,818],
                        [647,649,651,653,655,657,659,661,663,665,667,670,672,675,678,681,683,686,689,691,694,698,702,706,710,714,718,722,726,730,734,738,741,745,749,753,756,760,764,767,771,776,781,786,791,796,801,806,811,816,821],
                        [648,650,652,654,656,658,660,662,664,666,668,671,674,676,679,682,685,688,690,693,696,700,704,708,712,716,720,724,728,732,736,740,744,747,751,755,759,763,766,770,774,779,784,789,794,799,804,809,814,819,824],
                        [649,651,653,655,657,659,661,663,665,667,669,672,675,678,681,684,686,689,692,695,698,702,706,710,714,718,722,726,730,734,738,742,746,750,754,758,761,765,769,773,777,782,787,792,797,802,807,812,817,822,827],
                        [650,652,654,656,658,660,662,664,666,668,670,673,676,679,682,685,688,691,694,697,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764,768,772,776,780,785,790,795,800,805,810,815,820,825,830],
                        [652,654,656,658,660,662,664,666,668,670,672,675,678,681,684,687,690,693,696,699,702,706,710,714,718,723,727,731,735,739,743,747,751,755,759,763,767,771,775,779,783,788,793,798,803,808,813,818,823,828,833],
                        [654,656,658,660,662,664,666,668,670,672,674,677,680,683,686,689,692,695,698,701,704,708,712,717,721,725,729,733,738,742,746,750,754,758,762,766,770,774,778,782,786,791,796,801,806,811,816,821,826,831,836],
                        [656,658,660,662,664,666,668,670,672,674,676,679,682,685,688,691,694,697,700,703,706,710,715,719,723,728,732,736,740,745,749,753,757,761,765,769,773,777,781,785,789,794,799,804,809,814,819,824,829,834,839],
                        [658,660,662,664,666,668,670,672,674,676,678,681,684,687,690,693,696,699,702,705,708,712,717,721,726,730,734,739,743,748,752,756,760,764,768,772,776,780,784,788,792,797,802,807,812,817,822,827,832,837,842],
                        [660,662,664,666,668,670,672,674,676,678,680,683,686,689,692,695,698,701,704,707,710,715,719,724,728,733,737,742,746,751,755,759,763,767,771,775,779,783,787,791,795,800,805,810,815,820,825,830,835,840,845],
                        [662,664,666,668,670,672,674,676,678,680,682,685,688,691,694,697,700,703,706,709,712,717,721,726,730,735,740,744,749,753,758,762,766,770,774,778,782,786,790,794,798,803,808,813,818,823,828,833,838,843,848],
                        [664,666,668,670,672,674,676,678,680,682,684,687,690,693,696,699,702,705,708,711,714,719,723,728,733,738,742,747,752,756,761,765,769,773,777,781,785,789,793,797,801,806,811,816,821,826,831,836,841,846,851],
                        [666,668,670,672,674,676,678,680,682,684,686,689,692,695,698,701,704,707,710,713,716,721,726,730,735,740,745,750,754,759,764,768,772,776,780,784,788,792,796,800,804,809,814,819,824,829,834,839,844,849,854],
                        [668,670,672,674,676,678,680,682,684,686,688,691,694,697,700,703,706,709,712,715,718,723,728,733,738,743,747,752,757,762,767,771,775,779,783,787,791,795,799,803,807,812,817,822,827,832,837,842,847,852,857],
                        [670,672,674,676,678,680,682,684,686,688,690,693,696,699,702,705,708,711,714,717,720,725,730,735,740,745,750,755,760,765,770,774,778,782,786,790,794,798,802,806,810,815,820,825,830,835,840,845,850,855,860]
                      ];

  }
  render() {
    return (
      <Container fluid>

        <h1>Performance</h1>
         <p>Take off and landing</p>

          <code>Still in development...</code>

          {/* Here we will have a image of the mass and balance sheet */}
          <Form id="performance1">

          <Form.Check
          custom
          inline
          defaultChecked="true"
          type="radio"
          label="1100kg"
          name="formHorizontalRadios"
          id="toggle1100kg"
          />
         <Form.Check
          custom
          inline
          type="radio"
          label="1200kg"
          name="formHorizontalRadios"
          id="toggle1200kg"
          />
        <Form.Check
          custom
          inline
          type="radio"
          label="1280kg"
          name="formHorizontalRadios"
          id="toggle1280kg"
          />

            <Form.Row>
              <Col>
                {/*TORA*/}
            <Form.Group controlId="tora">
                  <Form.Label id="mlabel">
                    <b>TORA</b>
                  </Form.Label>

                  <InputGroup className="mb-3">
                   <FormControl type="tora" placeholder="TORA" type="number" defaultValue="2026"/>
                    <InputGroup.Append>
                      <OverlayTrigger trigger="click"  placement="top" overlay={helpTora}>
                              <Button id="helpbutton">?</Button>
                      </OverlayTrigger>
                    </InputGroup.Append>
                  </InputGroup>
              </Form.Group>
              </Col>

              <Col>
                {/*TODA*/}
                <Form.Group controlId="toda">
                <Form.Label id="mlabel">
                 <b>TODA</b>
                </Form.Label>

                <InputGroup className="mb-3">
                <FormControl type="toda" placeholder="TODA" type="number" defaultValue="2086"/>
                <InputGroup.Append>
                  <OverlayTrigger trigger="click"  placement="top" overlay={helpToda}>
                          <Button id="helpbutton">?</Button>
                  </OverlayTrigger>
                </InputGroup.Append>
              </InputGroup>
          </Form.Group>
              </Col>
              <Col>
                {/*ASDA*/}
                <Form.Group controlId="asda">
                <Form.Label id="mlabel">
                 <b>ASDA</b>
                </Form.Label>

                <InputGroup className="mb-3">
                <FormControl type="asda" placeholder="ASDA" type="number" defaultValue="2026" />
                <InputGroup.Append>
                  <OverlayTrigger trigger="click"  placement="top" overlay={helpAsda}>
                          <Button id="helpbutton">?</Button>
                  </OverlayTrigger>
                </InputGroup.Append>
              </InputGroup>
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

                <InputGroup className="mb-3">
                    <FormControl type="elevation" placeholder="Elevation" type="number" defaultValue="38"/>
                    <InputGroup.Append>
                      <OverlayTrigger trigger="click"  placement="top" overlay={helpElevation}>
                              <Button id="helpbutton">?</Button>
                      </OverlayTrigger>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col>
                {/*HPA*/}
                <Form.Group controlId="qnh">
                <Form.Label id="mlabel">
                <b>QNH</b>
                </Form.Label>

                  <InputGroup className="mb-3">
                  <FormControl type="qnh" placeholder="QNH" type="number" />
                  <InputGroup.Append>
                    <OverlayTrigger trigger="click"  placement="top" overlay={helpQNH}>
                            <Button id="helpbutton">?</Button>
                    </OverlayTrigger>
                  </InputGroup.Append>
                </InputGroup>
                </Form.Group>
              </Col>
              <Col>
                {/*Temperature*/}
                <Form.Group controlId="temperature">
                <Form.Label id="mlabel">
                <b>Temperature</b>
                </Form.Label>

                <InputGroup className="mb-3">
                  <Form.Control type="qnh" placeholder="Temperature" type="number" />
                  <InputGroup.Append>
                    <OverlayTrigger trigger="click"  placement="top" overlay={helpTempature}>
                            <Button id="helpbutton">?</Button>
                    </OverlayTrigger>
                  </InputGroup.Append>
                </InputGroup>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
                  <Form.Group as={Col} md="6" controlId="winddirection">
                    <Form.Label id="mlabel"><b>Wind direcetion</b></Form.Label>
                    <InputGroup>
                    <Form.Control type="number" placeholder="Wind direction" required />
                    <InputGroup.Append>
                      <OverlayTrigger trigger="click"  placement="top" overlay={helpWinddirection}>
                              <Button id="helpbutton">?</Button>
                      </OverlayTrigger>
                    </InputGroup.Append>
                  </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="windspeed">
                    <Form.Label id="mlabel"><b>Wind speed</b></Form.Label>
                      <InputGroup>
                    <Form.Control type="number" placeholder="State" required />
                    <InputGroup.Append>
                      <OverlayTrigger trigger="click"  placement="top" overlay={helpWindspeed}>
                              <Button id="helpbutton">?</Button>
                      </OverlayTrigger>
                    </InputGroup.Append>
                  </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="runway">
                    <Form.Label id="mlabel"><b>Runway</b></Form.Label>
                    <InputGroup>
                    <Form.Control type="text" placeholder="runway" defaultValue="255" required />
                    <InputGroup.Append>
                      <OverlayTrigger trigger="click"  placement="top" overlay={helpRunway}>
                              <Button id="helpbutton">?</Button>
                      </OverlayTrigger>
                    </InputGroup.Append>
                  </InputGroup>
                  </Form.Group>
            </Form.Row>

                <Form.Row>
                <Col>
                    {/*LDA most favorable runway*/}
                    <Form.Group controlId="lda1">
                    <Form.Label id="mlabel">
                     <b>LDA most favorable</b>
                    </Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control type="lda1" placeholder="LDA most favorable" defaultValue="1970" type="number" />
                        <InputGroup.Append>
                          <OverlayTrigger trigger="click"  placement="top" overlay={helpLDA}>
                                  <Button id="helpbutton">?</Button>
                          </OverlayTrigger>
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col>
                    {/*LDA most likely runway*/}
                    <Form.Group controlId="lda2">
                    <Form.Label id="mlabel">
                    <b>LDA most likely</b>
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control type="lda2" placeholder="LDA most likely" defaultValue="1970" type="number" />
                      <InputGroup.Append>
                        <OverlayTrigger trigger="click"  placement="top" overlay={helpLDA}>
                                <Button id="helpbutton">?</Button>
                        </OverlayTrigger>
                      </InputGroup.Append>
                    </InputGroup>
                    </Form.Group>
                  </Col>
                </Form.Row>


                <div className="jumbotron" id="performance1Outputs">
                <Form.Row>
                  <Col>
                    {/*Pressure altitude*/}
                    <Form.Group controlId="pressureAltidude">
                    <Form.Label id="mlabel2">
                    <b>Pressure altidude</b>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control disabled type="pressureAltidude" type="number" />
                      <InputGroup.Append>
                        <OverlayTrigger trigger="click"  placement="top" overlay={helpLPressureAlt}>
                                <Button id="helpbutton">?</Button>
                        </OverlayTrigger>
                      </InputGroup.Append>
                    </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col>
                      {/*TODR value from table*/}
                      <Form.Group controlId="todrTable">
                      <Form.Label id="mlabel2">
                      <b>TODR value from table</b>
                      </Form.Label>
                        <InputGroup>
                        <Form.Control disabled type="todrTable" type="number" />
                        <InputGroup.Append>
                          <OverlayTrigger trigger="click"  placement="top" overlay={helpLTODRtable}>
                                  <Button id="helpbutton">?</Button>
                          </OverlayTrigger>
                        </InputGroup.Append>
                      </InputGroup>
                      </Form.Group>
                  </Col>
                </Form.Row>
                    <Form.Row>
                      <Col>
                        {/*Take of distance corrected by wind*/}
                        <Form.Group controlId="windCorrectionTodr">
                        <Form.Label id="mlabel2">
                        <b>TODR corrected by wind</b>
                        </Form.Label>
                          <InputGroup>
                          <Form.Control disabled type="windCorrectionTodr" type="number" />
                          <InputGroup.Append>
                            <OverlayTrigger trigger="click"  placement="top" overlay={helpLTODRtableWind}>
                                    <Button id="helpbutton">?</Button>
                            </OverlayTrigger>
                          </InputGroup.Append>
                        </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col>
                        {/*Final take of distance available*/}
                        <Form.Group controlId="finalTodr">
                        <Form.Label id="mlabel2">
                        <b>Final TODR (+ 30m)</b>
                        </Form.Label>
                        <InputGroup>
                          <Form.Control disabled type="finalTodr" type="number" />
                          <InputGroup.Append>
                            <OverlayTrigger trigger="click"  placement="top" overlay={helpFinalTODR}>
                                    <Button id="helpbutton">?</Button>
                            </OverlayTrigger>
                          </InputGroup.Append>
                        </InputGroup>
                        </Form.Group>
                      </Col>
                   </Form.Row>

                   <Form.Row>
                     <Col>
                       {/*Headwind*/}
                       <Form.Group controlId="headWind">
                       <Form.Label id="mlabel2">
                       <b>Headwind</b>
                       </Form.Label>
                         <InputGroup>
                         <Form.Control disabled type="headWind" type="number" />
                         <InputGroup.Append>
                           <OverlayTrigger trigger="click"  placement="top" overlay={helpHeadwind}>
                                   <Button id="helpbutton">?</Button>
                           </OverlayTrigger>
                         </InputGroup.Append>
                       </InputGroup>
                       </Form.Group>
                     </Col>
                     <Col>
                       {/*Crosswind*/}
                       <Form.Group controlId="crossWind">
                       <Form.Label id="mlabel2">
                       <b>Crosswind</b>
                       </Form.Label>
                        <InputGroup>
                         <Form.Control disabled type="crossWind" type="number" />
                         <InputGroup.Append>
                           <OverlayTrigger trigger="click"  placement="top" overlay={helpXwind}>
                                   <Button id="helpbutton">?</Button>
                           </OverlayTrigger>
                         </InputGroup.Append>
                       </InputGroup>
                       </Form.Group>
                     </Col>
                  </Form.Row>

                  <div id="clearwayAndStopway">
                  <h3 id="mlabel2">Stopway/Clearway</h3>
                  <Form.Row>
                    <Col>
                      {/*clearway lenght*/}
                      <Form.Group controlId="clearwayLenght">
                      <Form.Label id="mlabel2">
                      <b>Clearway length</b>
                      </Form.Label>
                        <InputGroup>
                        <Form.Control disabled type="clearwayLenght" type="number" />
                        <InputGroup.Append>
                          <OverlayTrigger trigger="click"  placement="top" overlay={helpClearway}>
                                  <Button id="helpbutton">?</Button>
                          </OverlayTrigger>
                        </InputGroup.Append>
                      </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col>
                      {/*stopway lenght*/}
                      <Form.Group controlId="stopwayLenght">
                      <Form.Label id="mlabel2">
                      <b>Stopway length</b>
                      </Form.Label>
                      <InputGroup>
                        <Form.Control disabled type="stopwayLenght" type="number" />
                        <InputGroup.Append>
                          <OverlayTrigger trigger="click"  placement="top" overlay={helpStopway}>
                                  <Button id="helpbutton">?</Button>
                          </OverlayTrigger>
                        </InputGroup.Append>
                      </InputGroup>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                      <Form.Row>
                        <Col>
                          {/*TORA*/}
                          <Form.Group controlId="toraFactored">
                          <Form.Label id="mlabel2">
                          <b>TORA factored</b>
                          </Form.Label>
                          <InputGroup>
                            <Form.Control disabled type="toraFactored" type="number" />
                            <InputGroup.Append>
                              <OverlayTrigger trigger="click"  placement="top" overlay={helpTORAFactored}>
                                      <Button id="helpbutton">?</Button>
                              </OverlayTrigger>
                            </InputGroup.Append>
                          </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col>
                          {/*TODA*/}
                          <Form.Group controlId="todaFactored">
                          <Form.Label id="mlabel2">
                          <b>TODA factored</b>
                          </Form.Label>
                          <InputGroup>
                            <Form.Control disabled type="todaFactored" type="number" />
                            <InputGroup.Append>
                              <OverlayTrigger trigger="click"  placement="top" overlay={helpTODAFactored}>
                                      <Button id="helpbutton">?</Button>
                              </OverlayTrigger>
                            </InputGroup.Append>
                          </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col>
                          {/*ASDA*/}
                          <Form.Group controlId="asdaFactored">
                          <Form.Label id="mlabel2">
                          <b>ASDA factored</b>
                          </Form.Label>
                          <InputGroup>
                            <Form.Control disabled type="asdaFactored" type="number" />
                            <InputGroup.Append>
                              <OverlayTrigger trigger="click"  placement="top" overlay={helpASDAFactored}>
                                      <Button id="helpbutton">?</Button>
                              </OverlayTrigger>
                            </InputGroup.Append>
                          </InputGroup>
                          </Form.Group>
                        </Col>
                     </Form.Row>
                 </div>

                 <div id="noClearwayAndStopway">
                   <h3 id="mlabel2">No Stopway/Clearway</h3>
                   <Form.Row>
                     <Col>
                       {/*TODR * 1.25 < TORA*/}
                       <Form.Group controlId="todrFactored">
                       <Form.Label id="mlabel2">
                       <b>TODR</b>
                       </Form.Label>
                       <InputGroup>
                         <Form.Control disabled type="todrFactored" type="number" />
                         <InputGroup.Append>
                           <OverlayTrigger trigger="click"  placement="top" overlay={helpTORAnoClearwayOrStopway}>
                                   <Button id="helpbutton">?</Button>
                           </OverlayTrigger>
                         </InputGroup.Append>
                       </InputGroup>
                       </Form.Group>
                     </Col>
                  </Form.Row>
                </div>
</div>

                <div className="jumbotron" id="performance1Outputs2">

                <Form.Row>
                  <Col>
                    {/*CHECK IF WET*/}
                    <Form.Check
                      type="switch"
                      id="wetSwitch"
                      label="Toggle if runway wet"/>
                  </Col>
                  <Col>
                  </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                <Col>
                    {/*LDR from table*/}
                    <Form.Group controlId="ldrTable">
                    <Form.Label id="mlabel2">
                    <b>LDR from table</b>
                    </Form.Label>
                     <InputGroup>
                      <Form.Control disabled type="ldrTable" type="number" />
                      <InputGroup.Append>
                        <OverlayTrigger trigger="click"  placement="top" overlay={helpLDRtable}>
                                <Button id="helpbutton">?</Button>
                        </OverlayTrigger>
                      </InputGroup.Append>
                    </InputGroup>
                    </Form.Group>
                </Col>
                <Col>
                    {/*LDR corrected by wind*/}
                    <Form.Group controlId="windCorrectionLdr">
                    <Form.Label id="mlabel2">
                    <b>LDR corrected by wind</b>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control disabled type="windCorrectionLdr" type="number" />
                      <InputGroup.Append>
                        <OverlayTrigger trigger="click"  placement="top" overlay={helpLDRwind}>
                                <Button id="helpbutton">?</Button>
                        </OverlayTrigger>
                      </InputGroup.Append>
                    </InputGroup>
                    </Form.Group>
                </Col>
                </Form.Row>
                <Form.Row>
                <Col>
                    {/*LDR from table*/}
                    <Form.Group controlId="ldrTableFactorized">
                    <Form.Label id="mlabel2">
                    <b>LDR from table factored</b>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control disabled type="ldrTableFactorized" type="number" />
                      <InputGroup.Append>
                        <OverlayTrigger trigger="click"  placement="top" overlay={helpLDRtableFactored}>
                                <Button id="helpbutton">?</Button>
                        </OverlayTrigger>
                      </InputGroup.Append>
                    </InputGroup>
                    </Form.Group>
                </Col>
                <Col>
                    {/*LDR corrected by wind*/}
                    <Form.Group controlId="windCorrectionLdrFactorized">
                    <Form.Label id="mlabel2">
                    <b>LDR corrected by wind factored</b>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control disabled type="windCorrectionLdrFactorized" type="number" />
                      <InputGroup.Append>
                        <OverlayTrigger trigger="click"  placement="top" overlay={helpLDRwindFactored}>
                                <Button id="helpbutton">?</Button>
                        </OverlayTrigger>
                      </InputGroup.Append>
                    </InputGroup>
                    </Form.Group>
                </Col>
                </Form.Row>
                </div>
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

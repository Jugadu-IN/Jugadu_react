import React from "react";
import bgright from './BG_right.png';
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import "./w3.css"
import ContactUs from "./ContactUs";
import {Link} from "react-router-dom";

function Landing(){

return <div className="container">

<div className="row">
    <div className="col-lg-6 ">
    <h1  className="Heading w3-animate-left" >SASTA.SUNDAR.<br /> TECH-AO. </h1>   
    <div>
  <p className="content w3-animate-left">We at jugaadu bring your ideas to reality.Have a bussiness<br /> idea?Just contact us to make it a reality
</p> 
</div> 
<div>
{/* <Link to="/contact"><ReactBootStrap.Button className="w3-animate-left" style={{backgroundColor:"#c77b00",fontSize:"16px", padding: "30px 56px", lineHeight: "0",marginTop:"40px"}} size="lg" >Contact Us</ReactBootStrap.Button>{' '}</Link> */}
</div>
    </div>
   <div className="col-lg-6">
  <img id="optionalstuff" className="w3-animate-right img-fluid col-sm-0" src={bgright} style={{height:"450px",paddingTop:"100px",paddingLeft:"30px"}} />
   </div> 
</div>
</div>



}


export default Landing;
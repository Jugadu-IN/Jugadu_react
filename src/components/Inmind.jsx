import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import gradient from "./gradient.jpeg";
import {Link} from "react-router-dom";

function Inmind(){
return <div className="pt-5">

<div style={{borderRadius:"20px"}} className=" container jumbotron">
<div className="row">
 <div className="col-lg-8">
     <h1 style={{fontFamily:"'Poppins', sans-serif",fontWeight:"700"}}>Have a project in mind?</h1>
     <h3 style={{fontSize:"20px",fontWeight:"50",fontFamily:"'Poppins', sans-serif"}} >Contact us and get an immediate estimate to turn your idea into reality.</h3>
     </div>
     <div className="col-lg-4">
     {/* <Link to="/contact"><ReactBootStrap.Button className="" style={{backgroundColor:"#c77b00",fontSize:"16px", padding: "30px 56px", lineHeight: "0"}} size="lg" >Contact Us</ReactBootStrap.Button>{' '}</Link> */}
     </div>
     </div>
     </div>
</div>

}
export default Inmind;
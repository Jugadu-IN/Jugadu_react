import React from "react";
import Logo from './logo.png';
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import {Link} from "react-router-dom";

var on= false;

function Header(){ 
  function handler(){
    var button=document.querySelector("button");
    if(on===false){
    button.style.background="#C77B00";
    on=true;
  }
  else{
    button.style.background="#4043bc";
    on=false;
  }
}
    return  <div className="container">  
  <ReactBootStrap.Navbar style={{backgroundColor:"white"}}  expand="lg">
  <Link to="/"><ReactBootStrap.Navbar.Brand>
      <img
        src={Logo}
        width="70"
        height="70"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      </ReactBootStrap.Navbar.Brand>
      </Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootStrap.Nav className="ml-auto">
      <Link to="/"><ReactBootStrap.Nav className="pr-5 pt-1" style={{color:"#002e5b",fontFamily: "'Open Sans', sans-serif"}} >Home</ReactBootStrap.Nav></Link>
      <Link to="/aboutus"><ReactBootStrap.Nav   className="pr-5 pt-1"style={{color:"#002e5b",fontFamily: "'Open Sans', sans-serif"}}>About</ReactBootStrap.Nav></Link> 
      <Link to="/services"><ReactBootStrap.Nav   className="pr-5 pt-1" style={{color:"#002e5b",fontFamily: "'Open Sans', sans-serif"}}>Services </ReactBootStrap.Nav></Link>
      {/* <Link to="/contact"><ReactBootStrap.Nav  className="pr-5 pt-1" style={{color:"#002e5b",fontFamily: "'Open Sans', sans-serif"}}>Contact</ReactBootStrap.Nav></Link> */}
      <Link to="/ourteam"> <ReactBootStrap.Nav  className="pr-5 pt-1" style={{color:"#002e5b",fontFamily: "'Open Sans', sans-serif"}}>Our Team</ReactBootStrap.Nav></Link>
     {/* <Link to="/contact"> <ReactBootStrap.Button onMouseOver={handler} onMouseLeave={handler} style={{backgroundColor:"#4043BC",fontFamily: "'Open Sans', sans-serif"}} type="button" className="button btn btn-lg btn-primary">Contact Us</ReactBootStrap.Button></Link> */}
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
   
    
    </div>
}   
export default Header;
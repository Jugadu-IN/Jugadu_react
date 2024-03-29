import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Header from "./Header.jsx"; 
import {FaHome} from "react-icons/fa";
import {FaMobileAlt} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import Inmind from "./Inmind";
import Footer from "./Footer";
import emailjs from 'emailjs-com';




const ContactUs=()=>{

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_o7hbaoz', 'template_xrpe5qg', e.target, 'user_biAekCCrPShS6qzPz4MQq')
      .then((result) => {
          console.log(result.text); 
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

    return (<div className="container">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />
<div className="container">
<h2 className="Heading text-center" style={{fontSize:"50px",fontWeight:"700",marginTop:"-100px"}}>Contact Us</h2>

</div>
<div className="container">
<h2 style={{fontSize:"27px",color:"#2B4B80",paddingTop:"50px",fontWeight:"600"}}>Get in Touch</h2>

</div>
<div className="row">
<div className="col-lg-9">
<ReactBootStrap.Form onSubmit={sendEmail}>

<ReactBootStrap.Form.Group style={{height:"190px"}} controlId="exampleForm.ControlTextarea1">
    <ReactBootStrap.Form.Label className="pl-2"></ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control as="textarea" rows="8" name="message" />
  </ReactBootStrap.Form.Group>
  <ReactBootStrap.Row className="pt-5">
    <ReactBootStrap.Col>
      <ReactBootStrap.Form.Control placeholder="First name"  name="name" />
    </ReactBootStrap.Col>
    <ReactBootStrap.Col>
      <ReactBootStrap.Form.Control placeholder="Email" name="email" />
    </ReactBootStrap.Col>
  </ReactBootStrap.Row>
  <ReactBootStrap.Form.Group controlId="formGroupEmail">
    <ReactBootStrap.Form.Label></ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control type="text" placeholder="Enter Subject" name="subject" />
  </ReactBootStrap.Form.Group>
  <ReactBootStrap.Button type="submit" variant="warning" style={{padding:"18px 44px",color:"orange",backgroundColor:"white"}}>S E N D</ReactBootStrap.Button>{' '}
  

</ReactBootStrap.Form>
</div>
<div className="col-lg-3 pl-5">
<div>
<FaHome size="2rem" color="grey"/> 
<span className="pl-2" style={{color: "#2a2a2a",fontWeight:"500"}}>New Delhi, <br /> <span style={{color:"grey"}} className="pl-5">India</span></span>
</div>
<div className="pt-5">
<FaMobileAlt size="2rem" color="grey"/> 
<span className="pl-2" style={{color: "#2a2a2a",fontWeight:"500"}}>+91 9990670099 <br /> <span style={{color:"grey"}} className="pl-5">Mon to Fri 9am to 6pm</span></span>
</div>
<div className="pt-5">
<AiOutlineMail size="2rem" color="grey"/> 
<span className="pl-2" style={{color: "#2a2a2a",fontWeight:"500"}}>+91 9990670099 <br /> <span style={{color:"grey"}} className="pl-5">Mon to Fri 9am to 6pm</span></span>
</div>
</div>
</div>
<Inmind />
<Footer />
</div>)
}
export default ContactUs;
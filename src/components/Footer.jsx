import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import {Link} from "react-router-dom";
import "./styles.css";
import footer from "./footer_bg.png";
import Logo from './logo.png';
import { AiOutlineFacebook,AiOutlineInstagram,AiOutlineLinkedin } from "react-icons/ai";

function Footer(){
    return <div className="container pt-5">
    <div className="row">
    <div className="col-lg-3">
    <img style={{height:"40px"}} src={Logo} />
    <p className="pt-5" style={{color:"#707B8E"}}>New delhi,India</p>
    <p  style={{color:"#707B8E"}}>info@jugadu.in</p>
    <AiOutlineFacebook color={"#707B8E"} size={30} />
    <AiOutlineInstagram color={"#707B8E"} size={30} />
    <AiOutlineLinkedin  color={"#707B8E"} size={30} />

    </div>
    <div className="col-lg-3">
<h4 className="pl-4" style={{color:"#012f5f",fontSize:"20px",fontWeight:"500"}}>Quick Links</h4>
<ul>
   <Link to="/aboutus"> <li className="pt-3"  style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>About</li></Link>
   <Link to="/services"> <li className="pt-3"  style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Services</li></Link>
  <Link to="/ourteam"><li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Our team</li></Link>
  <Link to="/"> <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Blog</li></Link> 
   <Link to="/contact"> <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Contact</li> </Link>
</ul>

    </div>
    <div className="col-lg-3">
<h4  className="pl-4" style={{color:"#012f5f",fontSize:"20px",fontWeight:"500"}}>Support</h4>
<ul>
<Link to="/"> <li className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Privary Policy</li> </Link>
<Link to="/"> <li className="pt-3"  style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Terms & Conditions</li> </Link>
<Link to="/">  <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>SiteMap</li> </Link>
<Link to="/">   <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>FAQS</li></Link>
<Link to="/">   <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Contact Us</li></Link>
</ul>

    </div>
    <div className="col-lg-3">
<h4  className="pl-4" style={{color:"#012f5f",fontSize:"20px",fontWeight:"500"}}>Services</h4>
<ul>
<Link to="/"><li className="pt-3"  style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Website Development</li></Link>
<Link to="/"> <li className="pt-3"  style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>App Development</li></Link>
<Link to="/">  <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>IOT</li></Link>
<Link to="/"><li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>SEO</li></Link>
<Link to="/"> <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Branding</li></Link>
</ul>

    </div>
</div>
    
    </div>
}
export default Footer;
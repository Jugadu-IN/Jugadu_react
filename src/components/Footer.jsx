import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import footer from "./footer_bg.png";
import Logo from './logo.png';
import { AiOutlineFacebook,AiOutlineInstagram,AiOutlineLinkedin } from "react-icons/ai";

function Footer(){
    return <div class="container pt-5">
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
   <a href="/aboutus"> <li className="pt-3"  style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>About</li> </a>
   <a href="/services"> <li className="pt-3"  style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Services</li></a>
   <a href="/ourteam"><li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Our team</li></a>
   <a href="#"><li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Blog</li> </a> 
   <a href="/contact"> <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Contact</li> </a>
</ul>

    </div>
    <div className="col-lg-3">
<h4  className="pl-4" style={{color:"#012f5f",fontSize:"20px",fontWeight:"500"}}>Support</h4>
<ul>
    <a href="#"><li className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Privary Policy</li> </a>
   <a href="#"><li className="pt-3"  style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Terms & Conditions</li> </a> 
   <a href="#"> <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>SiteMap</li> </a>
   <a href="#">  <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>FAQS</li></a>
   <a href="#">   <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Contact Us</li></a>
</ul>

    </div>
    <div className="col-lg-3">
<h4  className="pl-4" style={{color:"#012f5f",fontSize:"20px",fontWeight:"500"}}>Services</h4>
<ul>
<a href="#">  <li className="pt-3"  style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Website Development</li></a>
<a href="#">   <li className="pt-3"  style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>App Development</li></a>
<a href="#">    <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>IOT</li></a>
<a href="#">  <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>SEO</li></a>
<a href="#">   <li  className="pt-3" style={{listStyle:"none",color:"#868c98",fontWeight:"300"}}>Branding</li></a>
</ul>

    </div>
</div>
    
    </div>
}
export default Footer;
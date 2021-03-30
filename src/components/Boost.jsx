import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import bgright from './BG_right.png';
import Services from "./Services.png";
import logo  from "./logo.png"
import {Link} from "react-router-dom";
function Boost(){
    return <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<div className="" >
<div className="container">
<div className="pb-5 row">
<div className="col-lg-6" >
<img id="optionalstuff" className="w3-animate-left img-fluid col-sm-0" src={logo} style={{height:"400px",paddingTop:"",paddingLeft:""}} />
</div>
<div className="col-lg-6 pt-5">
    <h1 style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>Jugadu Boost</h1>
    <p style={{color:"#8F8F8F" , marginTop:"50px"}}> 
    <ul> <h5 style={{color:'#f4c430'}} > Business Value Pack</h5>
      <li>Price: @3999/-</li>
      <li>Static Content Website</li>
      <li>Beautiful & Responsive designs</li>
      <li>Single Page Website</li>
      <li>1 Email ID</li>
      <li>Hosting at 99 Rs./month (Billed Yearly)</li>
   </ul> 
   <ul> <h5 style={{color:'#f4c430'}}>Essentials Pack</h5>
   <li> Price: @5999/- </li>
   <li> Dynamic Website ( Editable Content )[2 components]</li>
    <li>Single Page Website</li>
    <li>Free .jugadu.in subdomain</li>
   <li>2 Email IDs</li>
    <li>Hosting at 99 Rs./month (Billed Yearly)</li>

   </ul> 
   <ul> <h5 style={{color:'#f4c430'}}> Dope Pack</h5>
  <li> Price: @6999/-</li>
<li>Dynamic Website ( Editable Content )[5 components-1 max Image Based]</li>
<li>3 Email IDs</li>
<li>Free SSL(https://)</li>
<li>Upto 5 web pages</li>
<li>Responsive Design</li>
<li>Hosting at 99 Rs./month (Billed Yearly)</li>

   </ul> 
   
   <ul> <h5 style={{color:'#f4c430'}}>GOAT(Greatest Of All Time) Pack</h5>
  <li> Price: @9999/-</li>
<li>Everything in Jugadu Boost - Dope Pack</li>
<li>Free hosting for the first 3 months.</li>
<li>5 Email IDs</li>
<li>SEO optimized website</li>
<li>Super fast loading time</li>
<li>1 User Submitted Form</li>
<li>Dynamic Website ( Editable Content )[8 components - 3 max Image Based]</li>
<li>Upto 10 web pages</li>
<li>Free Analytics</li>
<li>Hosting at 149 Rs./month (Billed Yearly)</li>
</ul>


<ul><h5 style={{color:'#f4c430'}}>Mood (Custom website)</h5>
       <li>Custom Pricing</li>
       <li>SEO optimized website</li>
       <li>Super fast loading time</li>
       <li>Dynamic Website ( Editable Content )[Custom Components]</li>
       <li>Choice of premium templates or Custom design</li>
       <li>On demand custom features</li>
</ul>

  
   <ul> <h5 style={{color:'#f4c430'}}>Jugadu Add Ons</h5>
  <li> Payment Gateway - Rs. 2999/- + 0.75% ( ours/transaction ) + (% transaction/provider)</li>
  <li>Lightning Load Package - Faster load times help with SEO - Rs. 399/-</li>
 <li> Basic SEO Package - Faster load time, SEO Optimised content, SEO oriented caching - Rs. 1000/-</li>
   <li>Maps - Rs. 399 + API Key Charges</li>
<li>Email ID - Rs. 10/- per Email / per month (Billed yearly)</li>
<li>Whatsapp Message - Rs. 399</li>
<li>Social media Integration - Rs. 499</li>
<li>Removal of Jugadu Banner - Rs. 1999</li>
<li>User Submitted Forms - Rs. 699/- per form</li>
<li>Analytics - Rs. 1499</li>
<li>New Website Page - Rs. 399 ( Non-editable) | Rs. 599 ( Editable )</li>
<li>@999/- Basic Yearly Maintenance ( Bug Fixes + Backend Updates )</li>
<li>Basic Yearly Maintenance - Customizable</li>
<li>Blog - Customizable</li>
<li>Content - Customizable</li>
<li>Custom UI design - Customizable</li>
<li>Targeted SEO - Customizable</li>



   </ul> 

   </p>
<Link to="/contact"><button style={{backgroundColor:"#C77B00",color:"white"}} className="btn btn-lg ">Contact Us</button></Link>
</div>
</div>
</div>
<div style={{backgroundColor:"#f7f5fa"}} className="row">
<div className="container">
<div className="row">
<div className="col-lg-6">
<h1 className="pt-5" style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>Why Choose Jugadu for Your Website Development Needs? </h1>
<h5 style={{fontFamily:"'Open Sans', sans-serif",color:"#818181"}}>• Result-driven web development and web design services<br /> • Completely scalable websites which will look equally good on PCs and mobile devices <br /> • Websites that directly appeal to your audience in conjunction with a strong backend <br /> • Professional web developers who create future-ready websites <br /> • Great comfort level and knowledge with all contemporary web development platforms and coding languages <br /> • Complete customization of all contemporary and cutting-edge CMS solutions <br /> • Very fast and economical work time</h5>
</div>
<div className="col-lg-6">
<img  id="optionalstuff" className="img-fluid col-sm-0" src={Services} style={{height:"500px",paddingTop:"50px",paddingLeft:"30px"}} />
</div>
</div>
</div>
</div>
</div>
<Footer style={{paddingTop:"1000px"}} className="pt-5"/>
    </div>
}
export default Boost;
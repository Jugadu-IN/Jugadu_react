import React from "react";
import {Route,Switch} from "react-router-dom";
import Header from "./Header.jsx"; 
import Landing from "./Landing.jsx";
import Business from "./Business";
import Contact from "./Contact";
import WhyUs from "./WhyUs";
import Workdone from "./Workdone"
import Testimonials from "./Testimonials";
import Inmind from "./Inmind";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Services from "./Services";
import ContactUs from "./ContactUs";
import Ourteam from "./Ourteam.jsx";
import webdev from "./webdev.jsx";
import Appdev from "./Appdev";
import Iotdev from "./Iotdev";
import Seodev from "./Seodev.jsx";
import Brandingdev from "./Brandingdev.jsx";
import simerneet from "./Teaminfo/simerneet.js";
import vasu from "./Teaminfo/vasu.js";
import dhruv from "./Teaminfo/dhruv";
import jatin from "./Teaminfo/jatin.js";
import gunjan from "./Teaminfo/gunjan.js";
import raghav from "./Teaminfo/raghav";
import aman from "./Teaminfo/aman.js";
import ankita from "./Teaminfo/ankita.js";
import vishesh from "./Teaminfo/vishesh";
import aditya from "./Teaminfo/aditya.js";
import nikhil from "./Teaminfo/nikhil.js" ;
import akshita from "./Teaminfo/akshita.js" ;
import arun from "./Teaminfo/arun.js" ;
import georgi from "./Teaminfo/georgi.js" ;
import mohit from "./Teaminfo/mohit.js" ;
import prableen from "./Teaminfo/prableen.js" ;
import sumit from "./Teaminfo/sumit.js" ;
import ScrollToTop from "./ScrollToTop.js";
import amanjoshi from "./Teaminfo/amanjoshi.js";
import Red from './Red.jsx'
import Boost from './Boost.jsx'
import CardSection from './BoostCardSection'

function App(){
    return <div>
    <ScrollToTop />
   <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/aboutus" component={Aboutus} />
       <Route path="/services" component={Services} />
       <Route path="/contact" component={ContactUs} />
       <Route path="/ourteam" component={Ourteam} />
       <Route path="/webdev" component={webdev} />
       <Route path="/appdev" component={Appdev}/>
       <Route path="/iotdev" component={Iotdev} />
       <Route path="/seodev" component={Seodev} />
       <Route path="/brandingdev" component={Brandingdev} />
       <Route path="/simerneet" component={simerneet} />
       <Route path="/vasu" component={vasu} />
       <Route path="/dhruv" component={dhruv} />
       <Route path="/jatin" component={jatin} />
       <Route path="/gunjan" component={gunjan} />
       <Route path="/raghav" component={raghav} />
       <Route path="/amankumar" component={aman} />
       <Route path="/ankita" component={ankita} />
       <Route path="/vishesh" component={vishesh} />
      <Route path="/nikhil" component={nikhil} />
      <Route path="/aditya" component={aditya} />
      <Route path="/akshitabansal" component={akshita} />
      <Route path="/arunH" component={arun} />
      <Route path="/georgiD" component={georgi} />
      <Route path="/mohit" component={mohit} />
      <Route path="/prableen" component={prableen} />
      <Route path="/sumityadav" component={sumit} />
      <Route path="/amanjoshi" component={amanjoshi} />
      <Route path="/jugaduRed" component={Red}/>
      <Route path="/jugaduBoost" component={CardSection}/>
   </Switch>



          {/*  <Header />  
            <Landing />
            <Business />
            <Contact />
            <WhyUs />
            <Workdone />
           <Inmind /> */}
   
           
    </div>
    
}
export default App;
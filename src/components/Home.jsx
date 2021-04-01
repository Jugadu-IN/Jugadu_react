import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Header from "./Header.jsx"; 
import Landing from "./Landing.jsx";
import Business from "./Business";
import Contact from "./Contact";
import WhyUs from "./WhyUs";
import Workdone from "./Workdone"
import Testimonials from "./Testimonials";
import Inmind from "./Inmind";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import Api from "./Api";


function Home(){
    return <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />
<Landing />
<Business />
{/* <Contact /> */}
<WhyUs />
<Workdone />
<Testimonials />
<Inmind />
<Footer />
<Api />



</div>
}
export default Home;
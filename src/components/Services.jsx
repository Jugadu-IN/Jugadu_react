import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Header from "./Header";
import Business from "./Business";
import WhyUs from "./WhyUs";
import Inmind from "./Inmind";
import Footer from "./Footer";
import ProductSection from "./ProductSection";

function Services(){
return <div>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <Header />
    
    <Business />
    
    <WhyUs />
    <Inmind />  
    
    <Footer />
    </div>
}
export default Services;
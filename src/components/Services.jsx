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
    <meta name="title" content="Jugadu.in | The affordable solution for all your tech needs"/>
<meta name="description" content="Jugadu.in aims to provide solution to your tech needs with our services to help your business with a website and E-commerce solution for your business"/>
<meta name="keywords" content="jugadu,jugad,jugaad,website development in delhi,ecommerce development in delhi,ecommerce solution,affordable dynamic website,custom ecommerce"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta name="revisit-after" content="15 days"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <Header />
    
    <Business />
    
    <WhyUs />
    <Inmind />  
    
    <Footer />
    </div>
}
export default Services;
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
    <meta name="title" content="Jugadu.in | The affordable solution for all your tech needs"/>
<meta name="description" content="Jugadu.in aims to provide solution to your tech needs with our services to help your business with a website and E-commerce solution for your business"/>
<meta name="keywords" content="jugadu,jugad,jugaad,website development in delhi,ecommerce development in delhi,ecommerce solution,affordable dynamic website,custom ecommerce"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta name="revisit-after" content="15 days"/>
<meta name="author" content="Jugadu.in"></meta>
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
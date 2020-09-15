import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Contact from "./Contact";
import Header from "./Header";
import WhyUs from "./WhyUs";
import Workdone from "./Workdone";
import Inmind from "./Inmind";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function Aboutus(){
    return <div>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />
<Contact />
<WhyUs />
<Workdone />
<Testimonials />
<Inmind />
<Footer />
</div>
}
export default Aboutus;
import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Showworks from "./Showworks";
import "./styles.css";
import visit1 from "./visit_1.jpg";
import visit2 from "./visit_2.jpg";
import visit3 from "./visit_3.jpg";
import visit4 from "./visit_4.jpg";


function Workdone(){
    return <div className="justify-content-center">
    <h2 className="Heading text-center" style={{fontSize:"50px"}}>Visit Some of Our <br /> Awesome Stuffs</h2>
    <div style={{widh:"100%",textAlign:"center",marginTop:"0%"}} className="work row pt-5">
    <div className="col-md-3"> <Showworks title="B2B Ecommerce System" name="BulkBazaar" image={visit1} url="https://bulkbazar.in" /></div>
    <div className="col-md-3"> <Showworks title="Brand Website Development"name="BluebeeIndia" image={visit2} url="https://blubeeindia.com" /></div>
    <div className="col-md-3"> <Showworks  title="App and Website Development" name="Unity Poultry" image={visit3} url="https://www.unitypoultry.com" /></div>
    <div className="col-md-3"> <Showworks title="Website React Native Development" name="Concord App" image={visit4} url="https://concordapp.in/" /></div>
</div>

    </div>
}
export default Workdone;
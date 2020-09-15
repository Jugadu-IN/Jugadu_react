import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Teamcards from "./Teamcards";

function Team(props){
    return <div className="col-lg-4 pt-5">
    <img style={{widh:"100%",textAlign:"center",marginTop:"0%"}} style={{ borderRadius: "50%" }} src={props.image} width="255px" height="256px" />
    <div className="container text-center">
   <a> <h2 className="" style={{color:"#828bb2",fontWeight:"bold"}}>{props.name}</h2> </a>
   <p className="" style={{color:"#707B8E",fontSize:"19.2px"}}>{props.position}</p>
   <p className="" style={{color:"#707B8E",fontSize:"16px",marginTop:"0"}}>{props.location}</p>

</div>
    </div>
}
export default Team;
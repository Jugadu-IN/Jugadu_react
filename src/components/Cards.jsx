import React from "react";
import seo from "./seo.svg";
import next from "./next.svg";
import app from "./app.svg";
import * as ReactBootStrap from "react-bootstrap";
import {Link} from "react-router-dom";
function Cards(props){
    return <ReactBootStrap.Card className="col-lg-4 col-xs-6 boxy" style={{ width: '20rem',height:"400px",border:"0" }} >
    <ReactBootStrap.Card.Img className="container" style={{width:"100px",height:"100px"}} variant="top" src={props.img} />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title> <h4 style={{color: "#2b4b80"}}>{props.title} </h4></ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        {props.description}
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <Link to={props.link} style={{color:"#7b40c0"}}><img src={next} style={{height:"20px",textDecoration:"none"}} />   Get Started</Link>
  </ReactBootStrap.Card>
}
export default Cards;
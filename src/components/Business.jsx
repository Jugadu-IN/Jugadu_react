import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Cards from "./Cards"
import content from "./content";
import seo from "./seo.svg";
import app from "./app.svg";

function Business(){

    function handler(Card){
        return <Cards img={Card.image} title={Card.title} description={Card.description} />
    }
return <div className="">
        <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-tittle text-center">
                            <h2 style={{paddingTop:"100px",color: "#2b4b80",fontSize: "50px",fontWeight:"700"}}>What We Will Do For Your<br /> Business​?</h2>
                        <div className="justify-content-center row pt-5 pb-5 business  ">
                        <div className="row">
                        {content.map(handler)}
                        </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
</div>
}
export default Business;
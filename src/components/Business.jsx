import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Cards from "./Cards"
import content from "./content";
import seo from "./seo.svg";
import app from "./app.svg";

function Business(){

    function handler(Card){
        return <Cards link={Card.link} img={Card.image} title={Card.title} description={Card.description} />
    }
return <div className="container pt-5">
        <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 justify-content-center">
                        <div className="section-tittle text-center">
                            <h2 className="Heading" style={{paddingTop:"100px",color: "#2b4b80",fontWeight:"700"}}>What We Will Do For Your<br /> Business​?</h2>
                        <div className="justify-content-center row pt-5 pb-5 business  ">
                        <div className="row justify-content-center">
                        {content.map(handler)}
                        </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
</div>
}
export default Business;
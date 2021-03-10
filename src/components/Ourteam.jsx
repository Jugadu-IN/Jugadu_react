import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Team from "./Team";
import Header from "./Header.jsx"; 
import Teamcards, {OldTeam} from "./Teamcards";
import Footer from "./Footer";
function Ourteam(){

    function handler(card){
        return <Team image={card.image} name={card.name} position={card.Position} location={card.Location} description={card.description} link={card.Link} />
    }
    return <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Header />
        <div className="text-center" >
            <h2 className="Heading">Our Team</h2>
        </div>
        <div style={{widh:"100%",textAlign:"center",marginTop:"0%"}} className="Team justify-content-center container">
            <div className="row">
                {Teamcards.map(handler)}
            </div>
        </div>

        <div className="text-center" >
            <h2 className="Heading">Past Interns</h2>
        </div>
        <div style={{widh:"100%",textAlign:"center",marginTop:"0%"}} className="Team justify-content-center container">
            <div className="row">
                {OldTeam.map(handler)}
            </div>
        </div>

        <Footer />
    </div>
}
export default Ourteam;
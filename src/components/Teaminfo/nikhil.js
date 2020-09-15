import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Simerneet from "../Ourteam/simerneet.jpg";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";

function nikhil(){
    return <div className="container">

<Header />

<Information image={Teamcards[9].image} description={Teamcards[9].description} position={Teamcards[9].Position} name={Teamcards[9].name}  />
<Footer/>
    </div>
}
export default nikhil;
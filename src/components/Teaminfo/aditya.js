import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Simerneet from "../Ourteam/simerneet.jpg";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";


function aditya(){
    return <div className="container">

<Header />

<Information  image={Teamcards[10].image} description={Teamcards[10].description} position={Teamcards[10].Position} name={Teamcards[10].name}  />
<Footer/>
    </div>
}
export default aditya;
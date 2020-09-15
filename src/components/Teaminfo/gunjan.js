import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Simerneet from "../Ourteam/simerneet.jpg";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";


function gunjan(){
    return <div className="container">

<Header />

<Information image={Teamcards[4].image} description={Teamcards[4].description} position={Teamcards[4].Position} name={Teamcards[4].name}   />
<Footer/>
    </div>
}
export default gunjan;
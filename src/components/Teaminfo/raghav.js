import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Simerneet from "../Ourteam/simerneet.jpg";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";



function raghav(){
    return <div className="container">

<Header />

<Information image={Teamcards[5].image} description={Teamcards[5].description} position={Teamcards[5].Position} name={Teamcards[5].name}  />
<Footer/>
    </div>
}
export default raghav;
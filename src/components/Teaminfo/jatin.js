import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Simerneet from "../Ourteam/simerneet.jpg";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";


function jatin(){
    return <div className="container">

<Header />

<Information image={Teamcards[3].image} description={Teamcards[3].description} position={Teamcards[3].Position} name={Teamcards[3].name} />
<Footer/>
    </div>
}
export default jatin;
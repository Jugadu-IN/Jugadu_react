import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Simerneet from "../Ourteam/simerneet.jpg";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";

function aman(){
    return <div className="container">

<Header />

<Information  image={Teamcards[6].image} description={Teamcards[6].description} position={Teamcards[6].Position} name={Teamcards[6].name} />
<Footer/>
    </div>
}
export default aman;
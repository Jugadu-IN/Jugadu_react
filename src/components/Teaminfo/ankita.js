import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Simerneet from "../Ourteam/simerneet.jpg";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";

function ankita(){
    return <div className="container">

<Header />

<Information  image={Teamcards[7].image} description={Teamcards[7].description} position={Teamcards[7].Position} name={Teamcards[7].name} />
<Footer/>
    </div>
}
export default ankita;
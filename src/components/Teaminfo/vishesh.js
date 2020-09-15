import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Simerneet from "../Ourteam/simerneet.jpg";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";

function vishesh(){
    return <div className="container">

<Header />

<Information  image={Teamcards[8].image} description={Teamcards[8].description} position={Teamcards[8].Position} name={Teamcards[8].name} />
<Footer/>
    </div>
}
export default vishesh;
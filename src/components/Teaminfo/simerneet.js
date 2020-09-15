import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Simerneet from "../Ourteam/simerneet.jpg";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";


function simerneet(){
    return <div className="container">

<Header />

<Information image={Teamcards[0].image} description={Teamcards[0].description} position={Teamcards[0].Position} name={Teamcards[0].name} />
<Footer/>
    </div>
}
export default simerneet;
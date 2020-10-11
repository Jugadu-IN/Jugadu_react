import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Simerneet from "../Ourteam/simerneet.jpg";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";

function aman(){
    return <div className="container">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<Information  image={Teamcards[6].image} description={Teamcards[6].description} position={Teamcards[6].Position} name={Teamcards[6].name} />
<Footer/>
    </div>
}
export default aman;
import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";

function arunH(){
    return <div className="container">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<Information  image={Teamcards[8].image} description={Teamcards[8].description} position={Teamcards[8].Position} name={Teamcards[8].name} />
<Footer/>
    </div>
}
export default arunH;
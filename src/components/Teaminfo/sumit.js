import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";

function sumit(){
    return <div className="container">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<Information  image={Teamcards[7].image} description={Teamcards[7].description} position={Teamcards[7].Position} name={Teamcards[7].name} />
<Footer/>
    </div>
}
export default sumit;
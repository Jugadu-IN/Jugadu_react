import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";
 
function aditya(){
return <div className="container">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<Information image={Teamcards[17].image} description={Teamcards[17].description} position=
{Teamcards[17].Position} name={Teamcards[17].name} /> 
<Footer/>
</div>
}
export default aditya; //name
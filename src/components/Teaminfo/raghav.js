import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";
 
function raghav(){
return <div className="container">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<Information image={Teamcards[12].image} description={Teamcards[12].description} position=
{Teamcards[12].Position} name={Teamcards[12].name} /> 
<Footer/>
</div>
}
export default raghav; //name
import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";
 
function vishesh(){
return <div className="container">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<Information image={Teamcards[15].image} description={Teamcards[15].description} position=
{Teamcards[15].Position} name={Teamcards[15].name} /> 
<Footer/>
</div>
}
export default vishesh; //name
import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";
 
function gunjan(){
return <div className="container">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<Information image={Teamcards[11].image} description={Teamcards[11].description} position=
{Teamcards[11].Position} name={Teamcards[11].name} /> 
<Footer/>
</div>
}
export default gunjan; //name
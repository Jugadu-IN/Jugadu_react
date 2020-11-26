import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";
 
function nikhil(){
return <div className="container">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<Information image={Teamcards[16].image} description={Teamcards[16].description} position=
{Teamcards[16].Position} name={Teamcards[16].name} /> 
<Footer/>
</div>
}
export default nikhil; //name
import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";
 
function amanjoshi(){
return <div className="container">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<Information image={Teamcards[10].image} description={Teamcards[10].description} position=
{Teamcards[10].Position} name={Teamcards[10].name} /> 
<Footer/>
</div>
}
export default amanjoshi; //name
import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";
 
function akshitabansal(){
return <div className="container">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<Information image={Teamcards[9].image} description={Teamcards[9].description} position=
{Teamcards[9].Position} name={Teamcards[9].name} /> 
<Footer/>
</div>
}
export default akshitabansal; //name
import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";
 
function ankita(){
return <div className="container">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<Information image={Teamcards[14].image} description={Teamcards[14].description} position=
{Teamcards[14].Position} name={Teamcards[14].name} /> 
<Footer/>
</div>
}
export default ankita; //name
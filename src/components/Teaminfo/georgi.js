import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";
 
function georgiD(){
return <div className="container">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<Information image={Teamcards[5].image} description={Teamcards[5].description} position=
{Teamcards[5].Position} name={Teamcards[5].name} /> 
<Footer/>
</div>
}
export default georgiD; //name
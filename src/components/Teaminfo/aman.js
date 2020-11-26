import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import Information from "../Infomation";
import Teamcards from "../Teamcards";
 
function amankumar(){
return <div className="container">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<Header />

<Information image={Teamcards[13].image} description={Teamcards[13].description} position=
{Teamcards[13].Position} name={Teamcards[13].name} /> 
<Footer/>
</div>
}
export default amankumar; //name
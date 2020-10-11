import React from "react";
import App from "./App";
import whatsapp from './whatsapp.png';
import { IoLogoWhatsapp } from "react-icons/io";
import "./api.css";
import { BsFillCircleFill } from "react-icons/bs";


function Api(){
return <div className="float">
   <a className=""  href="//api.whatsapp.com/send?phone=919990670099&text=Hey%20Jugadu%2c%20I%20have%20a%20query%20regarding%20:"><img src={whatsapp} /></a>
</div>
}
export default Api;
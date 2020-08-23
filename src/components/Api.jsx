import React from "react";
import App from "./App";
import whatsapp from './whatsapp.png';
import { FaWhatsapp } from "react-icons/fa";


function Api(){
return <div className="col-lg-1" style={{marginLeft:"auto"}}>
   <a className="container justify-content-right" style={{position:"fixed",bottom:"0"}} href="//api.whatsapp.com/send?phone=919990670099&text=Hey%20Jugadu%2c%20I%20have%20a%20query%20regarding%20:"><FaWhatsapp size={70} color="#25d366"/></a>
</div>
}
export default Api;
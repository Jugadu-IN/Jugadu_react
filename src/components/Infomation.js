import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import simerneet from "./Ourteam/simerneet.jpg";

function Information(props){
    return <div>
<div className="row pt-5 pb-5">
<div className="col-lg-6">
<img className="justify-content-center text-center" style={{width:"75%",borderRadius:"50%"}} src={props.image} />
</div>
<div className="col-lg-6 pt-4">
    <h2 className=""  style={{color:"#828BB2",fontSize:"2rem"}}>{props.name}</h2>
    <h2 className=""  style={{color:"#828BB2",fontSize:"2rem"}}>{props.position}</h2>
    <p className="" style={{color:"#8F8F8F"}}>{props.description}</p>
</div>
</div>
    </div>
}
export default Information;